import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar usuário administrador
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@ninmahub.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123'

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  })

  if (existingAdmin) {
    console.log('✅ Usuário administrador já existe')
  } else {
    const hashedPassword = await hash(adminPassword, 12)

    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Administrador',
        role: 'admin',
      },
    })

    console.log('✅ Usuário administrador criado com sucesso')
    console.log(`   Email: ${adminEmail}`)
    console.log(`   Senha: ${adminPassword}`)
  }

  // Criar dados de exemplo (opcional)
  console.log('\n📦 Criando dados de exemplo...')

  // Produtos de exemplo
  const productsData = [
    {
      title: 'Sistema de Monitoramento Neonatal Inteligente',
      slug: 'sistema-monitoramento-neonatal',
      description:
        'Plataforma integrada com IA para monitoramento em tempo real de sinais vitais.',
      content: 'Conteúdo completo do produto...',
      category: 'Tecnologia',
      featured: true,
      published: true,
      tags: ['tecnologia', 'IA', 'neonatal'],
    },
    {
      title: 'App Gestação Saudável',
      slug: 'app-gestacao-saudavel',
      description:
        'Aplicativo mobile para acompanhamento personalizado da gestação.',
      content: 'Conteúdo completo do produto...',
      category: 'Mobile',
      featured: true,
      published: true,
      tags: ['mobile', 'gestação', 'saúde'],
    },
  ]

  for (const product of productsData) {
    const exists = await prisma.product.findUnique({
      where: { slug: product.slug },
    })

    if (!exists) {
      await prisma.product.create({ data: product })
      console.log(`   ✓ Produto criado: ${product.title}`)
    }
  }

  // FAQ de exemplo
  const faqData = [
    {
      question: 'O que é o NInMa Hub?',
      answer:
        'O NInMa Hub é o Hub de Inovação em Saúde Materno Infantil do Programa de Pós-Graduação em Saúde Materno Infantil da Universidade Franciscana.',
      category: 'Geral',
      order: 1,
      published: true,
    },
    {
      question: 'Como posso colaborar com o NInMa Hub?',
      answer:
        'Entre em contato conosco através do formulário de contato ou email para discutir oportunidades de colaboração.',
      category: 'Colaboração',
      order: 2,
      published: true,
    },
  ]

  for (const faq of faqData) {
    const exists = await prisma.faq.findFirst({
      where: { question: faq.question },
    })

    if (!exists) {
      await prisma.faq.create({ data: faq })
      console.log(`   ✓ FAQ criada: ${faq.question}`)
    }
  }

  console.log('\n✅ Seed concluído com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro ao executar seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
