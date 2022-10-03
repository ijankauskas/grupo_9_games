const express = require('express');
const router = express.Router();
const apiGenerosController = require('../../controllers/api/apiGenerosController')

router.get('/', apiGenerosController.list);


module.exports = router;