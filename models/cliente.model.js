const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: [true, 'Falto el nombre' ] 
 },
  email: { 
    type: String,
     required: [true, 'Falto el email' ], 
     unique: [true, 'El email debe ser unico']
 },
  telefono: { 
    type: String,
    default: '000000',
    lowercase: true,
    trim: true,
    minlength: [10, 'Ingreso un telefono muy corto'],
    maxlength: [10, 'Ingreso un telefono muy largo'],
 }
},{versionKey: false});

module.exports = mongoose.model('Cliente', clienteSchema);