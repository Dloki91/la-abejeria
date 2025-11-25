const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'miel', label: 'Miel' },
  { key: 'propoleo', label: 'Propóleo' },
  { key: 'polen', label: 'Polen' },
  { key: 'cera', label: 'Cera' },
]

function formatCOP(value) {
  if (!value) return ''
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value)
}

function buildProductCard(producto) {
  const message = encodeURIComponent(`Hola, me interesa ${producto.nombre} de La Abejería.`)
  return `
    <article class="product-card" data-categoria="${producto.categoria}">
      <div class="product-card__image" role="presentation">
        <div class="product-card__promo">
          <span class="promo-badge">Descuento por WhatsApp</span>
          <span class="promo-badge promo-badge--accent">Descuentos especiales por 6 o 12 unidades</span>
        </div>
        <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
      </div>
      <div class="product-card__body">
        <p class="badge ghost">${producto.categoria}</p>
        <h3>${producto.nombre}</h3>
        <p class="price">${formatCOP(producto.precioCliente)}</p>
        <a class="button primary" href="https://wa.me/573157006152?text=${message}" target="_blank" rel="noreferrer">Comprar por WhatsApp</a>
      </div>
    </article>
  `
}

export function createCatalogo(productos) {
  const section = document.createElement('section')
  section.className = 'catalogo'
  section.id = 'catalogo'

  const filterButtons = categories
    .map(
      (category) => `
        <button class="chip" data-category="${category.key}" type="button">
          ${category.label}
        </button>
      `
    )
    .join('')

  const cardsMarkup = productos.map((producto) => buildProductCard(producto)).join('')

  section.innerHTML = `
    <div class="section-header">
      <p class="badge">Catálogo</p>
      <h2>Productos de la colmena</h2>
      <p class="subtitle">Elige tu favorito y solicita por WhatsApp con un clic.</p>
    </div>
    <div class="filters" role="group" aria-label="Filtrar por categoría">
      ${filterButtons}
    </div>
    <div class="product-grid">
      ${cardsMarkup}
    </div>
  `

  const buttons = section.querySelectorAll('.chip')
  const cards = section.querySelectorAll('.product-card')

  function applyFilter(category) {
    buttons.forEach((btn) => btn.classList.toggle('chip--active', btn.dataset.category === category))

    cards.forEach((card) => {
      const matches = category === 'todos' || card.dataset.categoria === category
      card.style.display = matches ? 'flex' : 'none'
    })
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.category))
  })

  applyFilter('todos')

  return section
}
