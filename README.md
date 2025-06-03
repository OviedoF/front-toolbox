
# React App

Una aplicación frontend creada con React 18, compatible con Node.js 16. Esta app fue desarrollada por Federico Oviedo como Choice Técnico para FULL STACK en ToolBox.

A continuación, se presenta una guía rápida para la instalación, ejecución y estructura del proyecto.

---

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/OviedoF/front-toolbox
cd front-toolbox
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación en modo desarrollo:

```bash
npm start
```

La app correrá por defecto en [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Variables de entorno (opcional)

Sin ser obligatorio para su funcionamiento, se puede cambiar la dirección de la API desde un archivo .env en la carpeta raíz. 
Por defecto, se estará tomando la api como [http://localhost:4000](http://localhost:4000).

Ejemplo de `.env`:

```env
REACT_APP_API_URL=
```

Para que los cambios en `.env` tengan efecto, es necesario reiniciar el servidor (`npm start`).

---

## 🧱 Estructura del proyecto

```
src/
├── components/       # Componentes React reutilizables
├── redux/            # Contexto React para manejo de estado global
├── App.js            # Componente raíz
└── index.js          # Punto de entrada, renderiza <App /> y provee Redux store
```

---

## 🔄 Gestión de estado con Redux

Esta aplicación utiliza **Redux** para el manejo del estado global de la aplicación, facilitando la administración y sincronización de datos entre componentes.

- La configuración del store se encuentra en la carpeta `src/redux`.
- Se usan slices y Redux Toolkit para mantener el código modular y limpio.
- El store se provee a toda la app mediante el componente `<Provider>` en `index.js`.

---

## 🛠 Scripts disponibles

- `npm start`  
  Inicia el servidor de desarrollo con hot-reloading en [http://localhost:3000](http://localhost:3000).

- `npm run build`  
  Genera la versión optimizada para producción en la carpeta `build/`.

- `npm test`  
  Ejecuta los tests configurados (Jest).

---

## 🧪 Testeo

Para correr los tests, ejecuta:

```bash
npm test
```

El entorno usa Jest para testing unitario y de componentes.

---

## ✅ Librerías y versiones principales

| Paquete               | Versión        | Descripción                                   |
|-----------------------|----------------|-----------------------------------------------|
| react                 | ^18.2.0        | Biblioteca principal UI                       |
| react-dom             | ^18.2.0        | Renderizado para el DOM                       |
| redux                 | ^4.2.0         | Biblioteca para manejo de estado              |
| @reduxjs/toolkit      | ^1.9.0         | Herramientas para simplificar Redux           |
| react-redux           | ^8.0.5         | Integración oficial Redux + React             |
| react-bootstrap       | ^2.10.10       | Manejo de estilos a través de Bootstrap       |

---

## 💡 Consideraciones importantes

- Esta app está construida con React 18, compatible con Node.js 16.
- El manejo de estado global se realiza con Redux Toolkit para mayor escalabilidad y facilidad.