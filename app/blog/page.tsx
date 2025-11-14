import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Calendar, Clock, ArrowRight, Heart, Baby, AlertCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Blog - NInMa Explica',
  description:
    'Artigos educativos sobre saúde materno-infantil em linguagem acessível para o público geral.',
}

// Mock data - substituir com dados reais do banco posteriormente
const postsDestaque = [
  {
    id: 1,
    slug: '5-mitos-sobre-parto',
    titulo: '5 Mitos sobre o Parto que Você Precisa Conhecer',
    resumo:
      'Desmistificamos as principais crenças equivocadas sobre o parto e apresentamos evidências científicas de forma clara e acessível.',
    categoria: 'Parto',
    dataPublicacao: '2024-01-15',
    tempoLeitura: '8 min',
    imagem: null,
    autor: 'Dra. Ana Maria Santos',
  },
  {
    id: 2,
    slug: 'primeiros-1000-dias',
    titulo: 'A Importância dos Primeiros 1000 Dias de Vida',
    resumo:
      'Entenda por que os primeiros mil dias, da gestação aos dois anos de idade, são fundamentais para o desenvolvimento do bebê.',
    categoria: 'Desenvolvimento',
    dataPublicacao: '2024-01-10',
    tempoLeitura: '10 min',
    imagem: null,
    autor: 'Dr. Carlos Eduardo Lima',
  },
  {
    id: 3,
    slug: 'amamentacao-guia-pratico',
    titulo: 'Amamentação: Um Guia Prático para Mães de Primeira Viagem',
    resumo:
      'Dicas práticas e baseadas em evidências para iniciar e manter o aleitamento materno com sucesso.',
    categoria: 'Amamentação',
    dataPublicacao: '2024-01-05',
    tempoLeitura: '12 min',
    imagem: null,
    autor: 'Profa. Dra. Juliana Alves',
  },
]

const postsRecentes = [
  {
    id: 4,
    slug: 'tecnologia-monitora-gestacao',
    titulo: 'Como a Tecnologia Pode Ajudar no Monitoramento da Gestação',
    resumo:
      'Conheça aplicativos e dispositivos que auxiliam gestantes a acompanhar sua saúde e a do bebê.',
    categoria: 'Tecnologia',
    dataPublicacao: '2023-12-28',
    tempoLeitura: '6 min',
    autor: 'Profa. Dra. Beatriz Ferreira',
  },
  {
    id: 5,
    slug: 'saude-mental-materna',
    titulo: 'Saúde Mental Materna: Sinais de Alerta e Quando Buscar Ajuda',
    resumo:
      'Entenda os sintomas de depressão pós-parto e ansiedade materna, e saiba quando procurar apoio profissional.',
    categoria: 'Saúde Mental',
    dataPublicacao: '2023-12-20',
    tempoLeitura: '9 min',
    autor: 'Profa. Dra. Juliana Alves',
  },
  {
    id: 6,
    slug: 'introducao-alimentar',
    titulo: 'Introdução Alimentar: Quando e Como Começar',
    resumo:
      'Tudo o que você precisa saber sobre a introdução de alimentos sólidos na dieta do bebê.',
    categoria: 'Nutrição',
    dataPublicacao: '2023-12-15',
    tempoLeitura: '11 min',
    autor: 'Prof. Dr. Fernando Santos',
  },
  {
    id: 7,
    slug: 'prematuridade-cuidados',
    titulo: 'Bebês Prematuros: Cuidados Especiais e Desenvolvimento',
    resumo:
      'Informações essenciais para pais de bebês prematuros sobre cuidados e acompanhamento do desenvolvimento.',
    categoria: 'Desenvolvimento',
    dataPublicacao: '2023-12-10',
    tempoLeitura: '10 min',
    autor: 'Dr. Carlos Eduardo Lima',
  },
  {
    id: 8,
    slug: 'vacinas-bebe',
    titulo: 'Calendário de Vacinação: Protegendo Seu Bebê',
    resumo:
      'Guia completo sobre as vacinas essenciais para bebês e crianças, com informações sobre quando e por que vacinar.',
    categoria: 'Prevenção',
    dataPublicacao: '2023-12-05',
    tempoLeitura: '7 min',
    autor: 'Dr. Carlos Eduardo Lima',
  },
  {
    id: 9,
    slug: 'gestacao-saudavel',
    titulo: 'Dicas para uma Gestação Saudável',
    resumo:
      'Orientações sobre alimentação, exercícios e cuidados durante a gestação para garantir a saúde da mãe e do bebê.',
    categoria: 'Gestação',
    dataPublicacao: '2023-12-01',
    tempoLeitura: '8 min',
    autor: 'Dra. Ana Maria Santos',
  },
]

const categorias = [
  'Todos',
  'Gestação',
  'Parto',
  'Amamentação',
  'Desenvolvimento',
  'Nutrição',
  'Saúde Mental',
  'Tecnologia',
  'Prevenção',
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
          <h1 className="heading-1 mb-6">NInMa Explica</h1>
          <p className="body-large text-white/90">
            Conteúdo educativo sobre saúde materno-infantil em linguagem clara e acessível,
            baseado em evidências científicas e desenvolvido por nossa equipe de especialistas.
          </p>
        </div>
      </Section>

      {/* Categorias */}
      <Section>
        <div className="text-center mb-8">
          <h2 className="heading-4 text-gray-900 mb-6">Navegue por Categoria</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {categorias.map((categoria) => (
              <Badge
                key={categoria}
                variant={categoria === 'Todos' ? 'primary' : 'outline'}
                className="cursor-pointer hover:bg-primary-100 transition-colors px-4 py-2"
              >
                {categoria}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* Posts em Destaque */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Posts em Destaque</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Artigos selecionados com informações essenciais para pais, gestantes e cuidadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsDestaque.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card hover className="h-full transition-all group-hover:shadow-xl">
                <CardContent className="pt-0">
                  {/* Imagem placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-300 rounded-t-lg -mt-0 mb-4 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-primary-600" aria-hidden="true" />
                  </div>

                  {/* Categoria */}
                  <Badge variant="secondary" className="mb-3">
                    {post.categoria}
                  </Badge>

                  {/* Título */}
                  <h3 className="heading-5 text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.titulo}
                  </h3>

                  {/* Resumo */}
                  <p className="body-normal text-gray-600 mb-4 line-clamp-3">{post.resumo}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.dataPublicacao).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.tempoLeitura}</span>
                    </div>
                  </div>

                  {/* Autor */}
                  <div className="border-t pt-4">
                    <p className="body-small text-gray-600">Por {post.autor}</p>
                  </div>

                  {/* Link */}
                  <div className="flex items-center text-primary text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                    Ler artigo <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Posts Recentes */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Posts Recentes</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Confira nossos artigos mais recentes sobre saúde materno-infantil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {postsRecentes.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <Card hover className="h-full transition-all group-hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <BookOpen className="w-10 h-10 text-secondary-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {post.categoria}
                      </Badge>
                      <h3 className="heading-6 text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {post.titulo}
                      </h3>
                      <p className="body-small text-gray-600 mb-3 line-clamp-2">{post.resumo}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(post.dataPublicacao).toLocaleDateString('pt-BR', {
                              day: '2-digit',
                              month: 'short',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.tempoLeitura}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" disabled>
            Carregar Mais Posts
          </Button>
        </div>
      </Section>

      {/* Aviso Importante */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="heading-5 text-amber-900 mb-2">Aviso Importante</h3>
                <p className="body-normal text-amber-800">
                  O conteúdo deste blog tem caráter educativo e informativo. As informações
                  apresentadas não substituem a consulta com profissionais de saúde
                  qualificados. Sempre procure orientação médica para questões relacionadas à
                  sua saúde ou à saúde do seu bebê.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Quer saber mais?</h2>
          <p className="body-large text-white/90 mb-8">
            Confira nossa seção de perguntas frequentes ou entre em contato conosco para
            esclarecer suas dúvidas sobre saúde materno-infantil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver FAQ
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
