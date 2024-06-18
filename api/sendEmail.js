// api/sendEmail.js

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { from_name, from_email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: from_email,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Form Submission',
    text: `Name: ${from_name}\nEmail: ${from_email}\nMessage: ${message}`,
  };

  const confirmationMailOptions = {
    from: process.env.EMAIL_USER,
    to: from_email,
    subject: 'Thank you for contacting us!',
    text: `Hi ${from_name},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\nYour Company`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationMailOptions);
    res.status(200).send({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to send message' });
  }
}
