const {Sequelize, DataTypes, Op} = require('sequelize');

const sequelize = require('../models/Escuela');

function crearEscuela(req, res) {
    var body = req.body;
    Escuela.create(body)
    .then(escuela =>
    res.status(201).send(escuela)
    )
    .catch(error =>
    res.status(500).send(error)
    )
}

function obtenerEscuelas(req, res) {
    Escuela.findAll()
    .then(escuelas =>
        res.status(201).send(escuelas)
    )
}

function obtenerEscuelasporMunicipio(req, res) {
    var mun = req.params.municipio
    Escuela.findAll({
        where: { municipio : mun}
        })
    .then(escuelas =>
        res.status(201).send(escuelas)
    )
}

function modificarEscuela(req, res) {
    var body = req.body;
    var id = req.params.id;
    Escuela.update( body , {
        where: {
        id: id
        }
    })
    .then(escuelas =>
        res.status(201).send(escuela)
    )
}

function eliminarEscuela(req, res) {
    var id = req.params.id;
    Escuela.destroy({
        where: {
        id: id
        }
    })
    .then(r =>
        res.status(201).send("Se elimino el producto", id)
    )
}

 // exportamos las funciones definidas
module.exports = {
    crearEscuela,
    obtenerEscuelas,
    obtenerEscuelasporMunicipio,
    modificarEscuela,
    eliminarEscuela
}

