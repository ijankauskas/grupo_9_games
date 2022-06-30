const express = require('express');
const usersController = require('../controllers/usersController');
const multer = require('multer');

const router = express.Router();
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/imagenes'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() 
        cb(null, uniqueSuffix + '-' + file.fieldname + path.extname(file.originalname))
    }
});

const upload = multer({ storage })

router.get('/login', usersController.login);

router.get('/register', usersController.register);


module.exports = router;