const app = require('./src/app');

const PORT = 3000; // Changed port to 3000

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
