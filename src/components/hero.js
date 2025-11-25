export function createHero() {
  const section = document.createElement('section')
  section.className = 'hero'
  section.id = 'home'

  section.innerHTML = `
    <div class="hero__content">
      <div class="hero__brand">
        <img src="/images/logo/logo-abejeria.png" alt="Logo de La Abejería" class="hero__logo" />
        <a class="hero__social" href="https://www.instagram.com/la_abejeria" target="_blank" rel="noreferrer">
          <span aria-hidden="true">❤</span>
          <span>@la_abejeria</span>
        </a>
      </div>
      <p class="badge">La Abejería</p>
      <h1>Sabores auténticos, cuidado de la colmena</h1>
      <p class="subtitle">Miel, café y bienestar natural con un toque educativo.</p>
      <div class="hero__actions">
        <a href="#catalogo" class="button primary">Ver catálogo</a>
        <a href="#videos" class="button ghost">Conoce más</a>
      </div>
    </div>
    <div class="hero__visual" aria-hidden="true">
      <div class="honeycomb"></div>
      <div class="leaf"></div>
    </div>
  `

  return section
}
