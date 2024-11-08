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

app.post('/hero', async (req, res) => {
  const { name, email, phone, project, website, description, planTitle, planPrice } = req.body;

  const mailOptions = {
    from: email,
    to: 'akcsignups@gmail.com',
    subject: `New inquiry from ${name}`, // Subject line
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${project}\nWebsite: ${website}\nDescription: ${description}\nPlan: ${planTitle}\nPrice: $${planPrice}`, // plain text body
    html: `<h1>New inquiry from ${name}</h1>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Project:</strong> ${project}</p>
           <p><strong>Website:</strong> ${website}</p>
           <p><strong>Description:</strong> ${description}</p>
           <p><strong>Plan:</strong> ${planTitle}</p>
           <p><strong>Price:</strong> $${planPrice}</p>`, // HTML body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Order Placed Successfully!', info });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

app.listen(3002, () => {
  console.log('Server running on http://localhost:3002');
});
