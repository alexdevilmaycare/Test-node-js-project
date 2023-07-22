const db = require('../model/dbmodel/database.js');

exports.postUser = async (req, res, next)=> {
    const data = req.body; 
    // db.addNewUser(data); // Пересмотреть
    await db.updateDb(data); 
    res.status(302).redirect('/user_list')// Пересмотреть 
}