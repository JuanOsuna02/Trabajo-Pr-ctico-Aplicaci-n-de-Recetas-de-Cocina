# 🥗 Aplicación de Recetas - Juan Cruz Fernandez Osuna

## ✨ Descripción
Aplicación web para explorar y visualizar recetas culinarias. Permite filtrar recetas según el momento del día, ver ingredientes y pasos detallados, todo en una interfaz moderna, profesional y adaptable a cualquier dispositivo.

---

## 🚀 Tecnologías Utilizadas
- ⚛️ **React 19.1.1**
- 🔗 **React Router DOM 7.8.2**
- 🎨 **Material-UI 7.3.2**
- ⚡ **Vite**

---

## 📦 Instalación y Ejecución

1. 📥 Clonar el repositorio o descargar el archivo zip
2. 📦 Instalar las dependencias:
   ```bash
   npm install
   ```
3. 🏁 Ejecutar el proyecto:
   ```bash
   npm run dev
   ```
4. 🌐 Abrir la aplicación en el navegador: [http://localhost:5173]

---

## 📁 Estructura del Proyecto
```
src/
├── components/      # Componentes de la interfaz (Navbar, Cards…)
│   └── layout/
│   └── recetas/
├── contexts/
├── data/            # recetas.json
├── pages/           # Vistas de listado y detalle
├── App.jsx
└── main.jsx
```
---

## 🍳 Funcionalidades
- 👁️ Visualización de recetas en grilla responsiva
- 🔎 Buscador rápido por título en la navbar
- 🔍 Filtro de recetas por desayuno/merienda y almuerzo/cena en la navbar
- 📄 Panel de detalles: ingredientes, pasos, dificultad, imagen destacada
- 🧭 Navegación fluida entre vistas (sin recarga)
- 📤 Botón "Compartir" (copia el link de la receta al portapapeles)
- ⚠️ Página visual de "Receta no encontrada" (404) si la receta no existe
- 🎨 Diseño adaptable y colorido con paleta azul/verde


---

## 🖼️ Captura de Pantalla
Vista principal de la aplicación:

![Home App de Recetas](public/screenshot-home.png)

---

## 🛑 Prueba la página de error 404
Si accedés a una receta inexistente, la aplicación muestra una página visual de error. Podés comprobarlo accediendo a:

[Ver ejemplo de página 404](http://localhost:5173/recetas/9999)

**Captura de la página 404:**

![Página 404 de Recetas](public/screenshot-404.png)

---

## 👨‍💻 Autor
Juan Cruz Fernandez Osuna · juancruz.fo@gmail.com

---
Trabajo académico realizado con dedicación, organización y atención al detalle.

