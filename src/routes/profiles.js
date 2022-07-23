const express =  require('express');
const router = express.Router();

//controller
const profilesController = require('../controllers/profilesController');

//rutas
router.get('/profiles', profilesController.home);


//export
module.exports = router;