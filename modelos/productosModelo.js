const mongoose = require('../bin/mongodb')
const mensajesError = require('../varios/mensajesError')

const productosSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,mensajesError.CAMPOS.campo_obligatorio]
    },  

    codigo:{
        type:String,
        required:[true,mensajesError.CAMPOS.campo_obligatorio],
    },    

    descripcion:String,

    precio:{
        type:Number,
        required:[true,mensajesError.CAMPOS.campo_obligatorio],
        min:[1,mensajesError.CAMPOS.precioMayorCero]        
    },  

    cantidad:{
        type:Number,
        min:[1,mensajesError.CAMPOS.precioMayorCero]
    },

    categoria:{
        type:mongoose.Schema.ObjectId,
        ref:"categoria",
    },
    destacado:Boolean
})


module.exports = mongoose.model("productos",productosSchema)