//requires
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override');


const rutasProductos = require('./routes/productos')
const rutasMain = require('./routes/main')

const app = express();

//configuracion
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs')

//rutas
app.use('/', rutasMain)

app.use('/product', rutasProductos);


app.listen(3000, ()=>{
    console.log('servidor corriendo')
})
