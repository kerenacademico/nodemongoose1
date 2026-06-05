const producto = require('../models/producto.model');

exports.consultar = async (req, res)=>{

    try {

        const productos = await producto.find();

        res.json(productos);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
} 

exports.consultarnombre = async (req, res)=>{

    try {
        
        const productos = await producto.find({nombre: req.params.nombre });
        console.log(productos);
        res.json(productos);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
} 

exports.registrar = async (req, res)=>{

    try {
        let nuevoProducto={
            nombre:req.body.nombre,
            precio:req.body.precio,
            stock:req.body.stock
        }
        
        const productos = await producto.create(nuevoProducto);
        console.log(productos);
        res.json(productos);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }
} 

exports.actualizar = async (req, res) => {
  try {
    const productoActualizado = await producto.findOneAndUpdate(
      { nombre: req.params.nombre },
      {
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock
      },
      { new: true } // Devuelve el producto actualizado
    );

    res.json(productoActualizado);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const productoEliminado = await producto.findOneAndDelete({ nombre: req.params.nombre });

    res.json({
      mensaje: "Producto eliminado correctamente",
      producto: productoEliminado
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
