const express = require ('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/login.html'))
})

app.get('/formulario_registro',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/formulario_registro.html'))
})

app.get('/detalle_producto',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/detalle_producto.html'))
})
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/home.html'))
})

app.listen(3000, ()=>{
    console.log('servidor corriendo')
})