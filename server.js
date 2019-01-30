const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path= require('path');
require('dotenv').config();

let port =4000;
//Grabbing all static Assets
app.use(express.static('public'));

//Load View Engine
 app.set('view engine', 'pug');

//Home Route 
app.get('/', (req, res)=>{
    res.render('index');
  });

  app.get('/resume', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'pages/resume.html'));
  });

  app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'pages/about-me.html'));
  });

  app.get('/index', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'));
  });
//Start Server
app.listen(port, ()=> console.log(`Web Server started on ${port}`));