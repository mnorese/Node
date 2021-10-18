const mongoose = require('../bin/mongodb')

const categoriaSchema = new mongoose.Schema({
    nombre:String
});


module.exports = mongoose.model("categoria",categoriaSchema)