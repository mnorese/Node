var express = require('express');
const usuariosControlador = require('../controladores/usuariosControlador');
var router = express.Router();



router.post('/', usuariosControlador.crear);

router.post('/login', usuariosControlador.login);

module.exports = router;
