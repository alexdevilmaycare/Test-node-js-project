const express = require('express'); 
const bodyparser = require('body-parser'); 
const path = require('path');
const userRouter = require('./routes/userRoutes.js')
const postUserRouter = require('./routes/postUserRouter.js');
const individualUserRouter = require('./routes/individualUserRoutes.js');

const pathToPublic = path.join(__dirname, 'public'); 
const app  = express(); 

app.set('view engine', 'pug');
app.set ('views', 'views'); 

app.use (bodyparser.urlencoded({extended: true})); 
app.use(express.static(pathToPublic));
app.use(userRouter); 
app.use(postUserRouter); 
app.use(individualUserRouter); 
app.use((req, res, next)=>{
    res.render('page_not_found.pug', {pageTitle: 'Page not found'})
}) 

app.listen(3000); 