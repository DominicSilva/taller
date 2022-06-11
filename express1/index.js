// console.log("proyecto express")

const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const aplicacion = express();
conectarDB();
aplicacion.use(cors());
aplicacion.use(express.json());
aplicacion.use('/api', require('./routes/proyectorutas'))
aplicacion.listen(4000, () => {
    console.log("El servidor se esta ejecutando en el puerto 4000")
})
