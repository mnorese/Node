const usuariosModelo = require('../modelos/usuariosModelo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


module.exports = {
    crear: async function(req, res, next){
        try{
            const usuario = new usuariosModelo({
                nombre:req.body.nombre,
                email:req.body.email,
                contraseña:req.body.contraseña

            })
            const document = await usuario.save()
            res.json(document)
        } catch (e) {
            next(e)
        }
    },
    login: async function(req, res, next){
        try{
            const usuario = await usuariosModelo.findOne({email:req.body.email})
            if(!usuario){
                res.json({message:"Email incorrecto"})
                return
            }
            if(bcrypt.compareSync(req.body.contraseña,usuario.contraseña)){
                const token = jwt.sign({usuarioId:usuario._id},req.app.get("secretKey"),{expiresIn:"1h"})
                res.json({token:token})
            }else{
                res.json({message:"Contraseña incorrecta"})
                return
            }
        } catch (e) {
            next(e)
        }
    }
}
