/**
 * Sistema de email simplificado para deploy no Vercel
 * Implementação sem nodemailer - usa logging para desenvolvimento
 * Em produção, pode ser integrado com serviços como SendGrid, Resend, etc.
 */

interface ContactEmailData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

/**
 * Envia email de contato
 * NOTA: Esta é uma implementação simplificada para deploy
 * Para produção, integre com SendGrid, Resend ou outro serviço de email
 */
export async function sendContactEmail(data: ContactEmailData) {
  // Log para desenvolvimento
  console.log('📧 Email de contato recebido:')
  console.log('De:', data.name, `<${data.email}>`)
  console.log('Assunto:', data.subject)
  console.log('Mensagem:', data.message)
  console.log('---')

  // Em produção, você pode integrar com:
  // - SendGrid: https://sendgrid.com
  // - Resend: https://resend.com
  // - Postmark: https://postmarkapp.com
  // - AWS SES: https://aws.amazon.com/ses/

  // Exemplo de integração com API externa (descomentado quando configurar):
  /*
  if (process.env.SENDGRID_API_KEY) {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: process.env.CONTACT_EMAIL || 'contato@ninmahub.com' }],
          subject: `[NInMa Hub] ${data.subject}`,
        }],
        from: { email: process.env.SMTP_FROM || 'noreply@ninmahub.com' },
        reply_to: { email: data.email },
        content: [{
          type: 'text/html',
          value: `
            <h2>Nova mensagem de contato</h2>
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Telefone:</strong> ${data.phone}</p>` : ''}
            <p><strong>Assunto:</strong> ${data.subject}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${data.message}</p>
          `,
        }],
      }),
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar email via SendGrid')
    }
  }
  */

  return { success: true, messageId: 'dev-' + Date.now() }
}

/**
 * Envia email de confirmação para o remetente
 * NOTA: Implementação simplificada - apenas loga por enquanto
 */
export async function sendConfirmationEmail(to: string, name: string) {
  console.log('📧 Email de confirmação seria enviado para:', to, 'Nome:', name)

  // Implementação similar à função acima quando integrar com serviço real

  return { success: true }
}
