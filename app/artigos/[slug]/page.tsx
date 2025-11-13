import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Users, BookOpen, ExternalLink, FileDown } from 'lucide-react'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'
import { prisma } from '@/lib/prisma'

interface ArticlePageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug, published: true },
  })

  if (!article) {
    return {
      title: 'Artigo não encontrado',
    }
  }

  return {
    title: article.title,
    description: article.abstract,
    openGraph: {
      title: article.title,
      description: article.abstract,
      images: article.image ? [article.image] : [],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug, published: true },
  })

  if (!article) {
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
            href="/artigos"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Artigos
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium line-clamp-1">{article.title}</span>
        </div>
      </Section>

      {/* Header */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Link
                href="/artigos"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-4"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Voltar para Artigos
              </Link>

              {article.featured && (
                <Badge variant="accent" size="md" className="mb-4">
                  Artigo em Destaque
                </Badge>
              )}

              <h1 className="heading-1 text-gray-900 mb-6">{article.title}</h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" aria-hidden="true" />
                  <span>{article.authors.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>{article.year}</span>
                </div>
                {article.journal && (
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                    <span>{article.journal}</span>
                  </div>
                )}
              </div>

              {/* Abstract */}
              <div className="mb-8">
                <h2 className="heading-4 text-gray-900 mb-4">Resumo</h2>
                <p className="body-large text-gray-700 leading-relaxed">
                  {article.abstract}
                </p>
              </div>
            </div>

            {/* Image */}
            {article.image && (
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Content */}
            <div>
              <h2 className="heading-4 text-gray-900 mb-6">Conteúdo Completo</h2>
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="pt-8 border-t">
                <h3 className="heading-5 text-gray-900 mb-4">Palavras-chave</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" size="md">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Citation */}
            <div className="pt-8 border-t">
              <h3 className="heading-5 text-gray-900 mb-4">Como Citar</h3>
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-700 font-mono">
                    {article.authors.join(', ')} ({article.year}). {article.title}.
                    {article.journal && ` ${article.journal}.`}
                    {article.doi && ` DOI: ${article.doi}`}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Actions */}
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-4">Acesso ao Artigo</h3>

                  {article.pdfUrl && (
                    <Button variant="primary" size="md" fullWidth asChild>
                      <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <FileDown className="w-4 h-4 mr-2" aria-hidden="true" />
                        Download PDF
                      </a>
                    </Button>
                  )}

                  {article.doi && (
                    <Button variant="outline" size="md" fullWidth asChild>
                      <a
                        href={`https://doi.org/${article.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                        Ver no DOI
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ano de Publicação</h3>
                    <Badge variant="primary" size="md">
                      {article.year}
                    </Badge>
                  </div>

                  {article.journal && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Revista</h3>
                      <p className="text-sm text-gray-600">{article.journal}</p>
                    </div>
                  )}

                  {article.doi && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">DOI</h3>
                      <p className="text-sm text-gray-600 font-mono break-all">
                        {article.doi}
                      </p>
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Autores</h3>
                    <ul className="space-y-1">
                      {article.authors.map((author, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {author}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-secondary-50 border-secondary-100">
                <CardContent className="pt-6">
                  <h3 className="heading-5 text-gray-900 mb-3">
                    Dúvidas sobre o artigo?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Entre em contato com nossos pesquisadores para mais informações.
                  </p>
                  <Link href="/contato">
                    <Button variant="secondary" size="md" fullWidth>
                      Fale Conosco
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Related */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="heading-5 text-gray-900 mb-4">Mais Artigos</h3>
                  <Link
                    href="/artigos"
                    className="text-sm text-primary hover:underline"
                  >
                    Ver todos os artigos →
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
