import Link from 'next/link'
import { ArrowRight, FileText, Calendar, Users } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

// Mock data - será substituído por dados reais da API
const articles = [
  {
    id: 1,
    title: 'Impacto da Tecnologia no Cuidado Neonatal: Uma Revisão Sistemática',
    abstract:
      'Revisão sistemática sobre as principais tecnologias emergentes aplicadas ao cuidado neonatal e seus impactos mensuráveis.',
    authors: ['Silva, M.A.', 'Santos, J.P.', 'Oliveira, L.C.'],
    year: 2024,
    journal: 'Revista Brasileira de Saúde Materno Infantil',
    slug: 'impacto-tecnologia-cuidado-neonatal',
  },
  {
    id: 2,
    title: 'Estratégias de Promoção da Saúde Mental Materna no Pós-Parto',
    abstract:
      'Estudo longitudinal sobre intervenções eficazes para promoção da saúde mental materna durante o período pós-parto.',
    authors: ['Costa, A.B.', 'Ferreira, R.S.'],
    year: 2024,
    journal: 'Jornal de Pediatria',
    slug: 'estrategias-saude-mental-materna',
  },
  {
    id: 3,
    title: 'Inovações em Aleitamento Materno: Evidências e Práticas',
    abstract:
      'Análise das inovações recentes em práticas de aleitamento materno baseadas em evidências científicas.',
    authors: ['Rodrigues, P.M.', 'Lima, F.A.', 'Souza, K.L.'],
    year: 2023,
    journal: 'Cadernos de Saúde Pública',
    slug: 'inovacoes-aleitamento-materno',
  },
]

export default function ArticlesSection() {
  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="heading-2 text-gray-900 mb-4">Artigos Científicos</h2>
        <p className="body-large text-gray-600 max-w-2xl mx-auto">
          Pesquisas de qualidade que contribuem para o avanço do conhecimento científico.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articles.map((article, index) => (
          <Card
            key={article.id}
            hover
            className="flex flex-col animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <Badge variant="primary" size="sm">
                  {article.year}
                </Badge>
              </div>
              <CardTitle className="line-clamp-2">{article.title}</CardTitle>
              <CardDescription className="line-clamp-3">
                {article.abstract}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" aria-hidden="true" />
                <span className="line-clamp-1">{article.authors.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span className="line-clamp-1">{article.journal}</span>
              </div>
            </CardContent>

            <CardFooter className="mt-auto">
              <Link href={`/artigos/${article.slug}`} className="w-full">
                <Button variant="ghost" size="sm" fullWidth className="group">
                  Ler Artigo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/artigos">
          <Button variant="primary" size="lg">
            Ver Todos os Artigos
          </Button>
        </Link>
      </div>
    </Section>
  )
}
