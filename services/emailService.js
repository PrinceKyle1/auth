// emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS,  // Your Gmail password or App Password
  },
});

const sendVerificationEmail = async (userEmail, verificationLink) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Verify Your Email',
    text: `Click this link to verify your email: ${verificationLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw error; // Rethrow the error to handle it later
  }
};

module.exports = { sendVerificationEmail };
