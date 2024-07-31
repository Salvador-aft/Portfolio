const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Handles POST requests to the root path of the router
router.post('/', (req, res) => {
  const { name, email, phone, subject, message } = req.body; // Extracts the contact details from the request body
  
  // Configures the email transporter using nodemailer with Gmail as the service
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    port: 465,
    secure: true, // Uses SSL
  });

  // Defines the mail options, including sender, recipient, subject, and body text
  const mailOptions = {
    from: 'salvadorfarias2010@gmail.com',
    to: 'salvadorfarias2010@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  // Sends the email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error); // Logs any error that occurs during the sending process
      res.status(500).send('Error sending email'); // Sends a 500 response if there is an error
    } else {
      console.log('Email sent: ' + info.response); // Logs the response on successful email sending
      res.status(200).send('Email sent successfully'); // Sends a 200 response on successful email sending
    }
  });
});

module.exports = router;