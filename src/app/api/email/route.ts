import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const data = await request.json()

  const { nome, email, whats } = data

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sekaidistribuidora4@gmail.com', // Troque por um e-mail seu válido
      pass: 'Sekai0911%',        // Gere uma senha de app no Gmail
    },
  })

  const mailOptions = {
    from: 'SEU_EMAIL@gmail.com',
    to: 'vendas@sekaidt.com.br',
    subject: 'Novo Lead do Formulário da Roleta',
    html: `
      <h2>Lead da Roleta</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whats}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 })
  } catch (err) {
    console.error('Erro ao enviar:', err)
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 })
  }
}
