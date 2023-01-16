const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController');

//Productos Vendidos
router.get('/vendidos', apiUsersController.vender);

//Usuarios
router.get('/total', apiUsersController.total);



module.exports = router