const express = require('express');

// Se tiene que inicializar el módulo
// Por convencion lo llamaremos app
const app = express()

// La sintaxis es el modulo, el listen y dentro
// iria (puerto,()=>{que se hace al escucharlo})
app.listen(8080,()=> {
    console.log('escuchando al puerto 8080');
    console.log('determinando que esta es la ruta de activacion del localhost:8080');
})

// Como es que mando la accion de que
// cuando se escuche haga algo 

// Creamos entonces el server

app.get('/',(req,res)=>{
    res.send('Hola con express en el puerto normal')
})

// Leer el archivo de preoductos y devolverlos
// Dentro de un objeto 
// recibir por query param el limit
app.get('/productos',(req,res)=>{
    res.send('Hola productos')
})

// recibir por req.params el product id 
// Devolver solo el producto solicitado
app.get('/productos/:pid',(req,res)=>{
    res.send('Hola productos')
})

app.get('/usuarios',(req,res)=>{
    res.send('Hola usuarios')
})




