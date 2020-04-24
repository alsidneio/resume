const express = require("express");
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const mailer=require('./public/js/mailer');
sgMail.setApiKey(process.env.SG_API_KEY);

let port =4000;
//Grabbing all static Assets
app.use(express.static('public'));

//Load View Engine
 app.set('view engine', 'pug');

 //Body Parsder Middleware
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('resume');
  });

app.post('/send', (req,res)=>{
   
  mailer.send(req.body.email, req.body.subject, req.body.message);
    
  console.log(`email sent`);
  res.redirect('/')
  
 
});





//Start Server
app.listen(process.env.PORT||4000, ()=> console.log(`Web Server started`));