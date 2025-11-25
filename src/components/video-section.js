import videos from '../data/videos/videos.json'

function buildVideoCard(video) {
  const youtubeThumb = video.youtubeId ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg` : ''
  const thumb = video.thumbnail || youtubeThumb
  const thumbStyle = thumb ? `style="background-image: url('${thumb}')"` : ''
  const label = video.tipo === 'youtube' ? 'YouTube' : 'Video local'

  return `
    <article class="video-card" data-id="${video.id}">
      <div class="video-card__thumb" ${thumbStyle}>
        <div class="video-card__thumb-overlay">
          <button class="video-card__play" type="button" aria-label="Reproducir ${video.titulo}" data-id="${video.id}">▶</button>
        </div>
      </div>
      <div class="video-card__body">
        <p class="badge ghost">${label}</p>
        <h3>${video.titulo}</h3>
        <p>${video.descripcion}</p>
        <button class="button ghost video-card__open" type="button" data-id="${video.id}">Ver video</button>
      </div>
    </article>
  `
}

function renderPlayer(video) {
  if (video.tipo === 'youtube' && video.youtubeId) {
    return `<iframe src="https://www.youtube.com/embed/${video.youtubeId}" title="${video.titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  }

  if (video.tipo === 'local' && video.archivo) {
    return `<video src="${video.archivo}" controls poster="${video.thumbnail || ''}"></video>`
  }

  return '<p>No se pudo cargar el video.</p>'
}

export function createVideoSection() {
  const section = document.createElement('section')
  section.className = 'videos'
  section.id = 'videos'

  const cards = videos.map((video) => buildVideoCard(video)).join('')

  section.innerHTML = `
    <div class="section-header">
      <p class="badge">Contenido educativo</p>
      <h2>Aprende con La Abejería</h2>
      <p class="subtitle">Historias, recetas y buenas prácticas para aprovechar cada producto.</p>
    </div>
    <div class="video-carousel">
      <button class="video-carousel__nav" type="button" data-direction="backward" aria-label="Ver videos anteriores">←</button>
      <div class="video-track" role="list">${cards}</div>
      <button class="video-carousel__nav" type="button" data-direction="forward" aria-label="Ver videos siguientes">→</button>
    </div>
    <div class="video-modal" hidden>
      <div class="video-modal__backdrop" data-close="true"></div>
      <div class="video-modal__dialog" role="dialog" aria-modal="true">
        <button class="video-modal__close" type="button" aria-label="Cerrar video" data-close="true">×</button>
        <div class="video-modal__body"></div>
      </div>
    </div>
  `

  const track = section.querySelector('.video-track')
  const navButtons = section.querySelectorAll('.video-carousel__nav')
  const modal = section.querySelector('.video-modal')
  const modalBody = section.querySelector('.video-modal__body')

  const getCardWidth = () => {
    const card = track.querySelector('.video-card')
    return card ? card.getBoundingClientRect().width + 16 : 320
  }

  function scrollCarousel(direction) {
    const distance = direction === 'forward' ? getCardWidth() : -getCardWidth()
    track.scrollBy({ left: distance, behavior: 'smooth' })
  }

  function findVideoById(id) {
    return videos.find((item) => String(item.id) === String(id))
  }

  function openModal(video) {
    modalBody.innerHTML = `
      <div class="video-modal__header">
        <p class="badge ghost">${video.tipo === 'youtube' ? 'YouTube' : 'Video'}</p>
        <h3>${video.titulo}</h3>
      </div>
      <div class="video-modal__player">${renderPlayer(video)}</div>
      <p class="subtitle">${video.descripcion}</p>
    `
    modal.hidden = false
    document.body.classList.add('no-scroll')
  }

  function closeModal() {
    modal.hidden = true
    modalBody.innerHTML = ''
    document.body.classList.remove('no-scroll')
  }

  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => scrollCarousel(btn.dataset.direction))
  })

  track.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLElement)) return
    const id = target.dataset.id || target.closest('.video-card')?.dataset.id
    if (!id) return

    const video = findVideoById(id)
    if (video) {
      openModal(video)
    }
  })

  modal.addEventListener('click', (event) => {
    const target = event.target
    if (target instanceof HTMLElement && target.dataset.close === 'true') {
      closeModal()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!modal.hidden && event.key === 'Escape') {
      closeModal()
    }
  })

  return section
}
