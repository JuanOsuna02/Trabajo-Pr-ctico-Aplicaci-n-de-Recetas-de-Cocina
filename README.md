# 🍽️ Aplicación de Recetas

Una aplicación web moderna de recetas de cocina desarrollada con React, Material-UI y React Router DOM.

## 📋 Descripción del Proyecto

Esta aplicación permite a los usuarios explorar un catálogo de recetas de cocina con información detallada. Incluye:

- **Listado de Recetas**: Grid responsive con cards que muestran información básica de cada receta
- **Detalle de Receta**: Vista completa con ingredientes, pasos de preparación y toda la información necesaria
- **Navegación fluida**: Sistema de rutas para moverse entre el listado y los detalles

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React 19** - Biblioteca para construir interfaces de usuario
- 🎨 **Material-UI 7** - Framework de componentes React
- 🧭 **React Router DOM 7** - Enrutamiento para aplicaciones React
- 📦 **Vite** - Herramienta de construcción y desarrollo

## 📦 Instalación

1. Clona el repositorio o descarga el proyecto
2. Abre una terminal en la carpeta del proyecto
3. Instala las dependencias:

```bash
npm install
```

## 🚀 Instrucciones de Ejecución

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

Para construir la versión de producción:

```bash
npm run build
```

Para previsualizar la versión de producción:

```bash
npm run preview
```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── recetas/
│   │   ├── RecetaCard.jsx          # Card individual de receta
│   │   ├── RecetasList.jsx          # Lista de recetas con grid
│   │   ├── RecetaDetalle.jsx        # Vista detallada de receta
│   │   └── IngredientesList.jsx     # Lista de ingredientes
│   └── layout/
│       └── Navbar.jsx               # Barra de navegación
├── contexts/
│   └── RecetasContext.jsx           # Context API para gestión de recetas
├── data/
│   └── recetas.json                 # Base de datos de recetas (6+ recetas)
├── pages/
│   ├── RecetasListPage.jsx          # Página de listado
│   └── RecetaDetallePage.jsx        # Página de detalle
├── App.jsx                           # Componente principal con rutas
├── main.jsx                          # Punto de entrada
└── theme.js                          # Configuración del tema Material-UI
```

## 🎯 Funcionalidades

### Listado de Recetas (`/recetas`)

- Grid responsive:
  - 1 columna en móvil
  - 2 columnas en tablet
  - 3 columnas en desktop
- Cada card muestra:
  - Imagen de la receta
  - Título
  - Descripción breve
  - Tiempo de preparación
  - Dificultad (Fácil/Media/Difícil)
  - Porciones
  - Botón "Ver Receta"

### Detalle de Receta (`/recetas/:id`)

- Información completa:
  - Imagen destacada
  - Título y descripción
  - Datos generales (tiempo, dificultad, porciones)
  - Lista de ingredientes con cantidad, unidad y nombre
  - Pasos de preparación numerados
  - Botón "Volver al Listado"

## 📊 Características Técnicas

- **Context API**: Gestión centralizada del estado de las recetas
- **React Router DOM**: Navegación entre páginas
- **Material-UI**: Componentes modernos y responsive
- **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla

## 📝 Notas

- El proyecto incluye 6 recetas completas en formato JSON
- Todas las imágenes son enlaces externos (Unsplash)
- La aplicación es completamente frontend, sin backend requerido

## 👨‍💻 Autor

Desarrollado como Trabajo Práctico de Programación.

---

¡Disfruta explorando las recetas! 🍳
