# Documentación de la Aplicación: Catálogo de Películas y Series

## Descripción General
Esta aplicación permite gestionar un catálogo de películas y series a través de un servidor web y una interfaz de usuario. Los usuarios pueden:
- Ver la lista de películas y series.
- Agregar nuevas películas y series.
- Eliminar películas y series existentes.

La aplicación está dividida en dos partes principales:
1. **Backend (Servidor)**: Implementado con Node.js y Express.js.
2. **Frontend (Cliente)**: Una página HTML que interactúa con el servidor mediante peticiones HTTP.

---

## Estructura de Archivos

### 1. **server.js**
- **Función**: Es el punto de entrada de la aplicación.
- **Responsabilidad**: Inicia el servidor y lo configura para escuchar en el puerto 3000.
- **Interacción**: Importa `src/app.js` para manejar la lógica principal del servidor.

### 2. **src/app.js**
- **Función**: Configura la aplicación Express.
- **Responsabilidad**:
  - Habilitar CORS para permitir solicitudes desde el cliente.
  - Configurar el middleware para manejar JSON.
  - Definir el prefijo `/api` para las rutas.
- **Interacción**: Importa `src/routes/index.js` para manejar las rutas.

### 3. **src/routes/index.js**
- **Función**: Define las rutas principales de la API.
- **Responsabilidad**: Redirige las solicitudes a las rutas específicas de películas y series.
- **Interacción**:
  - `/api/movies` -> `src/routes/movies.js`
  - `/api/series` -> `src/routes/series.js`

### 4. **src/routes/movies.js**
- **Función**: Maneja las rutas relacionadas con las películas.
- **Responsabilidad**:
  - `GET /api/movies`: Obtiene la lista de películas.
  - `POST /api/movies`: Agrega una nueva película.
  - `DELETE /api/movies/:name`: Elimina una película por nombre.
- **Interacción**: Utiliza `src/controllers/moviesController.js` para la lógica de negocio.

### 5. **src/routes/series.js**
- **Función**: Maneja las rutas relacionadas con las series.
- **Responsabilidad**:
  - `GET /api/series`: Obtiene la lista de series.
  - `POST /api/series`: Agrega una nueva serie.
  - `DELETE /api/series/:name`: Elimina una serie por nombre.
- **Interacción**: Utiliza `src/controllers/seriesController.js` para la lógica de negocio.

### 6. **src/controllers/moviesController.js**
- **Función**: Contiene la lógica de negocio para las películas.
- **Responsabilidad**:
  - Leer y escribir en el archivo `movies.txt`.
  - Procesar las solicitudes relacionadas con las películas.
- **Interacción**: Manipula el archivo `movies.txt` para almacenar los datos.

### 7. **src/controllers/seriesController.js**
- **Función**: Contiene la lógica de negocio para las series.
- **Responsabilidad**:
  - Leer y escribir en el archivo `series.txt`.
  - Procesar las solicitudes relacionadas con las series.
- **Interacción**: Manipula el archivo `series.txt` para almacenar los datos.

### 8. **movies.txt**
- **Función**: Almacena los datos de las películas en formato de texto plano.
- **Formato**: Cada línea contiene `nombre, director, año`.

### 9. **series.txt**
- **Función**: Almacena los datos de las series en formato de texto plano.
- **Formato**: Cada línea contiene `nombre, año, temporadas`.

### 10. **docs/client.html**
- **Función**: Es la interfaz de usuario de la aplicación.
- **Responsabilidad**:
  - Permitir a los usuarios interactuar con el servidor.
  - Enviar solicitudes HTTP al servidor para obtener, agregar o eliminar datos.
- **Interacción**:
  - Utiliza JavaScript para realizar solicitudes `fetch` al servidor.
  - Muestra los datos obtenidos en una tabla dinámica.

### 11. **docs/styles.css**
- **Función**: Define los estilos visuales de la interfaz de usuario.
- **Responsabilidad**: Asegurar que la página sea visualmente atractiva y fácil de usar.

---

## Flujo de Trabajo
1. **Inicio del Servidor**:
   - El archivo `server.js` inicia el servidor en el puerto 3000.
   - Las rutas están disponibles bajo el prefijo `/api`.

2. **Interacción del Cliente**:
   - El usuario interactúa con `client.html`.
   - Los botones y formularios envían solicitudes HTTP al servidor.

3. **Procesamiento en el Servidor**:
   - Las solicitudes son manejadas por las rutas definidas en `src/routes`.
   - La lógica de negocio en `src/controllers` procesa los datos y responde al cliente.

4. **Almacenamiento de Datos**:
   - Los datos de películas y series se almacenan en `movies.txt` y `series.txt` respectivamente.

---

## Requisitos Previos
- Node.js instalado.
- Dependencias instaladas:
  ```bash
  npm install
  ```

---

## Ejecución
1. Inicia el servidor:
   ```bash
   node server.js
   ```
2. Abre `docs/client.html` en un navegador.
3. Interactúa con la aplicación.

---

## Notas
- Asegúrate de que los archivos `movies.txt` y `series.txt` existan en el directorio raíz.
- El servidor debe estar corriendo para que la interfaz funcione correctamente.
# Ejercicio_practico_6_mod_6-servidor_wev_node-1
