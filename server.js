const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const {google} = require('googleapis');
require('dotenv').config();

let port =4000;
//Grabbing all static Assets
app.use(express.static('public'));

//Load View Engine
 app.set('view engine', 'pug');

 //Body Parsder Middleware
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());

//Home Route 
app.get('/', (req, res)=>{
    res.render('index');
  });

app.get('/resume', (req, res)=>{
    res.render('resume');
  });
app.post('/send', (req,res)=>{
 
});





//Start Server
app.listen(port, ()=> console.log(`Web Server started on ${port}`));