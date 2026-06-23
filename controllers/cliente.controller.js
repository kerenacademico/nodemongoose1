const Cliente = require('../models/cliente.model');

exports.home = async (req, res) => {
res.render ('pages/index')
}

exports.formulario = (req, res) => {
  res.render('pages/registrarcliente');
}

exports.listar = async (req, res) => {
  const clientes = await Cliente.find({});
  res.render('pages/clientes', { clientes });
};


exports.consultar = async (req, res)=>{
    try {
        const clientes = await Cliente.find();
        console.log(clientes);
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 

exports.consultaremail = async (req, res)=>{
    try {
        const clientes = await Cliente.findOne({email: req.params.email });
        console.log(clientes);
        res.redirect('/listadoclientes');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
} 

exports.registrar = async (req, res)=>{

    try {
        let nuevoCliente={
            nombre:req.body.nombre,
            email:req.body.email,
            telefono:req.body.telefono
        }
        
        const clientes = await Cliente.create(nuevoCliente);
        console.log(clientes);
        res.redirect('/listadoclientes');

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 

exports.actualizar = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findOneAndUpdate(
      { email: req.params.email },
      {
        email: req.body.email,
        nombre: req.body.nombre,
        telefono: req.body.telefono
      },
      { new: true } // Devuelve el cliente actualizado
    );
    res.redirect('/listadoclientes');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findOneAndDelete({ email: req.params.email });
    res.redirect('/listadoclientes');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.listar = async (req, res) => {
  try {
    const clientes = await Cliente.find({});
    res.render('pages/clientes', { clientes });
  } catch (error) {
    res.status(500).send('error al listar clientes');
  }    
};

/**
en lugar de usar
module.exports para exportar 
puede poner la palabra exports directamente en la funcion o variable 
que deseo exportar 
**/
