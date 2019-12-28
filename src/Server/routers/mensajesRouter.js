const express = require('express');
const mensajesRouter = express.Router();
const mensajesCtrl = require('../controllers/mensajes.controller.js');

module.exports = mensajesRouter;

mensajesRouter.get('/', (req, res) => {
    return mensajesCtrl.getMsgs(req, res);
})

mensajesRouter.post('/', (req, res) => {
    return mensajesCtrl.createMsg(req, res);
})

mensajesRouter.get('/:id', (req, res) => {
    return mensajesCtrl.getMsg(req, res);
})

mensajesRouter.put('/:id', (req, res) => {
    return mensajesCtrl.updateMsg(req, res)
})

mensajesRouter.delete('/:id', (req, res) => {
    return mensajesCtrl.deleteMsg(req, res);
})