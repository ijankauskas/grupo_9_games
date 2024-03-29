//require asd
const express = require('express');
const router = express.Router();


//controller
const usersController = require('../controllers/usersController');


//middleware
const upload = require('../middleware/multerUsersMiddleware');
const validation = require('../middleware/validRegisterMiddleware');
const guestMiddleware = require('../middleware/guestMiddleware');

//rutas
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.processLogin);

router.get('/register', guestMiddleware, usersController.register);
router.post('/register',upload.single('imagenAvatar') , validation , usersController.processRegister);

router.get('/logout', usersController.logout);
router.get('/edit', usersController.edit);
router.put('/edit',upload.single('imagenAvatar') , validation,  usersController.update);


router.get('/profile',usersController.profile);

//exports
module.exports = router;