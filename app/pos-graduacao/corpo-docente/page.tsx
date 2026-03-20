import { Metadata } from 'next'
import Link from 'next/link'
import { Users, Mail, ExternalLink, BookOpen, Award } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Corpo Docente - Pós-Graduação',
  description:
    'Conheça os professores do Programa de Pós-Graduação em Saúde Materno Infantil.',
}

// Mock data - substituir com dados reais do banco
const professores = [
  {
    nome: 'Profa. Dra. Ana Maria Santos',
    titulacao: 'Doutora em Saúde Materno Infantil',
    foto: null,
    email: 'ana.santos@ufn.edu.br',
    lattes: 'http://lattes.cnpq.br/exemplo',
    linha: 'Saúde da Mulher e do Recém-Nascido',
    descricao:
      'Pesquisadora com mais de 15 anos de experiência em saúde materna. Coordena projetos sobre parto humanizado e aleitamento materno.',
    especialidades: ['Obstetrícia', 'Aleitamento Materno', 'Parto Humanizado'],
  },
  {
    nome: 'Prof. Dr. Carlos Eduardo Lima',
    titulacao: 'Doutor em Pediatria',
    foto: null,
    email: 'carlos.lima@ufn.edu.br',
    lattes: 'http://lattes.cnpq.br/exemplo',
    linha: 'Crescimento e Desenvolvimento Infantil',
    descricao:
      'Especialista em desenvolvimento neuropsicomotor infantil. Desenvolve pesquisas sobre intervenções precoces em prematuros.',
    especialidades: ['Pediatria', 'Desenvolvimento Infantil', 'Prematuridade'],
  },
  {
    nome: 'Profa. Dra. Beatriz Costa Ferreira',
    titulacao: 'Doutora em Ciências da Saúde',
    foto: null,
    email: 'beatriz.ferreira@ufn.edu.br',
    lattes: 'http://lattes.cnpq.br/exemplo',
    linha: 'Tecnologias e Inovação em Saúde',
    descricao:
      'Coordenadora do NInMa Hub. Especialista em desenvolvimento de tecnologias em saúde e aplicativos móveis para saúde materno-infantil.',
    especialidades: ['Tecnologias em Saúde', 'Inovação', 'Aplicativos Móveis'],
  },
  {
    nome: 'Prof. Dr. Roberto Silva Mendes',
    titulacao: 'Doutor em Epidemiologia',
    foto: null,
    email: 'roberto.mendes@ufn.edu.br',
    lattes: 'http://lattes.cnpq.br/exemplo',
    linha: 'Epidemiologia e Saúde Coletiva',
    descricao:
      'Pesquisador com foco em determinantes sociais da saúde materno-infantil. Coordena estudos de coorte sobre saúde pública.',
    especialidades: ['Epidemiologia', 'Saúde Coletiva', 'Políticas Públicas'],
  },
  {
    nome: 'Profa. Dra. Juliana Alves Rodrigues',
    titulacao: 'Doutora em Enfermagem',
    foto: null,
    email: 'juliana.rodrigues@ufn.edu.br',
    lattes: 'http://lattes.cnpq.br/exemplo',
    linha: 'Saúde da Mulher e do Recém-Nascido',
    descricao:
      'Enfermeira obstetra e pesquisadora. Desenvolve projetos sobre cuidados neonatais e saúde mental materna.',
    especialidades: ['Enfermagem Obstétrica', 'Cuidados Neonatais', 'Saúde Mental'],
  },
  {
    nome: 'Prof. Dr. Fernando Oliveira Santos',
    titulacao: 'Doutor em Nutrição',
    foto: null,
    email: 'fernando.santos@ufn.edu.br',
    lattes: 'http://lattes.cnpq.br/exemplo',
    linha: 'Crescimento e Desenvolvimento Infantil',
    descricao:
      'Nutricionista e pesquisador especializado em nutrição infantil. Coordena estudos sobre aleitamento materno e introdução alimentar.',
    especialidades: ['Nutrição Infantil', 'Aleitamento Materno', 'Crescimento'],
  },
]

export default function CorpoDocentePage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
            <Users className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
          <h1 className="heading-1 mb-6">Corpo Docente</h1>
          <p className="body-large text-white/90">
            Conheça os professores do nosso programa: pesquisadores de excelência, comprometidos
            com a formação de mestres e doutores na área de saúde materno-infantil.
          </p>
        </div>
      </Section>

      {/* Introdução */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-gray-900 mb-6">Excelência e Expertise</h2>
          <p className="body-large text-gray-600 mb-8">
            Nosso corpo docente é composto por doutores altamente qualificados, com ampla
            experiência em pesquisa, ensino e orientação. Todos os professores são pesquisadores
            ativos, com publicações em periódicos nacionais e internacionais e participação em
            projetos de inovação e extensão.
          </p>
        </div>
      </Section>

      {/* Professores */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Nossos Professores</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Conheça os professores permanentes do programa e suas áreas de especialização.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professores.map((professor, index) => (
            <Card key={index} hover className="h-full">
              <CardContent className="pt-6">
                {/* Foto do Professor */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary-600" aria-hidden="true" />
                </div>

                {/* Nome e Titulação */}
                <div className="text-center mb-4">
                  <h3 className="heading-5 text-gray-900 mb-1">{professor.nome}</h3>
                  <p className="body-small text-gray-600 mb-3">{professor.titulacao}</p>
                  <Badge variant="secondary" className="mb-2">
                    {professor.linha}
                  </Badge>
                </div>

                {/* Descrição */}
                <p className="body-small text-gray-600 mb-4 text-center">
                  {professor.descricao}
                </p>

                {/* Especialidades */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {professor.especialidades.map((esp, i) => (
                      <Badge key={i} variant="neutral" className="text-xs">
                        {esp}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contatos */}
                <div className="border-t pt-4 space-y-2">
                  <a
                    href={`mailto:${professor.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-xs">{professor.email}</span>
                  </a>
                  <a
                    href={professor.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-primary hover:text-primary-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs">Currículo Lattes</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Critérios para Orientação */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Como Escolher um Orientador</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Antes de se candidatar ao programa, é importante identificar um professor cujas
              linhas de pesquisa estejam alinhadas com seus interesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: BookOpen,
                titulo: 'Analise a Produção Científica',
                descricao:
                  'Consulte o currículo Lattes do professor para conhecer suas publicações recentes e projetos em andamento.',
              },
              {
                icon: Users,
                titulo: 'Entre em Contato',
                descricao:
                  'Não hesite em enviar um e-mail para o professor com quem deseja trabalhar, apresentando seus interesses de pesquisa.',
              },
              {
                icon: Award,
                titulo: 'Verifique a Linha de Pesquisa',
                descricao:
                  'Certifique-se de que seu projeto está alinhado com a linha de pesquisa do professor orientador.',
              },
              {
                icon: ExternalLink,
                titulo: 'Conheça os Projetos do Grupo',
                descricao:
                  'Procure conhecer os projetos desenvolvidos pelo grupo de pesquisa do professor para entender a dinâmica de trabalho.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} hover>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="heading-6 text-gray-900 mb-2">{item.titulo}</h3>
                        <p className="body-small text-gray-600">{item.descricao}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Produção Científica */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Award className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>
          <h2 className="heading-2 text-gray-900 mb-6">Produção Científica</h2>
          <p className="body-large text-gray-600 mb-8">
            Nosso corpo docente possui uma sólida produção científica, com publicações em
            periódicos de alto impacto, participação em congressos nacionais e internacionais,
            e desenvolvimento de projetos de inovação tecnológica. Essa expertise é fundamental
            para a formação de pesquisadores de excelência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artigos">
              <Button variant="primary" size="lg">
                Ver Publicações
              </Button>
            </Link>
            <Link href="/produtos">
              <Button variant="outline" size="lg">
                Ver Produtos
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Interessado em ser orientado?</h2>
          <p className="body-large text-white/90 mb-8">
            Entre em contato com os professores para discutir possibilidades de orientação e
            conhecer mais sobre os projetos de pesquisa em andamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pos-graduacao/processo-seletivo">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Processo Seletivo
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
