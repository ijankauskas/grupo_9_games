const express = require('express');
const router = express.Router();


//controller
const usersController = require('../controllers/usersController');


//middleware
const upload = require('../middleware/multerUsersMiddleware');
const validation = require('../middleware/validRegisterMiddleware');


//rutas
router.get('/login', usersController.login);
router.post('/login', usersController.login);

router.get('/register', usersController.register);
router.post('/register',upload.single('imagenAvatar') , validation , usersController.processRegister);


//exports
module.exports = router;