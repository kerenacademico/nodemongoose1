const servicio = require('../models/servicio.model');

exports.consultar = async (req, res)=>{

    try {

        const servicios = await servicio.find();

        res.json(servicios);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
} 

exports.consultarnombre = async (req, res)=>{

    try {
        
        const servicios = await servicio.find({nombre: req.params.nombre });
        console.log(servicios);
        res.json(servicios);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
} 

exports.registrar = async (req, res)=>{

    try {
        let nuevoServicio={
            nombre:req.body.nombre,
            precio:req.body.precio,
            duracionMinutos:req.body.duracionMinutos
        }
        
        const servicios = await servicio.create(nuevoServicio);
        console.log(servicios);
        res.json(servicios);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
} 

exports.actualizar = async (req, res) => {
  try {
    const servicioActualizado = await servicio.findOneAndUpdate(
      { nombre: req.params.nombre },
      {
        nombre: req.body.nombre,
        precio: req.body.precio,
        duracionMinutos: req.body.duracionMinutos
      },
      { new: true } // Devuelve el servicio actualizado
    );

    res.json(servicioActualizado);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const servicioEliminado = await servicio.findOneAndDelete({ nombre: req.params.nombre });

    res.json({
      mensaje: "Servicio eliminado correctamente",
      servicio: servicioEliminado
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
