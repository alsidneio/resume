const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require('dotenv').config();

const oauth2Client = new OAuth2(
   process.env.CLIENT_ID,
   process.env.CLIENT_SECRET,
   "https://developers.google.com/oauthplayground" // Redirect URL
);


oauth2Client.getAccessToken().then(res => res.token)

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: "nicklaus.roach@gmail.com", 
         clientId: process.env.CLIENT_ID,
         clientSecret: process.env.CLIENT_SECRET,
         refreshToken: process.env.REFRESH_TOKEN,
         accessToken: process.env.ACCESS_TOKEN
    }
});

const mailOptions = {
    from: "nicklaus.roach@gmail.com",
    to: "nicklaus.roach@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
};

smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});