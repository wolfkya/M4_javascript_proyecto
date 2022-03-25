const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send("Bienvenido a API prueba de Escuelas de CAVR")
});

router.use('/escuelas', require('./escuelas'));

module.exports = router;
