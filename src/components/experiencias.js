import experiencias from '../data/experiencias.json'

function buildCard(experiencia) {
  return `
    <article class="experiencia-card" data-id="${experiencia.id}">
      <div class="experiencia-card__image">
        <img src="${experiencia.imagen}" alt="${experiencia.titulo}" loading="lazy" />
        <div class="experiencia-card__overlay">
          <span class="badge">Experiencia</span>
        </div>
      </div>
      <div class="experiencia-card__body">
        <h3>${experiencia.titulo}</h3>
        <p>${experiencia.descripcion}</p>
        <button class="button ghost experiencia-card__ver" type="button" data-id="${experiencia.id}">Ver más</button>
      </div>
    </article>
  `
}

export function createExperienciasSection() {
  const section = document.createElement('section')
  section.className = 'experiencias'
  section.id = 'experiencias'

  const cards = experiencias.map((item) => buildCard(item)).join('')

  section.innerHTML = `
    <div class="section-header">
      <p class="badge">Experiencias</p>
      <h2>Momentos que inspiran</h2>
      <p class="subtitle">Acompaña nuestras visitas apícolas, catas y talleres en comunidad.</p>
    </div>
    <div class="experiencias__grid">${cards}</div>
    <div class="experiencias__lightbox" hidden>
      <div class="experiencias__backdrop" data-close="true"></div>
      <div class="experiencias__dialog" role="dialog" aria-modal="true">
        <button class="experiencias__close" type="button" aria-label="Cerrar" data-close="true">×</button>
        <img src="" alt="" class="experiencias__lightbox-image" />
        <div class="experiencias__lightbox-body">
          <h3></h3>
          <p class="subtitle"></p>
        </div>
      </div>
    </div>
  `

  const lightbox = section.querySelector('.experiencias__lightbox')
  const lightboxImage = section.querySelector('.experiencias__lightbox-image')
  const lightboxTitle = section.querySelector('.experiencias__lightbox-body h3')
  const lightboxDescription = section.querySelector('.experiencias__lightbox-body .subtitle')

  function findExperiencia(id) {
    return experiencias.find((item) => String(item.id) === String(id))
  }

  function openLightbox(experiencia) {
    lightboxImage.src = experiencia.imagen
    lightboxImage.alt = experiencia.titulo
    lightboxTitle.textContent = experiencia.titulo
    lightboxDescription.textContent = experiencia.descripcion
    lightbox.hidden = false
    document.body.classList.add('no-scroll')
  }

  function closeLightbox() {
    lightbox.hidden = true
    lightboxImage.src = ''
    lightboxImage.alt = ''
    document.body.classList.remove('no-scroll')
  }

  section.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLElement)) return

    const cardId = target.dataset.id || target.closest('.experiencia-card')?.dataset.id
    if (cardId) {
      const experiencia = findExperiencia(cardId)
      if (experiencia) {
        openLightbox(experiencia)
      }
    }

    if (target.dataset.close === 'true') {
      closeLightbox()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!lightbox.hidden && event.key === 'Escape') {
      closeLightbox()
    }
  })

  return section
}
