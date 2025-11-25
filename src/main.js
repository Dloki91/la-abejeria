import './styles/main.css'
import productos from './data/productos.json'
import { createHero } from './components/hero'
import { createPresentation } from './components/presentation'
import { createVideoSection } from './components/video-section'
import { createExperienciasSection } from './components/experiencias'
import { createCatalogo } from './components/catalogo'
import { createFooter } from './components/footer'
import { createFloatingCTA } from './components/floating-cta'

const app = document.querySelector('#app')

const main = document.createElement('main')
main.className = 'layout'
main.append(
  createHero(),
  createPresentation(),
  createVideoSection(),
  createExperienciasSection(),
  createCatalogo(productos),
  createFooter(),
)

const nav = document.createElement('header')
nav.className = 'topbar'
nav.innerHTML = `
  <div class="topbar__brand">La Abejería</div>
  <nav class="topbar__nav">
    <a href="#home">Home</a>
    <a href="#videos">Educación</a>
    <a href="#experiencias">Experiencias</a>
    <a href="#catalogo">Catálogo</a>
  </nav>
`

const cta = createFloatingCTA()

app.append(nav, main, cta)
