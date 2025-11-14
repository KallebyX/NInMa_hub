import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Calendar, CheckCircle2, AlertCircle, Download, ExternalLink } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Processo Seletivo - Pós-Graduação',
  description:
    'Informações sobre o processo seletivo do Programa de Pós-Graduação em Saúde Materno Infantil.',
}

const etapasSelecao = [
  {
    numero: 1,
    titulo: 'Inscrição',
    descricao: 'Submissão do formulário de inscrição e documentação exigida através da plataforma online.',
    icon: FileText,
  },
  {
    numero: 2,
    titulo: 'Análise de Currículo',
    descricao: 'Avaliação do currículo Lattes e da produção acadêmica dos candidatos.',
    icon: CheckCircle2,
  },
  {
    numero: 3,
    titulo: 'Prova Escrita',
    descricao: 'Prova objetiva e dissertativa sobre temas relacionados à saúde materno-infantil.',
    icon: FileText,
  },
  {
    numero: 4,
    titulo: 'Análise do Projeto',
    descricao: 'Avaliação do projeto de pesquisa proposto pelo candidato.',
    icon: FileText,
  },
  {
    numero: 5,
    titulo: 'Entrevista',
    descricao: 'Entrevista presencial ou por videoconferência com a banca examinadora.',
    icon: CheckCircle2,
  },
]

const requisitos = {
  mestrado: [
    'Diploma de graduação reconhecido pelo MEC',
    'Currículo Lattes atualizado',
    'Projeto de pesquisa alinhado às linhas do programa',
    'Carta de intenção',
    'Duas cartas de recomendação',
    'Certificado de proficiência em língua estrangeira (inglês ou espanhol)',
    'Documentos pessoais (RG, CPF, comprovante de residência)',
  ],
  doutorado: [
    'Diploma de mestrado reconhecido pelo MEC',
    'Currículo Lattes atualizado com produção científica',
    'Projeto de pesquisa original e inovador',
    'Carta de intenção detalhada',
    'Duas cartas de recomendação de doutores',
    'Certificado de proficiência em língua estrangeira (inglês)',
    'Comprovação de experiência em pesquisa',
    'Documentos pessoais (RG, CPF, comprovante de residência)',
  ],
}

export default function ProcessoSeletivoPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
            <FileText className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
          <h1 className="heading-1 mb-6">Processo Seletivo</h1>
          <p className="body-large text-white/90 mb-8">
            Confira as informações sobre o processo seletivo, requisitos e prazos para
            candidatura ao nosso programa de pós-graduação.
          </p>
          <Badge variant="success" className="text-base px-4 py-2">
            Inscrições: Consultar edital vigente
          </Badge>
        </div>
      </Section>

      {/* Informações Importantes */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="heading-5 text-blue-900 mb-2">Informação Importante</h3>
                <p className="body-normal text-blue-800">
                  O processo seletivo é realizado anualmente. Fique atento às datas de
                  abertura das inscrições e aos editais publicados no site oficial da
                  Universidade Franciscana. Entre em contato conosco para mais informações
                  sobre o próximo processo seletivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Etapas do Processo Seletivo */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Etapas do Processo Seletivo</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            O processo seletivo é composto por cinco etapas eliminatórias e classificatórias.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {etapasSelecao.map((etapa) => {
              const Icon = etapa.icon
              return (
                <Card key={etapa.numero} hover>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{etapa.numero}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <h3 className="heading-5 text-gray-900">{etapa.titulo}</h3>
                        </div>
                        <p className="body-normal text-gray-600">{etapa.descricao}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Requisitos */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Requisitos e Documentação</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Veja a documentação necessária para se candidatar ao mestrado ou doutorado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mestrado */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-4 text-gray-900">Mestrado</h3>
              </div>
              <ul className="space-y-3">
                {requisitos.mestrado.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="body-normal text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Doutorado */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="heading-4 text-gray-900">Doutorado</h3>
              </div>
              <ul className="space-y-3">
                {requisitos.doutorado.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="body-normal text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Calendário e Editais */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-gray-900 mb-4">Calendário e Editais</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Acompanhe os prazos e baixe os documentos necessários.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hover>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="heading-5 text-gray-900">Cronograma</h3>
                </div>
                <p className="body-normal text-gray-600 mb-4">
                  Consulte o cronograma detalhado com todas as datas importantes do processo
                  seletivo.
                </p>
                <Button variant="outline" size="sm" disabled>
                  <Calendar className="w-4 h-4 mr-2" />
                  Em breve
                </Button>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Download className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="heading-5 text-gray-900">Edital</h3>
                </div>
                <p className="body-normal text-gray-600 mb-4">
                  Baixe o edital completo com todas as informações sobre o processo seletivo.
                </p>
                <Button variant="outline" size="sm" disabled>
                  <Download className="w-4 h-4 mr-2" />
                  Em breve
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Dicas para Candidatos */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-8 text-center">Dicas para Candidatos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Conheça as linhas de pesquisa',
                description:
                  'Familiarize-se com as linhas de pesquisa do programa e identifique aquela que mais se alinha aos seus interesses.',
              },
              {
                title: 'Entre em contato com professores',
                description:
                  'Antes de se candidatar, converse com possíveis orientadores sobre seu projeto de pesquisa.',
              },
              {
                title: 'Prepare um projeto sólido',
                description:
                  'Dedique tempo para elaborar um projeto de pesquisa bem fundamentado e viável.',
              },
              {
                title: 'Atualize seu Lattes',
                description:
                  'Mantenha seu currículo Lattes atualizado com todas as suas atividades acadêmicas e profissionais.',
              },
              {
                title: 'Estude para a prova',
                description:
                  'Revise conceitos fundamentais de saúde materno-infantil e metodologia científica.',
              },
              {
                title: 'Organize a documentação',
                description:
                  'Reúna todos os documentos exigidos com antecedência para evitar problemas de última hora.',
              },
            ].map((dica, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="heading-5 text-gray-900 mb-2">{dica.title}</h3>
                  <p className="body-normal text-gray-600">{dica.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Ainda tem dúvidas?</h2>
          <p className="body-large text-white/90 mb-8">
            Entre em contato conosco para esclarecer qualquer dúvida sobre o processo seletivo
            ou sobre o programa de pós-graduação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Entre em Contato
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver FAQ
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
