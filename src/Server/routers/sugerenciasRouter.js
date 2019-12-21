const express = require('express');
const sugRouter = express.Router();
const sugerenciasCtrl = require('../controllers/sugerencias.controller.js');

module.exports = sugRouter;

sugRouter.get('/', (req, res) => {
    return sugerenciasCtrl.getSugs(req, res);
})

sugRouter.post('/', (req, res) => {
    return sugerenciasCtrl.createSug(req, res);
})

sugRouter.get('/:id', (req, res) => {
    return sugerenciasCtrl.getSug(req, res);
})

sugRouter.put('/:id', (req, res) => {
    return sugerenciasCtrl.updateSug(req, res)
})

sugRouter.delete('/:id', (req, res) => {
    return sugerenciasCtrl.deleteSug(req, res);
})