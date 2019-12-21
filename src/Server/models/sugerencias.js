const {Schema, model} = require('mongoose');

const sugerenciasSchema = new Schema({
    tema: {
        type: String,
        timestamps: true
    },
    autor: String,
})

const Sugerencias = new model('Sugerencias', sugerenciasSchema);

module.exports = Sugerencias;

