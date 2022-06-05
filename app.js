const express = require ('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log('servidor corriendo')
})

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/home.html'))
})

app.get('/cart',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/cart.html'))
})

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/login.html'))
})

app.get('/register',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/register.html'))
})

app.get('/detalle_producto',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/detalle_producto.html'))
})