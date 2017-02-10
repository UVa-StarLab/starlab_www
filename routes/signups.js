var app = require('../server'),
  path = require('path'),
  nodemailer = require('nodemailer');
  config = require('./config.js');

app.post('/signup', function (req, res) {
  console.log(req.body);
  var mailOpts, smtpTrans;
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  smtpTrans = nodemailer.createTransport('SMTP', {
      service: 'Gmail',
      auth: {
          user: process.env.GMAIL_USERNAME,
          pass: process.env.GMAIL_PW
      }
  });
  //Mail options
  mailOpts = {
      from: 'Sinan\'s Website', //grab form data from the request body object
      to: 'sulkuatam@gmail.com',
      subject: 'Sinan\'s Website | New Message',
      text: 'From: ' + req.body.name + ' / ' + req.body.email + ' Note: ' + req.body.note
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          res.sendFile(path.join(__dirname, '../app/templates/fail.html'));
      }
      //Email sent
      else {
          signupsRef.push({'Name':req.body.name,'Email':req.body.email,'Note':req.body.note});
          res.sendFile(path.join(__dirname, '../app/templates/success.html'));
      }
  });
});
