const express =  require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();
const path = require('path');

router.get('/', mainController.home);
router.get('/search', mainController.search);


module.exports = router;