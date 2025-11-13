import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validação básica
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // Enviar email de contato
    await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    })

    // Enviar email de confirmação (não aguarda para não bloquear)
    sendConfirmationEmail(data.email, data.name).catch((err) =>
      console.error('Erro ao enviar confirmação:', err)
    )

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
    })
  } catch (error) {
    console.error('Erro ao processar contato:', error)
    return NextResponse.json(
      {
        error: 'Erro ao enviar mensagem. Por favor, tente novamente.',
      },
      { status: 500 }
    )
  }
}
