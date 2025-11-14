import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, AlertCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

interface BlogPostPageProps {
  params: { slug: string }
}

// Mock data - substituir com dados reais do banco posteriormente
const mockPosts: Record<string, any> = {
  '5-mitos-sobre-parto': {
    slug: '5-mitos-sobre-parto',
    titulo: '5 Mitos sobre o Parto que Você Precisa Conhecer',
    categoria: 'Parto',
    dataPublicacao: '2024-01-15',
    tempoLeitura: '8 min',
    autor: 'Dra. Ana Maria Santos',
    imagem: null,
    conteudo: `
      <p>O parto é um dos momentos mais importantes na vida de uma mulher, mas também é cercado de mitos e informações equivocadas que podem gerar medo e ansiedade desnecessários. Neste artigo, desmistificamos 5 crenças comuns sobre o parto.</p>

      <h2>1. "Parto normal é sempre muito doloroso"</h2>
      <p>Embora o parto envolva contrações e desconforto, a experiência de dor varia muito de mulher para mulher. Existem diversas técnicas de alívio da dor não farmacológicas (como exercícios na bola, massagens, banho quente) e farmacológicas (como a analgesia peridural) que podem ser utilizadas. Além disso, o preparo físico e emocional durante a gestação pode ajudar significativamente.</p>

      <h2>2. "Cesárea é mais segura que parto normal"</h2>
      <p>A Organização Mundial da Saúde (OMS) recomenda que apenas 10-15% dos partos sejam cesarianas, reservadas para casos com indicação médica específica. O parto normal, quando possível, apresenta recuperação mais rápida, menor risco de infecções e complicações futuras. A cesárea é uma cirurgia e, como tal, envolve riscos que devem ser considerados.</p>

      <h2>3. "Você não pode comer durante o trabalho de parto"</h2>
      <p>Estudos recentes mostram que mulheres de baixo risco podem se alimentar levemente durante o trabalho de parto. Alimentos leves e de fácil digestão podem fornecer energia importante para o processo. Sempre converse com sua equipe médica sobre as políticas do local onde você vai parir.</p>

      <h2>4. "O bebê precisa nascer exatamente com 40 semanas"</h2>
      <p>A gestação a termo vai de 37 a 42 semanas. Cada bebê tem seu próprio ritmo de desenvolvimento. Agendar cesáreas eletivas antes de 39 semanas, sem indicação médica, pode trazer riscos para o bebê, como problemas respiratórios.</p>

      <h2>5. "Depois da cesárea, todos os outros partos serão cesáreas"</h2>
      <p>Muitas mulheres podem ter parto normal após uma cesárea (VBAC - Vaginal Birth After Cesarean). A possibilidade depende de vários fatores, incluindo o motivo da cesárea anterior e o tipo de incisão uterina. Converse com seu médico sobre suas opções.</p>

      <h2>Conclusão</h2>
      <p>Informação de qualidade é fundamental para uma experiência de parto positiva. Sempre busque fontes confiáveis e converse abertamente com sua equipe de saúde sobre suas dúvidas e preferências.</p>
    `,
    tags: ['Parto', 'Gestação', 'Mitos', 'Saúde da Mulher'],
    postRelacionados: [
      { titulo: 'Parto Humanizado: O que é e como funciona', slug: 'parto-humanizado' },
      { titulo: 'Preparação para o Parto', slug: 'preparacao-parto' },
    ],
  },
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = mockPosts[params.slug]

  if (!post) {
    return {
      title: 'Post não encontrado',
    }
  }

  return {
    title: `${post.titulo} - NInMa Explica`,
    description: post.conteudo.substring(0, 160).replace(/<[^>]*>/g, ''),
    openGraph: {
      title: post.titulo,
      description: post.conteudo.substring(0, 160).replace(/<[^>]*>/g, ''),
      images: post.imagem ? [post.imagem] : [],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = mockPosts[params.slug]

  if (!post) {
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
          <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
            Blog
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium line-clamp-1">{post.titulo}</span>
        </div>
      </Section>

      {/* Header */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-4"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Voltar para o Blog
              </Link>

              <Badge variant="secondary" size="md" className="mb-4">
                {post.categoria}
              </Badge>

              <h1 className="heading-1 text-gray-900 mb-6">{post.titulo}</h1>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>{post.autor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {new Date(post.dataPublicacao).toLocaleDateString('pt-BR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>{post.tempoLeitura} de leitura</span>
                </div>
              </div>
            </div>

            {/* Image */}
            {post.imagem && (
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={post.imagem} alt={post.titulo} className="w-full h-auto" />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.conteudo }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-8 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-gray-600" />
                  <h3 className="heading-5 text-gray-900">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline" size="md">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Aviso */}
            <div className="pt-8 border-t">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="heading-6 text-amber-900 mb-2">Aviso Importante</h3>
                    <p className="body-small text-amber-800">
                      Este conteúdo tem caráter educativo e informativo. As informações
                      apresentadas não substituem a consulta com profissionais de saúde
                      qualificados. Sempre procure orientação médica para questões relacionadas
                      à sua saúde ou à saúde do seu bebê.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="pt-8 border-t">
              <div className="flex items-center justify-between">
                <h3 className="heading-5 text-gray-900">Compartilhe este artigo</h3>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Author Card */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="heading-5 text-gray-900 mb-4">Sobre o Autor</h3>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{post.autor}</h4>
                      <p className="text-sm text-gray-600">
                        Pesquisadora do NInMa Hub especializada em saúde materno-infantil.
                      </p>
                    </div>
                  </div>
                  <Link href="/pos-graduacao/corpo-docente">
                    <Button variant="outline" size="sm" fullWidth>
                      Ver Perfil Completo
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {post.postRelacionados && post.postRelacionados.length > 0 && (
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="heading-5 text-gray-900 mb-4">Posts Relacionados</h3>
                    <div className="space-y-3">
                      {post.postRelacionados.map((related: any, index: number) => (
                        <Link
                          key={index}
                          href={`/blog/${related.slug}`}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700 hover:text-primary transition-colors">
                              {related.titulo}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link href="/blog" className="block mt-4">
                      <Button variant="outline" size="sm" fullWidth>
                        Ver Todos os Posts
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}

              {/* CTA Card */}
              <Card className="bg-primary-50 border-primary-100">
                <CardContent className="pt-6">
                  <h3 className="heading-5 text-gray-900 mb-3">Tem dúvidas?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Entre em contato conosco ou consulte nosso FAQ para mais informações sobre
                    saúde materno-infantil.
                  </p>
                  <div className="space-y-2">
                    <Link href="/faq">
                      <Button variant="primary" size="sm" fullWidth>
                        Ver FAQ
                      </Button>
                    </Link>
                    <Link href="/contato">
                      <Button variant="outline" size="sm" fullWidth>
                        Fale Conosco
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-secondary-50 border-secondary-100">
                <CardContent className="pt-6">
                  <h3 className="heading-5 text-gray-900 mb-3">Não perca nenhum post!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Assine nossa newsletter e receba conteúdo educativo sobre saúde
                    materno-infantil.
                  </p>
                  <Button variant="secondary" size="sm" fullWidth disabled>
                    Em breve
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
