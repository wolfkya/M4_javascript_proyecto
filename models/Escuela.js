const {Sequelize, DataTypes} = require('sequelize');

const sequelize = require('./config/db');

//definición de Producto
const Escuela = sequelize.define('Escuela', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombreEscuela : {
        type: DataTypes.TEXT(255),
    },
    nivelEducativo : {
        type: DataTypes.TEXT(50),
    },
    municipio : {
        type: DataTypes.TEXT(255),
    },
    Domicilio : {
        type: DataTypes.TEXT(255),
    },
    numeroExterior : {
        type: DataTypes.REAL(10),
    },
    colonia : {
        type: DataTypes.TEXT(255),
    },
    codigoPostal : {
        type: DataTypes.REAL(5),
    },
    telefono : {
        type: DataTypes.REAL(12),
    },
    longitud : {
        type: DataTypes.REAL(10),
    },
    latitud : {
        type: DataTypes.REAL(10),
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Escuela;
