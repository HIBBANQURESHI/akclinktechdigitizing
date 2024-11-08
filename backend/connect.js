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
    pass: 'zlof ekhl pufy jsno', // Replace with your app-specific password
  },
});

app.post('/Connect', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'akcsignups@gmail.com',
    subject: 'New Form from Connect Section',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message Sent Successfully!', info });
  } catch (error) {
    console.error('Error sending Message:', error);
    res.status(500).json({ message: 'Failed to send Message', error });
  }
});

app.listen(3005, () => {
  console.log('Server running on http://localhost:3005');
});