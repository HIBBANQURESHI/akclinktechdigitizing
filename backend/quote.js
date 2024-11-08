const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akcsignups@gmail.com',
    pass: 'zlof ekhl pufy jsno' // Replace with your app-specific password
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, phone } = req.body;

  const mailOptions = {
    from: email,
    to: 'akcsignups@gmail.com',
    subject: 'New Query from Popup Form',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!', info });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
