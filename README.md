# La Abejería

Sitio web creado con Vite + Vanilla JS para el catálogo y los contenidos educativos/audiovisuales de La Abejería.

## Contacto y branding
- WhatsApp: [+57 315 700 6152](https://wa.me/573157006152)
- Instagram: [@laabejeria](https://instagram.com/laabejeria)
- Logos listos en `public/images/logos/` (versiones color, oscuro, monocromo y panal).
- Imágenes de producto en `public/images/productos/` consumidas por `src/data/productos.json`.

## Requisitos
- Node.js 18+

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```

## Build de producción
```bash
npm run build
```

## Vista previa de la build
```bash
npm run preview
```

## Actualizar catálogo
1. Edita `src/data/productos.json` con nombre, precio, categoría (`miel`, `propoleo`, `polen`, `cera`) y ruta de imagen.
2. Coloca las imágenes en `public/images/productos/` para que se sirvan estáticamente por Vite.
3. La CTA de compra usa WhatsApp con el número oficial y mensaje personalizado.
