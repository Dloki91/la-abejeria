export function createPresentation() {
  const section = document.createElement('section')
  section.className = 'presentation'

  section.innerHTML = `
    <div class="section-header">
      <p class="badge">Nuestra esencia</p>
      <h2>Del apiario a tu mesa</h2>
      <p class="subtitle">Productos artesanales y contenidos que honran el trabajo de las abejas y los sabores de la tierra.</p>
    </div>
    <div class="presentation__grid">
      <div class="presentation__item">
        <h3>Origen sostenible</h3>
        <p>Trabajamos con prácticas responsables para proteger a las abejas y su entorno.</p>
      </div>
      <div class="presentation__item">
        <h3>Curaduría de sabor</h3>
        <p>Seleccionamos mieles, cafés y derivados con perfiles únicos y trazables.</p>
      </div>
      <div class="presentation__item">
        <h3>Aprendizaje vivo</h3>
        <p>Explora videos y guías para conocer el universo apícola de forma cercana.</p>
      </div>
    </div>
  `

  return section
}
