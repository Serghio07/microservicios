const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'peluqueria',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4', // Soporte para caracteres especiales
});

module.exports = pool.promise();
// Obtener todas las citas
exports.getCitas = (req, res) => {
    pool.query('SELECT * FROM Citas', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Crear una nueva cita
exports.createCita = (req, res) => {
    const { cliente_nombre, cliente_telefono, servicio, fecha, hora, notas } = req.body;

    if (!cliente_nombre || !servicio || !fecha || !hora) {
        return res.status(400).json({ error: 'Los campos cliente_nombre, servicio, fecha y hora son obligatorios.' });
    }

    const query = `
        INSERT INTO Citas (cliente_nombre, cliente_telefono, servicio, fecha, hora, notas)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    pool.query(
        query,
        [cliente_nombre, cliente_telefono || null, servicio, fecha, hora, notas || null],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Cita creada', id: results.insertId });
        }
    );
};

// Eliminar una cita por ID
exports.deleteCita = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM Citas WHERE id = ?';
    pool.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Cita no encontrada.' });
        }
        res.status(200).json({ message: 'Cita eliminada con éxito.' });
    });
};
