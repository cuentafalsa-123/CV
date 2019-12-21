const express = require('express');
const router = express.Router();
const sugRouter = require('./sugerenciasRouter');

module.exports = router;

router.use('/sugerencias', sugRouter);