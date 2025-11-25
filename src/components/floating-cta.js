export function createFloatingCTA() {
  const link = document.createElement('a')
  link.href =
    'https://wa.me/573157006152?text=Hola%2C%20quiero%20comprar%20en%20La%20Abejer%C3%ADa%20%F0%9F%8D%AF'
  link.className = 'floating-cta'
  link.target = '_blank'
  link.rel = 'noreferrer'
  link.ariaLabel = 'Abrir chat de WhatsApp'

  link.innerHTML = `
    <span class="floating-cta__icon">💬</span>
    <span class="floating-cta__text">WhatsApp</span>
  `

  return link
}
