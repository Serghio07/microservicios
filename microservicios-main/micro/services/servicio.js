const express = require('express');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const citaRoutes = require('./routes/citaRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; // Puerto exclusivo para Citas

// Middlewares
app.use(express.json());
app.use(fileUpload({ createParentPath: true }));

// Ruta para el servicio de Citas
app.use('/citas', citaRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor de citas ejecutándose en http://localhost:${PORT}`);
});
