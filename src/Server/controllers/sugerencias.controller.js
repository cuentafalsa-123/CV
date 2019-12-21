let sugerenciasCtrl = {};

const Sugerencias = require('../models/sugerencias.js')

sugerenciasCtrl.getSugs = async (req, res) => {
    const sugs = await Sugerencias.find();
    res.json(sugs)
};

sugerenciasCtrl.createSug = async (req, res) => {
    const data = await new Sugerencias(req.body);
    await data.save();
    res.send(`Sugerencia "${data.tema}" recibida!`)
    };

sugerenciasCtrl.getSug = async (req, res) => {
    const {id} = req.params;
    const sug = await Sugerencias.findById(id);
    res.json(sug);
}

sugerenciasCtrl.updateSug = async (req, res) => {
    const sug = await Sugerencias.findByIdAndUpdate(req.params.id, req.body);
    await sug.save();
    res.json(`Sugerencia ${sug.tema} actualizada!`);
}

sugerenciasCtrl.deleteSug = async (req, res) => {
    const {id} = req.params;
    const deleted = await Sugerencias.deleteOne({"_id": id});
    res.json('Sugerencia eliminada!');
}

module.exports = sugerenciasCtrl;