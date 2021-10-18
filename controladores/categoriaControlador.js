const productosModelo = require('../modelos/categoriaModelo')

module.exports = {

    todos: async function(req, res, next){
        try{
            const productos = await productosModelo.find()
            res.json(productos)
        }catch (e){
            next(e)
        }

    },

    crear: async function(req, res, next) {
        try{
            const document = new productosModelo({
                nombre:req.body.nombre
            })
            const response = await document.save()
            res.json(response)
        } catch (e){
            next(e)
        }
    }
}