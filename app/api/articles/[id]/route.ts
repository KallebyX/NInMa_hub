import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateSlug } from '@/lib/utils'

// GET - Buscar artigo por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: params.id },
    })

    if (!article) {
      return NextResponse.json(
        { error: 'Artigo não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(article)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar artigo' },
      { status: 500 }
    )
  }
}

// PUT - Atualizar artigo
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const data = await request.json()
    const slug = data.title ? generateSlug(data.title) : undefined

    const updateData: any = {
      ...data,
      authors: data.authors || [],
      tags: data.tags || [],
    }

    if (slug) updateData.slug = slug
    if (data.year) updateData.year = parseInt(data.year)

    const article = await prisma.article.update({
      where: { id: params.id },
      data: updateData,
    })

    return NextResponse.json(article)
  } catch (error) {
    console.error('Erro ao atualizar artigo:', error)
    return NextResponse.json(
      { error: 'Erro ao atualizar artigo' },
      { status: 500 }
    )
  }
}

// DELETE - Deletar artigo
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    await prisma.article.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: 'Artigo deletado com sucesso' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao deletar artigo' },
      { status: 500 }
    )
  }
}
