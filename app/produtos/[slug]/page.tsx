import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Share2, Download } from 'lucide-react'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'
import { prisma } from '@/lib/prisma'

interface ProductPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug, published: true },
  })

  if (!product) {
    return {
      title: 'Produto não encontrado',
    }
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.image ? [product.image] : [],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug, published: true },
  })

  if (!product) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <Section background="gray" noPadding className="py-6">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
            Início
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            href="/produtos"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Produtos
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{product.title}</span>
        </div>
      </Section>

      {/* Header */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-4"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Voltar para Produtos
              </Link>

              {product.featured && (
                <Badge variant="accent" size="md" className="mb-4">
                  Em Destaque
                </Badge>
              )}

              <h1 className="heading-1 text-gray-900 mb-4">{product.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                {product.category && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" aria-hidden="true" />
                    <span>{product.category}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>{formatDate(product.publishedAt)}</span>
                </div>
              </div>

              <p className="body-large text-gray-700 mb-8">{product.description}</p>
            </div>

            {/* Image */}
            {product.image && (
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: product.content }}
            />

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="pt-8 border-t">
                <h3 className="heading-5 text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" size="md">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="pt-8 border-t">
              <h3 className="heading-5 text-gray-900 mb-4">Compartilhar</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" aria-hidden="true" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Info Card */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Categoria</h3>
                    <Badge variant="primary" size="md">
                      {product.category || 'Geral'}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Data de Publicação
                    </h3>
                    <p className="text-sm text-gray-600">
                      {formatDate(product.publishedAt)}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Última Atualização
                    </h3>
                    <p className="text-sm text-gray-600">{formatDate(product.updatedAt)}</p>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-primary-50 border-primary-100">
                <CardContent className="pt-6">
                  <h3 className="heading-5 text-gray-900 mb-3">
                    Interessado neste produto?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Entre em contato para saber mais sobre este produto e como ele pode
                    ajudar seu projeto.
                  </p>
                  <Link href="/contato">
                    <Button variant="primary" size="md" fullWidth>
                      Entre em Contato
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Related Products */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="heading-5 text-gray-900 mb-4">Produtos Relacionados</h3>
                  <Link
                    href="/produtos"
                    className="text-sm text-primary hover:underline"
                  >
                    Ver todos os produtos →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
