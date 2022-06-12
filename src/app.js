const express = require ('express');
const rutasProductos = require('./routes/productos')
const rutasMain = require('./routes/main')

const app = express();

app.use(express.static('../public'))

app.set('view engine', 'ejs')

app.use('/', rutasMain)

app.use('/productDetail', rutasProductos);

app.listen(3000, ()=>{
    console.log('servidor corriendo')
})