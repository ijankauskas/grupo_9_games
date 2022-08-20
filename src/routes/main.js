const express =  require('express');
const router = express.Router();


//controller
const mainController = require('../controllers/mainController');


//rutas
router.get('/', mainController.home);


//export
module.exports = router;