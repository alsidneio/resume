const express = require("express");
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SG_API_KEY);

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
  const msg = {
    to: `alsidneio@gmail.com`,
    from: `alsidneio@gmail.com`,
    subject: `${req.body.subject}`,
    html: `
      <p><b>FROM</b> ${req.body.email}</p>
      <p>${req.body.message}</p>`,
  };
  sgMail.send(msg);
});





//Start Server
app.listen(port, ()=> console.log(`Web Server started on ${port}`));