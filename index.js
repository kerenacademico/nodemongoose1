const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const conexion = require('./config/connectiondb');
const clienteController = require('./controllers/cliente.controller');
const productoController = require('./controllers/producto.controller');
const servicioController = require('./controllers/servicio.controller');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

conexion
.then(() => {
    console.log("Conexión exitosa a MongoDB");
})
.catch((err) => {
    console.error(err);
});


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

app.get('/servicios', servicioController.consultar);
app.get('/servicios/:nombre', servicioController.consultarnombre);
app.post('/servicios', servicioController.registrar);
app.put('/servicios/:nombre', servicioController.actualizar);
app.delete('/servicios/:nombre', servicioController.eliminar);

app.listen(8000, () => {
    console.log('funciona en el puerto 8000');
});