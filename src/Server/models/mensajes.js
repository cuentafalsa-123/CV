const {Schema, model} = require('mongoose');

const mensajesSchema = new Schema({
    autor: String,
    empresa: String,
    mensaje: String
})

const Mensajes = new model('Mensajes', mensajesSchema);

module.exports = Mensajes;

