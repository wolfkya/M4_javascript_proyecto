const router = require('express').Router();

const {
    crearEscuela,
    obtenerEscuelas,
    obtenerEscuelasporMunicipio,
    modificarEscuela,
    eliminarEscuela
} = require('../controllers/escuelas');

router.get('/', obtenerEscuelas);
router.get('/municipio', obtenerEscuelasporMunicipio);
router.post('/', crearEscuela);
router.put('/:id',modificarEscuela);
router.delete('/:id', eliminarEscuela);

module.exports = router;

