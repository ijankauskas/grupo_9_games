const express = require('express');
const router = express.Router();
const apiProductosController = require('../../controllers/api/apiProductosController')

router.get('/', apiProductosController.list);
router.get('/:id', apiProductosController.detail);


module.exports = router;