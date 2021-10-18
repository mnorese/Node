const mongoose = require('../bin/mongodb');
const mensajesError = require('../varios/mensajesError');
const validaciones = require('../varios/validaciones')
const bcrypt = require('bcrypt')

const usuariosSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,mensajesError.CAMPOS.campo_obligatorio],
        
    },
    email:{
        type:String,
        required:[true,mensajesError.CAMPOS.campo_obligatorio],
        unique:true,
            
        
    },
    contraseña:{
        type:String,
        required:[true,mensajesError.CAMPOS.campo_obligatorio],
        validate:{
            validator:function(value){
                return validaciones.contraseñaOk(value)
            },
            message:mensajesError.USUARIOS.contraseñaIncorrecta
        }
    }

});

usuariosSchema.pre("save",function(next){
    this.contraseña = bcrypt.hashSync(this.contraseña,12)
    next()
})

module.exports = mongoose.model("usuarios",usuariosSchema)
