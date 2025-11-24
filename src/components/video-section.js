const videoCards = [
  {
    title: 'Conociendo a la colmena',
    duration: '3:40',
    description: 'Recorrido guiado por un apiario y cuidados básicos.',
  },
  {
    title: 'Recetas con miel y café',
    duration: '4:10',
    description: 'Ideas rápidas para combinar nuestros sabores favoritos.',
  },
  {
    title: 'Beneficios del propóleo',
    duration: '2:55',
    description: 'Usos cotidianos y recomendaciones prácticas.',
  },
]

export function createVideoSection() {
  const section = document.createElement('section')
  section.className = 'videos'
  section.id = 'videos'

  const cards = videoCards
    .map(
      (video) => `
        <article class="video-card">
          <div class="video-card__thumb" role="presentation">
            <span>▶</span>
          </div>
          <div class="video-card__body">
            <div class="video-card__meta">
              <p class="badge ghost">${video.duration}</p>
            </div>
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <button class="button ghost" type="button">Ver video</button>
          </div>
        </article>
      `
    )
    .join('')

  section.innerHTML = `
    <div class="section-header">
      <p class="badge">Contenido educativo</p>
      <h2>Aprende con La Abejería</h2>
      <p class="subtitle">Historias, recetas y buenas prácticas para aprovechar cada producto.</p>
    </div>
    <div class="video-grid">${cards}</div>
  `

  return section
}
