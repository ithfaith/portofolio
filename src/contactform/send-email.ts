// api/send-email.ts
import fetch from 'fetch';
import { NextApiRequest, NextApiResponse } from 'next';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = req.body;

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

  const msg = {
    to: 'info@domain.com',
    from: 'info@domain.com',
    subject: subject,
    text: `Nama: ${name}\nEmail: ${email}\n\n${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email berhasil dikirim' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengirim email' });
  }
};

export default sendEmail;