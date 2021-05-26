const express = require("express");
const path = require("path");
//const fs = require("fs");//files accessing on sysytem
const app = express();
//const csrf = require("csurf");//save from cross site attack
const PORT = process.env.PORT || 80;

//express stuff
app.use('/static', express.static('static')) //for seving static files
app.use(express.urlencoded());//for getting filled data in form

//PUG STUFFS
app.set('view engine', 'pug');// setting template engine as pug
app.set('views',path.join(__dirname, 'views'));//set the views directory 


//end points
app.get('/', (req,res)=>{
    res.status(200).render('index');
});

//start server
app.listen( PORT, ()=>{
    console.log("the application started sucessfully");
} )