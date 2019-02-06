const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SG_API_KEY);
require('dotenv').config();


//Mesage Formatting
let mailer=(email,subject,message)=>{
    const msg = {
        to: `${process.USER}`,
        from: `${process.USER}`,
        subject: `${subject}`,
        html: `
        <p><b>From: </b> ${email}</p>  
        <p>${message}</p>`,
    };
    
    sgMail.send(msg);
}
  
module.exports=mailer;