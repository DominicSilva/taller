const express = require('express')
const router = express.Router();
const ContactoController = require('../controllers/ContactoController')

router.post('/crear-contacto', ContactoController.crearContacto)
router.get('/obtener-lista-contactos', ContactoController.obtenerContactos)
router.get('/obtener-contacto/:id', ContactoController.obtenerContacto)
router.put('/actualizar-contacto/:id', ContactoController.actualizarContacto)
router.delete('/borrar-contacto/:id', ContactoController.borrarContacto)

module.exports = router
