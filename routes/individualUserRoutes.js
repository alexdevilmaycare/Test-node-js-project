const express = require('express'); 
const individualUserController = require('../controllers/individUserController');
const individualUserRouter = express.Router(); 

individualUserRouter.get('/indivuser/:userID', individualUserController.getIndividualUser);
module.exports = individualUserRouter; 