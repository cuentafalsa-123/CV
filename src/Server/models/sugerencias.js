const {Schema, model} = require('mongoose');

const sugerenciasSchema = new Schema({
    tema: {
        type: String,
    },
    date: Date,
})

const Sugerencias = new model('Sugerencias', sugerenciasSchema);

module.exports = Sugerencias;

