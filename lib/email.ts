import nodemailer from 'nodemailer'

// Configuração do transportador de email
export const createTransporter = () => {
  // Para produção, use configurações reais de SMTP
  // Para desenvolvimento, você pode usar Ethereal (teste) ou Mailtrap

  if (process.env.SMTP_HOST && process.env.SMTP_PORT) {
    // Configuração real de SMTP (produção)
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  } else {
    // Modo de teste (desenvolvimento) - apenas loga no console
    return nodemailer.createTransporter({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: 'test@ethereal.email',
        pass: 'test',
      },
    })
  }
}

interface ContactEmailData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

/**
 * Envia email de contato
 */
export async function sendContactEmail(data: ContactEmailData) {
  const transporter = createTransporter()

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nova Mensagem de Contato</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #604E9E 0%, #6FB9A1 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .content {
            background: #fff;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: 600;
            color: #604E9E;
            margin-bottom: 5px;
          }
          .field-value {
            background: #f9fafb;
            padding: 12px;
            border-radius: 6px;
            border-left: 3px solid #604E9E;
          }
          .message {
            background: #f9fafb;
            padding: 20px;
            border-radius: 6px;
            border-left: 3px solid #6FB9A1;
            white-space: pre-wrap;
          }
          .footer {
            background: #f9fafb;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
            border-radius: 0 0 10px 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0;">Nova Mensagem de Contato</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">NInMa Hub - Website</p>
        </div>

        <div class="content">
          <div class="field">
            <div class="field-label">Nome:</div>
            <div class="field-value">${data.name}</div>
          </div>

          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">
              <a href="mailto:${data.email}" style="color: #604E9E; text-decoration: none;">
                ${data.email}
              </a>
            </div>
          </div>

          ${
            data.phone
              ? `
          <div class="field">
            <div class="field-label">Telefone:</div>
            <div class="field-value">
              <a href="tel:${data.phone}" style="color: #604E9E; text-decoration: none;">
                ${data.phone}
              </a>
            </div>
          </div>
          `
              : ''
          }

          <div class="field">
            <div class="field-label">Assunto:</div>
            <div class="field-value">${data.subject}</div>
          </div>

          <div class="field">
            <div class="field-label">Mensagem:</div>
            <div class="message">${data.message}</div>
          </div>
        </div>

        <div class="footer">
          <p style="margin: 0;">
            Esta mensagem foi enviada através do formulário de contato do site NInMa Hub
          </p>
          <p style="margin: 10px 0 0 0;">
            © ${new Date().getFullYear()} NInMa Hub - Universidade Franciscana
          </p>
        </div>
      </body>
    </html>
  `

  const emailText = `
    Nova Mensagem de Contato - NInMa Hub

    Nome: ${data.name}
    Email: ${data.email}
    ${data.phone ? `Telefone: ${data.phone}` : ''}
    Assunto: ${data.subject}

    Mensagem:
    ${data.message}

    ---
    Esta mensagem foi enviada através do formulário de contato do site NInMa Hub
  `

  try {
    const info = await transporter.sendMail({
      from: `"NInMa Hub Website" <${process.env.SMTP_FROM || 'noreply@ninmahub.com'}>`,
      to: process.env.CONTACT_EMAIL || 'contato@ninmahub.com',
      replyTo: data.email,
      subject: `[NInMa Hub] ${data.subject}`,
      text: emailText,
      html: emailHtml,
    })

    console.log('Email enviado:', info.messageId)

    // Se estiver usando Ethereal (desenvolvimento), mostra URL de preview
    if (process.env.NODE_ENV === 'development' && !process.env.SMTP_HOST) {
      console.log('Preview URL:', nodemailer.getTestMessageUrl(info))
    }

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    throw error
  }
}

/**
 * Envia email de confirmação para o remetente
 */
export async function sendConfirmationEmail(to: string, name: string) {
  const transporter = createTransporter()

  const emailHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mensagem Recebida</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #604E9E 0%, #6FB9A1 100%);
            color: white;
            padding: 40px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .content {
            background: #fff;
            padding: 40px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background: #604E9E;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 20px;
          }
          .footer {
            background: #f9fafb;
            padding: 30px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
            border-radius: 0 0 10px 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0; font-size: 28px;">Mensagem Recebida!</h1>
        </div>

        <div class="content">
          <p>Olá <strong>${name}</strong>,</p>

          <p>
            Recebemos sua mensagem através do nosso site e agradecemos pelo contato!
          </p>

          <p>
            Nossa equipe irá analisar sua mensagem e retornaremos o mais breve possível.
            Normalmente respondemos em até 48 horas úteis.
          </p>

          <p>
            Enquanto isso, convidamos você a conhecer mais sobre nossos trabalhos:
          </p>

          <a href="${process.env.NEXTAUTH_URL || 'http://localhost:3000'}" class="button">
            Visitar NInMa Hub
          </a>

          <p style="margin-top: 30px; padding-top: 30px; border-top: 1px solid #e5e7eb;">
            <strong>Equipe NInMa Hub</strong><br>
            Hub de Inovação em Saúde Materno Infantil<br>
            Universidade Franciscana
          </p>
        </div>

        <div class="footer">
          <p style="margin: 0;">
            © ${new Date().getFullYear()} NInMa Hub - Universidade Franciscana<br>
            Rua dos Andradas, 1614 - Santa Maria, RS
          </p>
        </div>
      </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: `"NInMa Hub" <${process.env.SMTP_FROM || 'noreply@ninmahub.com'}>`,
      to,
      subject: 'Mensagem Recebida - NInMa Hub',
      html: emailHtml,
    })

    return { success: true }
  } catch (error) {
    console.error('Erro ao enviar email de confirmação:', error)
    // Não lança erro para não bloquear o fluxo principal
    return { success: false }
  }
}
