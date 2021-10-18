var express = require('express');
var router = express.Router();

const categoriaControlador = require("../controladores/categoriaControlador")

router.get('/',categoriaControlador.todos);

router.post('/',categoriaControlador.crear);

module.exports = router;