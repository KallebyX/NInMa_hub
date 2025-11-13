import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateSlug } from '@/lib/utils'

// GET - Listar artigos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    const featured = searchParams.get('featured')
    const year = searchParams.get('year')

    const where: any = {}
    if (published !== null) where.published = published === 'true'
    if (featured !== null) where.featured = featured === 'true'
    if (year) where.year = parseInt(year)

    const articles = await prisma.article.findMany({
      where,
      orderBy: { publishedAt: 'desc' },
    })

    return NextResponse.json(articles)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar artigos' },
      { status: 500 }
    )
  }
}

// POST - Criar novo artigo
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const data = await request.json()
    const slug = generateSlug(data.title)

    const article = await prisma.article.create({
      data: {
        ...data,
        slug,
        authors: data.authors || [],
        tags: data.tags || [],
        year: parseInt(data.year),
      },
    })

    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    console.error('Erro ao criar artigo:', error)
    return NextResponse.json(
      { error: 'Erro ao criar artigo' },
      { status: 500 }
    )
  }
}
