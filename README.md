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
