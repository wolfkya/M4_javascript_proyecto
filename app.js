const Sequelize = require('sequelize');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const sequelize = require('./config/db');

app.use('/v1', require('./routes/index'));

const PORT = 4001;
app.listen(PORT, ()=> {
    console.log(`Server is listening API CAVR PORT: ${PORT}`);
});

try{
    sequelize.authenticate();
    console.log('La Conexión API CAVR es exitosa');
}
catch{
    console.error('ocurrio un problema conexión API CAVR', error);
}

/*definición de nodelo con create
ultimo ID 12728 en archivo de Excel


Escuela.create({
    id:12729,
    nombreEscuela: 'nombre escuela ultima con API',
    nivelEducativo:'Primaria',
    municipio:'Morelia',
    Domicilio:'lazaro Cárdenas',
    numeroExterior:1500,
    colonia:'Ventura',
    codigoPostal:5900,
    telefono:123456789,
    longitud:-101.21544,
    latitud: 91.1455265

})
.then(res=>{console.log(res)});

//busqueda de escuelas por municipio:

Escuela.findAll({
    where: {
        municipio: 'Morelia'
    }
})
.then(products=>console.log("Todas las escuelas del municipio de Morelia", JSON.stringify(products),null,2))

//modificar o hacer el Upgrade de las escuelas

Escuela.update({nombreEscuela:"cambio Upgrade de escuela por API"}, {
    where: {
        id: 12729
    }
})
.then(res=>{console.log(res)})

//eliminar el ultimo registro pero en formato de lectura

Escuela.destroy({
    where: {
        id:12729
    }
})
.then(res=>{console.log(res)})
*/
