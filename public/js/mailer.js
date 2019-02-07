const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SG_API_KEY);
require('dotenv').config();

let mailer = module.exports = {};
//Mesage Formatting
mailer.send=(email,subject,message)=>{
    const msg = {
        to: `alsidneio@gmail.com`,
        from: `alsidneio@gmail.com`,
        subject: `${subject}`,
        html: `
        <p><b>From: </b> ${email}</p> 
        <p>${message}</p>`,
    };
    
    sgMail.send(msg);
}

