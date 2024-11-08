const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akcsignups@gmail.com',
    pass: 'zlof ekhl pufy jsno', // Replace with your app-specific password
  },
});

// Endpoint to handle contact form submissions
app.post('/contact', async (req, res) => {
  const { name, email, phone, selectedInterests, company, category, message } = req.body;

  // Email content
  const mailOptions = {
    from: email,
    to: 'akcsignups@gmail.com',
    subject: 'New Contact Us Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Category: ${category}
      Message: ${message}
      Interests: ${selectedInterests.join(', ')}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message Sent Successfully!', info });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

app.listen(3003, () => {
  console.log('Server running on http://localhost:3003');
});
