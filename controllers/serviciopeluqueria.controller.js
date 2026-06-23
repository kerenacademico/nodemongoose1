const serviciopeluqueria = require('../models/serviciopeluqueria.model');


exports.consultar = async (req, res)=>{

    try {

        const serviciospeluqueria = await serviciopeluqueria.find();

        res.json(serviciospeluqueria);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
} 

exports.consultarnombre = async (req, res)=>{

    try {
        
        const serviciospeluqueria = await serviciopeluqueria.find({nombre: req.params.nombre });
        console.log(serviciospeluqueria);
        res.json(serviciospeluqueria);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
} 

exports.registrar = async (req, res)=>{

    try {
        let nuevoServiciopeluqueria={
            nombre:req.body.nombre,
            precio:req.body.precio,
            duracionMinutos:req.body.duracionMinutos
        }
        
        const serviciospeluqueria = await serviciopeluqueria.create(nuevoServiciopeluqueria);
        console.log(serviciospeluqueria);
        res.json(serviciospeluqueria);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
} 

exports.actualizar = async (req, res) => {
  try {
    const serviciopeluqueriaActualizado = await serviciopeluqueria.findOneAndUpdate(
      { nombre: req.params.nombre },
      {
        nombre: req.body.nombre,
        precio: req.body.precio,
        duracionMinutos: req.body.duracionMinutos
      },
      { new: true } // Devuelve el servicio actualizado
    );

    res.json(serviciopeluqueriaActualizado);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const serviciopeluqueriaEliminado = await serviciopeluqueria.findOneAndDelete({ nombre: req.params.nombre });

    res.json({
      mensaje: "Servicio peluqueria eliminado correctamente",
      servicio: "serviciopeluqueriaEliminado"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
en lugar de usar
module.exports para exportar 
puede poner la palabra exports directamente en la funcion o variable 
que deseo exportar 
**/
