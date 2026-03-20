import { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, Award, Quote, Briefcase, TrendingUp, Users } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Alunos e Egressos - Pós-Graduação',
  description:
    'Conheça nossos alunos, egressos e suas trajetórias profissionais após o programa.',
}

// Mock data - substituir com dados reais do banco
const depoimentos = [
  {
    nome: 'Dra. Maria Silva',
    titulo: 'Doutora em Saúde Materno Infantil',
    ano: '2022',
    foto: null,
    depoimento:
      'O programa me proporcionou não apenas conhecimento técnico, mas também uma rede de colaboração que continua ativa até hoje. Minha pesquisa sobre intervenções precoces resultou em um aplicativo que já é usado em várias maternidades.',
    atuacao: 'Professora Universitária',
  },
  {
    nome: 'Dr. João Santos',
    titulo: 'Mestre em Saúde Materno Infantil',
    ano: '2023',
    foto: null,
    depoimento:
      'A qualidade do corpo docente e a infraestrutura de pesquisa foram fundamentais para o desenvolvimento do meu projeto. Hoje atuo como coordenador de pesquisa em um hospital de referência.',
    atuacao: 'Coordenador de Pesquisa',
  },
  {
    nome: 'Dra. Ana Paula Costa',
    titulo: 'Doutora em Saúde Materno Infantil',
    ano: '2021',
    foto: null,
    depoimento:
      'O programa me desafiou a ir além do que imaginava ser capaz. As linhas de pesquisa interdisciplinares me permitiram desenvolver um projeto inovador que hoje é referência na área de tecnologias em saúde.',
    atuacao: 'Pesquisadora e Consultora',
  },
]

const estatisticas = [
  {
    numero: '95%',
    titulo: 'Taxa de Conclusão',
    descricao: 'dos alunos concluem o programa no prazo regular',
    icon: TrendingUp,
  },
  {
    numero: '87%',
    titulo: 'Empregabilidade',
    descricao: 'dos egressos atuam na área de formação',
    icon: Briefcase,
  },
  {
    numero: '120+',
    titulo: 'Publicações',
    descricao: 'artigos publicados por nossos alunos e egressos',
    icon: Award,
  },
  {
    numero: '45+',
    titulo: 'Egressos',
    descricao: 'mestres e doutores formados pelo programa',
    icon: GraduationCap,
  },
]

const areasAtuacao = [
  'Docência em Universidades',
  'Pesquisa em Instituições Públicas e Privadas',
  'Gestão em Saúde',
  'Consultoria Técnica',
  'Desenvolvimento de Tecnologias em Saúde',
  'Coordenação de Programas de Saúde Pública',
  'Assessoria em Políticas Públicas',
  'Atendimento Clínico Especializado',
]

export default function AlunosEgressosPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
            <GraduationCap className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
          <h1 className="heading-1 mb-6">Alunos e Egressos</h1>
          <p className="body-large text-white/90">
            Conheça as histórias de sucesso e as trajetórias profissionais dos nossos alunos e
            egressos que estão transformando a saúde materno-infantil no Brasil e no mundo.
          </p>
        </div>
      </Section>

      {/* Estatísticas */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Nossos Números</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Resultados que demonstram a excelência e o impacto do nosso programa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {estatisticas.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} hover>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.numero}</div>
                  <h3 className="heading-6 text-gray-900 mb-2">{stat.titulo}</h3>
                  <p className="body-small text-gray-600">{stat.descricao}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Depoimentos */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Depoimentos</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos egressos têm a dizer sobre sua experiência no programa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <Card key={index} hover className="h-full">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary-200 mb-4" aria-hidden="true" />
                <p className="body-normal text-gray-600 mb-6 italic">"{depoimento.depoimento}"</p>
                <div className="border-t pt-4">
                  <h3 className="heading-6 text-gray-900">{depoimento.nome}</h3>
                  <p className="body-small text-gray-600 mb-2">{depoimento.titulo}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary">Turma {depoimento.ano}</Badge>
                    <Badge variant="neutral">{depoimento.atuacao}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Áreas de Atuação */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Áreas de Atuação dos Egressos</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Nossos egressos atuam em diversas áreas relacionadas à saúde materno-infantil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {areasAtuacao.map((area, index) => (
              <Card key={index}>
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                    <span className="body-normal text-gray-700 font-medium">{area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Projetos em Destaque */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Projetos em Destaque</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos projetos desenvolvidos por nossos alunos durante o programa.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                titulo: 'Aplicativo para Monitoramento de Gestação de Alto Risco',
                autor: 'Dra. Maria Silva',
                ano: '2022',
                descricao:
                  'Desenvolvimento de um aplicativo móvel que permite o monitoramento remoto de gestantes de alto risco, facilitando a comunicação com equipes de saúde e reduzindo internações desnecessárias.',
              },
              {
                titulo: 'Protocolo de Intervenção Precoce em Prematuros',
                autor: 'Dr. João Santos',
                ano: '2023',
                descricao:
                  'Criação e validação de um protocolo de intervenção precoce para bebês prematuros, com foco no desenvolvimento neuropsicomotor e envolvimento familiar.',
              },
              {
                titulo: 'Tecnologia Assistiva para Mães com Deficiência Visual',
                autor: 'Dra. Ana Paula Costa',
                ano: '2021',
                descricao:
                  'Desenvolvimento de dispositivo assistivo que auxilia mães com deficiência visual no cuidado de seus bebês, promovendo autonomia e segurança.',
              },
            ].map((projeto, index) => (
              <Card key={index} hover>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="heading-5 text-gray-900 mb-2">{projeto.titulo}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{projeto.autor}</Badge>
                        <Badge variant="neutral">{projeto.ano}</Badge>
                      </div>
                      <p className="body-normal text-gray-600">{projeto.descricao}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Comunidade de Alumni */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Users className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>
          <h2 className="heading-2 text-gray-900 mb-6">Comunidade de Alumni</h2>
          <p className="body-large text-gray-600 mb-8">
            Mantemos uma comunidade ativa de egressos que continua colaborando em pesquisas,
            eventos e projetos. Nossos alumni são embaixadores do programa e contribuem
            ativamente para o desenvolvimento de novos alunos através de mentorias, palestras e
            colaborações acadêmicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button variant="primary" size="lg">
                Entre em Contato
              </Button>
            </Link>
            <Link href="/pos-graduacao">
              <Button variant="outline" size="lg">
                Sobre o Programa
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Faça parte dessa história!</h2>
          <p className="body-large text-white/90 mb-8">
            Junte-se a uma comunidade de pesquisadores comprometidos com a excelência e a
            transformação da saúde materno-infantil.
          </p>
          <Link href="/pos-graduacao/processo-seletivo">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Conheça o Processo Seletivo
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}
