const {Schema, model} = require('mongoose');

const mensajesSchema = new Schema({
    autor: {
        type: String,        
        required: true
    },
    empresa: {
        type: String, 
    },
    mensaje: {
        type: String,        
        required: true
    },
    date: Date
})

const Mensajes = new model('Mensajes', mensajesSchema);

module.exports = Mensajes;

