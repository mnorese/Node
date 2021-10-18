const productosModelo = require('../modelos/productosModelo')
const categoriaModelo = require('../modelos/categoriaModelo')

module.exports={

    todos: async function(req, res, next) {
        try{
            const documentos = await productosModelo.find().populate("categoria");
            res.json(documentos);
        } catch (e){
            next(e)
        }
        },

    porCategoria: async function(req, res, next) {
        let query={}
            if(req.query.buscar){
                query={
                    categoria:{$regex:".*"+req.query.buscar+".*",$options:"i"}
                }
            }
        try{
                const documentos = await productosModelo.find({query}).populate("categoria")
                res.json(documentos);
        } catch (e){
               next(e)
        }
    },
    
    porDestacados: async function(req, res, next) {
        let query={}
            if(req.query.destacado){
                query={
                    categoria:{$regex:".*"+req.query.destacado+".*",$options:"i"}
                }
            }
        try{
                const documentos = await productosModelo.find({query}).populate("categoria")
                res.json(documentos);
        } catch (e){
               next(e)
        }
    },   
    
    porId: async function(req, res, next){
       try{
            const producto = await productosModelo.findById(req.params.id)
            res.json(producto)
       } catch (e){
        next(e)
       }
           
    },

    
    crear: async function(req, res, next) {
        try{
            const producto = new productosModelo({
                nombre:req.body.nombre,
                codigo:req.body.codigo,
                descripcion:req.body.descripcion,
                precio:req.body.precio,
                cantidad:req.body.cantidad,
                categoria:req.body.categoria,
                destacado:req.body.destacado
            })
            const document = await producto.save()
            res.json(document)
        } catch (e){
            next(e)
        }
        
    },

    actualizar: async function(req, res, next){
        try{
            const document = await productosModelo.updateOne({_id:req.params.id},req.body)
            res.json(document)
        } catch (e){
            next(e)
        }
        
    },

    borrar: async function(req, res, next){
        try {
            const document = await productosModelo.deleteOne({_id:req.params.id})
            res.json(document)
        } catch (e) {
            next(e)
        }
       
    }
}