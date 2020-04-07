const express = require('express');
require('dotenv').config()
const database = require('./conf');
const bodyParser = require('body-parser');

//Creando nuestra app a partir de la función de express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

//Ruta GET del home page
app.get('/', (req, res)=>{
  database.query('SELECT * FROM jugadoras_femenino', (error, results)=>{
    res.send(results)
  })
})

//Activando la escucha para el puerto 3000
app.listen(3000, (error)=>{
  if(error){
    console.log('Ha habido un error al ejecutar app.listen')
  } else {
    console.log('Conectado y escuchando en el puerto 3000')
  }
})