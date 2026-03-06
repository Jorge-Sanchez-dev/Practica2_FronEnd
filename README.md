# API Paises

Aplicación web desarrollada con Next.js, React y TypeScript que consume una API pública de países para mostrar un listado de países y permitir la búsqueda por nombre.
La aplicación está estructurada por componentes y utiliza una ruta dinámica para acceder al detalle de cada país de forma individual.

## Como ejecutar el código

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-nombre-usuraio/nombre-repositorio.git
cd nombre-repositorio
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣Ejecutar el proyecto en local
```bash
npm run dev
```

Abrir el navegador en:
```bash
http://localhost:3000
```

## 📁 Archivos que contiene el código

A continuación se describen los archivos que han sido creados o modificados durante el desarrollo de la práctica, junto con su función dentro de la página web.

---

### 🔹 `src/app/page.tsx`
Página principal de la aplicación.
Aquí se muestra el buscador, el botón de búsqueda y el listado de países obtenidos desde la API.

---

### 🔹 `src/app/component/country.tsx`
Componente encargado de representar una tarjeta individual de cada país.
Muestra información básica como el nombre, la bandera y otros datos principales.
Esta tarjeta es la que se muestra en la página principal.

---

### 🔹 `src/app/country/[name]/page.tsx`
Página de detalle del país mediante una ruta dinámica.
Cuando el usuario pulsa sobre un país, accede a una URL dinámica con su nombre y puede visualizar información más detallada de ese país.

---

### 🔹 `src/app/lib/axios.ts`
Archivo de configuración de Axios para centralizar la conexión con la API.

---

### 🔹 `src/app/lib/pais.ts`
Archivo que contiene las funciones encargadas de realizar las peticiones a la API de países, tanto para obtener el listado general como para buscar un país concreto por nombre.

---

### 🔹 `src/type/pais.ts`
Definición del tipo Country con la estructura de datos que utiliza la aplicación.

---

### 🔹 `src/type/index.ts`
Archivo de reexportación de tipos para facilitar las importaciones.

---

## Funcionamiento de la aplicación
La aplicación realiza una petición a una API pública de países para mostrar la información en pantalla.
En la página principal, el usuario puede escribir el nombre de un país en el buscador y pulsar el botón de búsqueda para filtrar o localizar el país deseado.
Además, cada tarjeta de país permite navegar a una vista de detalle gracias al uso de una ruta dinámica de Next.js, lo que permite generar una página específica para cada país de manera individual. También tiene un boton para volver a la página principal por si se queire hacer otra busqueda


## ⚠️ Problemas encontrados y soluciones

Solo he encontrado un error:

- **Pantalla en blanco al cargar la aplicación**  
  *Problema:* La API devuelve las banderas en dos formatos diferentes (png y svg). Sin embargo, no siempre está claro si todos los países disponen de ambos formatos o si alguno de ellos puede estar vacío o no definido.  
  *Solución:* Se comprobó la existencia del formato antes de mostrar la imagen. En caso de que uno de los formatos no estuviera disponible, se utilizaba el otro formato como alternativa. De esta forma se evita que la aplicación intente mostrar una imagen inexistente y se garantiza que siempre se pueda visualizar la bandera del país cuando esté disponible.


