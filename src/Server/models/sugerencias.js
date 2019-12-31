const {Schema, model} = require('mongoose');

const sugerenciasSchema = new Schema({
    tema: {
        type: String,
        required: true
    },
    date: Date,
})

const Sugerencias = new model('Sugerencias', sugerenciasSchema);

module.exports = Sugerencias;

