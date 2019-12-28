let mensajesCtrl = {};

const Mensajes = require('../models/mensajes.js')

mensajesCtrl.getMsgs = async (req, res) => {
    const msg = await Mensajes.find();
    res.json(msg)
};

mensajesCtrl.createMsg = async (req, res) => {
    const data = await new Mensajes(req.body);
    await data.save();
    res.send(`Mensaje de ${data.autor} recibido!`)
    };

mensajesCtrl.getMsg = async (req, res) => {
    const {id} = req.params;
    const msg = await Mensajes.findById(id);
    res.json(msg);
}

mensajesCtrl.updateMsg = async (req, res) => {
    const msg = await Mensajes.findByIdAndUpdate(req.params.id, req.body);
    await msg.save();
    res.json(`Mensaje actualizado!`);
}

mensajesCtrl.deleteMsg = async (req, res) => {
    const {id} = req.params;
    const deleted = await Mensajes.deleteOne({"_id": id});
    res.json('Mensaje eliminado!');
}

module.exports = mensajesCtrl;