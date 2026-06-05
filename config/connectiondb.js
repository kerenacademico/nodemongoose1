const mongoose = require("mongoose");
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);


var  conexion = "";

  try {
    const URI = process.env.MONGOURI;

    conexion = mongoose.connect(URI);

  } catch (err) {

    console.log(err);
  }


module.exports = conexion;

