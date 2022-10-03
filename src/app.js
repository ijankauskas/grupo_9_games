//requires
const createError = require('http-errors');
const cookie = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override');
const cors = require('cors')

//middleware
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');

//require de rutas
const rutasProductos = require('./routes/productos')
const rutasMain = require('./routes/main')
const rutasUsers = require('./routes/users')

//require de apis
const apiProductos = require('./routes/api/apiProductos')
const apiUsers = require('./routes/api/apiUsers')
const apiGeneros = require('./routes/api/apiGeneros')

const app = express();

//configuracion
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, './views'));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookie());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'It is a secret',
    resave: false,
    saveUninitialized: false,
}));
app.use(userLoggedMiddleware);
app.use(cors())

app.set('view engine', 'ejs')

//rutas
app.use('/', rutasMain)

app.use('/product', rutasProductos);

app.use('/users', rutasUsers)

//apis
app.use('/api/productos', apiProductos);
app.use('/api/usuarios', apiUsers);
app.use('/api/generos', apiGeneros);

app.listen(3001, ()=>{
    console.log('servidor corriendo')
})
