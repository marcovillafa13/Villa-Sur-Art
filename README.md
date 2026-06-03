# Villa Sur-Art

> Galería de Arte Online — Casa · Museo · Taller — Aguilares, Tucumán, Argentina

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-000000?logo=css3&logoColor=white)

---

## Descripción

**Villa Sur-Art** es el sitio web oficial de la galería de arte homónima ubicada en Aguilares, Tucumán. La plataforma permite a coleccionistas y amantes del arte explorar, descubrir y consultar obras de artistas locales y regionales, con la posibilidad de armar una selección y contactar directamente a la galería vía WhatsApp.

El proyecto nació con el objetivo de digitalizar la experiencia de visitar la galería física, respetando la estética sobria y elegante que la identifica.

---

## Funcionalidades

- **Galería con filtros por categoría** — Todos / Pinturas / Dibujos / Grabados
- **Lightbox de obra** — Vista ampliada con imagen, técnica, dimensiones, artista y precio
- **Navegación por teclado y botones** en el lightbox (flechas ← →, tecla Escape)
- **Carrito de selección** — Agregar y quitar obras con un solo click, sincronizado en toda la app
- **Contacto por WhatsApp** — El carrito genera automáticamente un mensaje con las obras seleccionadas y el total
- **Sección Nosotros** — Historia y valores de la galería
- **Mapa integrado** — Ubicación en Google Maps
- **Diseño responsive** — Adaptado para desktop, tablet y mobile
- **Animaciones suaves** — Transiciones en cards, lightbox y navbar

---

## Artistas en la colección

| Artista | Técnicas |
|---|---|
| Julio Villafañe | Acrílico, lápiz, xilocollagraph, grabado |
| Sixto Aurelio Salas | Tinta y pluma sobre papel |
| Daniel Arnedo | Óleo sobre tela |
| Rodolfo Edgardo Soria | Acrílico |
| Alberto Arjona | Grabado, xilocollagraph |
| Sergio Pinto | Acrílico sobre MDF y tela |
| Sonia Orellana | Técnica mixta |
| Pablo Ríos | Óleo sobre tela |

---

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| [React 18](https://react.dev/) | UI y manejo de estado |
| [Vite 5](https://vitejs.dev/) | Bundler y servidor de desarrollo |
| CSS Modules | Estilos encapsulados por componente |
| Context API + useReducer | Estado global del carrito |
| Google Maps Embed | Mapa de ubicación |
| WhatsApp API | Contacto directo desde el carrito |

---

## Estructura del proyecto

```
sur-art/
├── public/
│   └── fotos/              # Imágenes de las obras
├── src/
│   ├── components/
│   │   ├── Navbar/         # Barra de navegación
│   │   ├── Hero/           # Sección principal (hero)
│   │   ├── Gallery/        # Galería con lightbox y carrito
│   │   ├── About/          # Sección "Nosotros"
│   │   ├── Location/       # Mapa y datos de contacto
│   │   ├── Contact/        # Formulario de contacto
│   │   ├── Cart/           # Panel lateral del carrito
│   │   └── Footer/         # Pie de página
│   ├── context/
│   │   └── CartContext.jsx # Estado global del carrito
│   ├── data/
│   │   └── products.js     # Catálogo de obras
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Variables globales y reset
├── index.html
├── vite.config.js
└── package.json
```

---

## Instalación y uso local

### Requisitos
- Node.js 18+
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/marcovillafa13/Villa-Sur-Art.git
cd Villa-Sur-Art

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173/sur-art/`

### Build para producción

```bash
npm run build
```

Los archivos compilados se generan en la carpeta `dist/`.

---

## Agregar o modificar obras

El catálogo se gestiona desde `src/data/products.js`. Cada obra tiene la siguiente estructura:

```js
{
  id: 1,                          // ID único
  name: 'Nombre de la obra',
  artist: 'Nombre del artista',
  category: 'Pinturas',           // 'Pinturas' | 'Dibujos' | 'Grabados'
  dimensions: '90 × 110 cm',
  price: 1000000,
  currency: 'ARS',                // 'ARS' | 'USD'
  image: '/sur-art/fotos/imagen.jpeg',
  description: 'Técnica utilizada',
}
```

Las imágenes deben colocarse en la carpeta `public/fotos/`.

---

## Contacto

**Villa Sur-Art** — Casa · Museo · Taller  
📍 Gorriti 1142, Aguilares, Tucumán  
🕐 Lunes a Sábados · 10:00 – 19:00  
💬 [WhatsApp](https://wa.me/5493865456396)

---

*Desarrollado con React + Vite*
