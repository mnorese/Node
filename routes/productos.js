var express = require('express');
var router = express.Router();

const productosControlador = require("../controladores/productosControlador")

//buscar

router.get('/', productosControlador.todos);

router.get('/', productosControlador.porCategoria);

router.get('/', productosControlador.porDestacados);

router.get('/:id', productosControlador.porId);

//crear

router.post('/', productosControlador.crear)


//editar

router.put('/:id', productosControlador.actualizar)

//borrar

router.delete('/:id', productosControlador.borrar)

    
module.exports = router;