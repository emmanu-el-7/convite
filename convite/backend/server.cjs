require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

console.log('Credenciais:', {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS?.substring(0, 3) + '***'
});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('Erro na configuração do servidor:', error);
  } else {
    console.log('Servidor pronto para enviar emails');
  }
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
  };

  return transporter.sendMail(mailOptions);
};

app.post('/send-email', async (req, res) => {
  const { dataSelecionada, selectedType, animacao } = req.body;

  try {
    const to = 'emmanu.zelda@gmail.com'
    const subject = 'Date com a Manu :)';
    const text = `A data selecionada foi: ${dataSelecionada}\nTipo de date: ${selectedType}\nAnimação: ${animacao}`;

    await sendEmail(to, subject, text);

    res.send('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).send('Erro ao enviar o e-mail');
  }
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});