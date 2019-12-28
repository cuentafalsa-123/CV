const express = require('express');
const router = express.Router();
const sugRouter = require('./sugerenciasRouter');
const mensajesRouter = require('./mensajesRouter');

module.exports = router;

router.use('/sugerencias', sugRouter);
router.use('/mensajes', mensajesRouter);