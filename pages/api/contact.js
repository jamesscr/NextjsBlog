import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // Ton adresse Gmail
        pass: process.env.PASSWORD, // Ton mot de passe ou app password
      },
    })

    await transporter.sendMail({
      from: email, // Ton adresse (obligatoire avec Gmail)
      to: process.env.EMAIL, // Tu reçois le message
      replyTo: `${name} <${email}>`, // L'adresse de l'utilisateur
      subject,
      text: message,
    })

    res.status(200).json({ success: true, message: 'Email sent' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: 'Something went wrong' })
  }
}
