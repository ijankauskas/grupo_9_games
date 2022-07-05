const express =  require('express');
const router = express.Router();


//controller
const mainController = require('../controllers/mainController');


//rutas
router.get('/', mainController.home);
router.get('/search', mainController.search);


//export
module.exports = router;