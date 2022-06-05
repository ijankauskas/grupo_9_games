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

<<<<<<< HEAD
app.get('/detalle_producto',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/detalle_producto.html'))
=======
app.get('/productDetail',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/productDetail.html'))
})
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/home.html'))
})

app.listen(3000, ()=>{
    console.log('servidor corriendo')
>>>>>>> 8730ed34da32195ca67dfa8d742f3249296a2f2f
})