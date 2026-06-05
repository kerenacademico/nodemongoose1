const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true 
},
  precio: {
     type: Number, 
     required: true 
    },
  duracionMinutos: { 
    type: Number, 
    required: true 
}
},{versionKey: false});

module.exports = mongoose.model('ServicioPeluqueria', servicioSchema);
