export function createFooter() {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  footer.innerHTML = `
    <div class="footer__brand">
      <p class="badge">La Abejería</p>
      <p class="subtitle">Sabores y aprendizajes desde la colmena.</p>
    </div>
    <div class="footer__links">
      <a href="mailto:hola@laabejeria.com">hola@laabejeria.com</a>
      <a href="https://instagram.com/laabejeria" target="_blank" rel="noreferrer">@laabejeria</a>
      <a href="https://wa.me/573157006152" target="_blank" rel="noreferrer">WhatsApp</a>
    </div>
  `

  return footer
}
