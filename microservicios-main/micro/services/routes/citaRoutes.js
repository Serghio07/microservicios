const express = require('express');
const { getCitas, createCita, deleteCita } = require('../controllers/citaController');

const router = express.Router();

// Obtener todas las citas
router.get('/', getCitas);

// Crear una nueva cita
router.post('/', createCita);

// Eliminar una cita por ID
router.delete('/:id', deleteCita);

module.exports = router;
