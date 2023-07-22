const express = require('express');
const getUserController = require('../controllers/getController');
 
const getUserRouter = express.Router(); 

getUserRouter.get('/', getUserController.getHomePage)

getUserRouter.get('/add_user', getUserController.getFormPage)

getUserRouter.get('/user_list', getUserController.getUserListPage)

module.exports = getUserRouter
