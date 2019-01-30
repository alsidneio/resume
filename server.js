const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path= require('path');
require('dotenv').config();

let port =4222;
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'));
  });

  app.get('/resume', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'resume.html'));
  });
app.listen(port, ()=> console.log(`Web Server started on ${port}`));