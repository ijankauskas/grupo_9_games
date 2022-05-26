const express = require ('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/login.html'))
})


app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./view/home.html'))
})

app.listen(3000, ()=>{
    console.log('servidor corriendo')
})