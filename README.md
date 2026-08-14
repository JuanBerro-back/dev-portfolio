# 🚀 Portafolio Web Profesional - Juan Berro (@JuanBerro-back)

Un portafolio web moderno, interactivo y de alto impacto visual desarrollado en **React 18**, **TypeScript** y **Vite**, optimizado para desarrolladores de software y listo para publicarse en **GitHub** y desplegarse en **GitHub Pages** o **Vercel**.

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.1-purple?style=for-the-badge&logo=vite)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-brightgreen?style=for-the-badge&logo=github)

---

## 💎 Características Principales

- **Diseño UI/UX de Última Generación**: Apariencia Dark Tech con gradientes neón, vidriado *glassmorphism*, tipografías Google Fonts (*Outfit* & *Inter*) y animaciones fluidas.
- **Secciones Interactivas**:
  - ⚡ **Hero**: Encabezado animado con cambio automático de roles y estado de disponibilidad en tiempo real.
  - 🛠️ **Sobre Mí & Skill Matrix**: Matriz de tecnologías con filtros por categoría (Frontend, Backend, Base de Datos, DevOps) y niveles de dominio.
  - 🎨 **Portafolio de Proyectos**: Galería filtrable con tarjetas interactivas, métricas de impacto y modal detallado para cada proyecto.
  - 💻 **Consola Interactiva CLI (Terminal)**: Terminal integrado donde los visitantes pueden escribir comandos reales (`help`, `skills`, `projects`, `contact`, `github`, `clear`).
  - 💼 **Trayectoria & Experiencia**: Cronología interactiva con logros, fechas y tecnologías en cada rol.
  - 📩 **Formulario de Contacto & Copia Rápida**: Tarjeta de contacto interactiva con botón de "Copiar Email".
- **Totalmente Personalizable**: Todo el contenido principal (biografía, habilidades, proyectos y experiencia) se gestiona centralizadamente desde `src/data/portfolioData.ts`.

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalado en tu sistema:
- **Node.js** (versión 18 o superior)
- **Git**

---

## 💻 Desarrollo Local (Probar en tu computadora)

1. Abre tu terminal o consola de comandos en la carpeta del proyecto:
   ```bash
   cd dev-portfolio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre la dirección indicada (por defecto `http://localhost:3000`) en tu navegador para ver el portafolio en vivo.

---

## 📤 Pasos para Subir a tu GitHub (@JuanBerro-back)

Para crear el repositorio en tu cuenta de GitHub y subir este proyecto por primera vez, sigue estos sencillos pasos:

### Paso 1: Crear el Repositorio en GitHub
1. Ve a [GitHub.com](https://github.com) e inicia sesión con tu cuenta **JuanBerro-back**.
2. Haz clic en el botón **`+`** (arriba a la derecha) y selecciona **New repository**.
3. Nombra el repositorio como **`dev-portfolio`**.
4. Déjalo en modo **Public** (Público).
5. **No** marques la casilla "Initialize this repository with a README" (ya tenemos uno preparado).
6. Haz clic en **Create repository**.

### Paso 2: Conectar e Impulsar tu Código con Git
En tu terminal dentro de la carpeta `dev-portfolio`, ejecuta los siguientes comandos ordenadamente:

```bash
# 1. Inicializar repositorio local Git
git init

# 2. Agregar todos los archivos al seguimiento
git add .

# 3. Guardar el primer commit
git commit -m "feat: lanzar portafolio inicial en React + TypeScript"

# 4. Asegurar que la rama principal se llame main
git branch -M main

# 5. Enlazar con tu repositorio remoto en GitHub
git remote add origin https://github.com/JuanBerro-back/dev-portfolio.git

# 6. Subir el código a GitHub
git push -u origin main
```

¡Listo! Tu código fuente estará almacenado en tu cuenta **https://github.com/JuanBerro-back/dev-portfolio**.

---

## 🌐 Publicar en Web Gratis (GitHub Pages)

Tienes **dos opciones** súper sencillas para que tu portafolio esté en línea públicamente en la web:

### Opción A: Despliegue Directo con Un Solo Comando (Recomendado)
Ejecuta el siguiente comando en tu terminal:
```bash
npm run deploy
```
Este comando compilará tu aplicación y creará automáticamente una rama `gh-pages` en tu repositorio de GitHub.

Luego:
1. Ve a tu repositorio `https://github.com/JuanBerro-back/dev-portfolio` en GitHub.
2. Entra a **Settings** > **Pages** (en el menú lateral izquierdo).
3. En **Source**, selecciona `Deploy from a branch`.
4. En **Branch**, elige la rama `gh-pages` y guarda los cambios.

En 1-2 minutos tu portafolio estará activo en:
👉 **`https://JuanBerro-back.github.io/dev-portfolio/`**

### Opción B: Despliegue en Vercel o Netlify
Si prefieres usar **Vercel**:
1. Entra a [Vercel.com](https://vercel.com) y conecta tu cuenta de GitHub.
2. Selecciona tu repositorio `dev-portfolio` e impórtalo.
3. Vercel detectará automáticamente que es un proyecto Vite + React y te entregará una URL superrápida con HTTPS.

---

## ⚙️ Cómo Personalizar tus Datos

Para cambiar las fotos, los nombres de tus proyectos, tu correo o tus redes sociales, simplemente edita el archivo:
📁 **`src/data/portfolioData.ts`**

Ejemplo:
```typescript
export const profileData: ProfileInfo = {
  name: "Juan Berro",
  title: "Full-Stack Engineer & Software Architect",
  email: "tu-correo-real@example.com",
  github: "https://github.com/JuanBerro-back",
  // ...
};
```

---

## 📜 Licencia

Desarrollado para **Juan Berro** (@JuanBerro-back). Libre uso y personalización bajo la licencia MIT.
