const db = require('../model/dbmodel/database'); 

exports.getIndividualUser = async (req, res, next)=>{
    const {userID} = req.params; 
    const userToDeDisplayed = await db.getIndividUser(userID); 
    const {firstName, lastName, description} = userToDeDisplayed;
    const pageTitle = `${firstName} ${lastName}`
    res.render('individUser.pug', {pageTitle, firstName,lastName, description})
}