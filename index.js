const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const conexion = require('./config/connectiondb');
const clienteController = require('./controllers/cliente.controller');
const productoController = require('./controllers/producto.controller');
const serviciopeluqueriaController = require('./controllers/serviciopeluqueria.controller');
const Cliente = require('./models/cliente.model');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Manejar el objeto `conexion` que exporta config/connectiondb.js
if (conexion && typeof conexion.then === 'function') {
    conexion
        .then(() => {
            console.log('Conexión exitosa a MongoDB');
        })
        .catch((err) => {
            console.error('Error conectando a MongoDB:', err);
        });
} else {
    console.error('La conexión a MongoDB no devolvio una promesa.');
}


app.get('/', clienteController.home);
app.get('/formulario', clienteController.formulario);
app.get('/clientes', clienteController.consultar);
app.get('/clientes/:email', clienteController.consultaremail);
app.post('/clientes', clienteController.registrar);
app.put('/clientes/:email', clienteController.actualizar);
app.delete('/clientes/:email', clienteController.eliminar);


app.get('/productos', productoController.consultar);
app.get('/productos/:nombre', productoController.consultarnombre);
app.post('/productos', productoController.registrar);
app.put('/productos/:nombre', productoController.actualizar);
app.delete('/productos/:nombre', productoController.eliminar);



app.get('/serviciopeluqueria', serviciopeluqueriaController.consultar);
app.get('/productos/:nombre', productoController.consultarnombre);
app.post('/productos', productoController.registrar);
app.put('/productos/:nombre', productoController.actualizar);
app.delete('/productos/:nombre', productoController.eliminar);

app.set('view engine', 'ejs');

app.get('/saludar', function(req,res){
   fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
   .then(data => {
       res.render('pages/index2',
           {productos:data}
       )
   });
});


app.get('/listadoclientes', clienteController.listar);

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`funciona en el puerto ${PORT}`);
});