const db = require('../model/dbmodel/database.js'); 
exports.getHomePage = (req, res, next)=> {
    res.render('home', {pageTitle: 'home page'}); 
}
exports.getFormPage = (req, res, next)=> {
    res.render('form', {pageTitle: 'Create user'}); 
}

exports.getUserListPage = async (req, res, next)=>{
    const currUsers =  await db.getUserList()
    console.log(currUsers)
    res.render('userlist', {userlist: currUsers,
                            pageTitle:'List of users'})
}


