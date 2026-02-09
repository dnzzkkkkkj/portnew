import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // Verificar se a API Key está configurada
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY não configurada")
      return NextResponse.json(
        { error: "Serviço de email não configurado. Por favor, configure a RESEND_API_KEY." },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await request.json()
    const { name, email, message } = body

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      )
    }

    // Validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      )
    }

    // Enviar email para você (dono do portfólio)
    const { data, error } = await resend.emails.send({
      from: "Portfólio <contato@dnzdev.com>",
      to: process.env.EMAIL_TO || "contato@dnzdev.com",
      replyTo: email,
      subject: `Nova mensagem de ${name} - Portfólio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Nova mensagem do portfólio</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 12px;">
            Esta mensagem foi enviada através do formulário de contato do seu portfólio.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Erro ao enviar email:", error)
      return NextResponse.json(
        { error: "Erro ao enviar mensagem. Tente novamente." },
        { status: 500 }
      )
    }

    // Enviar email de confirmação para quem enviou
    await resend.emails.send({
      from: "dnzzkkkkj <contato@dnzdev.com>",
      to: email,
      subject: "Mensagem recebida - dnzzkkkkj",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Obrigado pelo contato!</h2>
          <p>Olá ${name},</p>
          <p>Recebi sua mensagem e retornarei em breve.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Sua mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Atenciosamente,<br><strong>dnzzkkkkj</strong></p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Erro no servidor:", error)
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    )
  }
}
