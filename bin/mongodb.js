var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/dietetica', function (error)  {
    if (error){
        throw error;
    } else {
        console.log('MongoDB');
    }    

});


module.exports = mongoose;
