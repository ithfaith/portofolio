// server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sgMail from '@sendgrid/mail';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set API Key dari SendGrid
sgMail.setApiKey('644a3314-4740-4744-a402-3f329176c2b6'); // Ganti dengan API Key kamu

app.post('/api/send-email', (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'mochammadfaith10@gmail.com', // Ganti dengan email tujuan
    from: email, // Email pengirim
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send('Email sent successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error sending email');
    });
});

// Jalankan server di port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
