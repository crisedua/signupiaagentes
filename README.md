# Landing Page - Webinar Agentes de IA

Una landing page moderna y atractiva para promocionar un webinar sobre Agentes de IA para ventas y productividad.

## Características

- ✨ Diseño moderno y responsive
- 🎨 Gradientes y efectos visuales atractivos
- 📱 Optimizado para dispositivos móviles
- ⚡ Animaciones suaves y transiciones
- 🎯 Enfoque en conversión con CTAs prominentes

## Tecnologías Utilizadas

- React 18
- CSS3 con Grid y Flexbox
- Diseño responsive
- Gradientes y efectos visuales modernos

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd landingpage_iaagentes
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el proyecto en modo desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts Disponibles

- `npm start` - Ejecuta la aplicación en modo desarrollo
- `npm build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm eject` - Expone la configuración de webpack (irreversible)

## Estructura del Proyecto

```
src/
├── App.js          # Componente principal
├── App.css         # Estilos específicos de la aplicación
├── index.js        # Punto de entrada
└── index.css       # Estilos globales

public/
├── index.html      # HTML principal
└── manifest.json   # Configuración PWA
```

## Contenido de la Landing Page

- **Header**: Título principal y CTA
- **Beneficios Clave**: 4 beneficios principales de la app
- **Lo Que Aprenderás**: Lista de aprendizajes del webinar
- **Conoce a tu Guía**: Información sobre María Torres
- **Detalles del Webinar**: Fecha, hora y duración
- **Footer**: Información de copyright

## Personalización

Puedes personalizar fácilmente:
- Colores y gradientes en `src/index.css` y `src/App.css`
- Contenido en `src/App.js`
- Fuentes en `public/index.html`
- Metadatos en `public/index.html`

## Despliegue

Para desplegar en producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `build/`. 