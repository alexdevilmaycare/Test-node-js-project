const express = require('express'); 
const postController = require('../controllers/postUserController.js') 


const postUserRouter = express.Router();

postUserRouter.post('/newUsers', postController.postUser)

module.exports = postUserRouter; 


// (req, res, next)=> {
//     const data = req.body; 
//     db.addNewUser(data); // Пересмотреть
//     res.status(302).redirect('/user_list')// Пересмотреть 
// }