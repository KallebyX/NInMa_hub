import { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, BookOpen, Users, FileText, Award, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Pós-Graduação',
  description:
    'Conheça o Programa de Pós-Graduação em Saúde Materno Infantil da Universidade Franciscana.',
}

export default function PosGraduacaoPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
            <GraduationCap className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
          <h1 className="heading-1 mb-6">Pós-Graduação em Saúde Materno Infantil</h1>
          <p className="body-large text-white/90 mb-8">
            Formamos pesquisadores e profissionais de excelência comprometidos com a inovação
            e a transformação da saúde materno-infantil no Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pos-graduacao/processo-seletivo">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Processo Seletivo
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Sobre o Programa */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-6 text-center">Sobre o Programa</h2>
          <div className="prose prose-lg max-w-none">
            <p className="body-large text-gray-600 mb-6">
              O Programa de Pós-Graduação em Saúde Materno Infantil da Universidade Franciscana
              é um programa de mestrado e doutorado que tem como objetivo formar pesquisadores
              e profissionais de alto nível para atuar na área de saúde materno-infantil.
            </p>
            <p className="body-large text-gray-600 mb-6">
              Nosso programa se destaca pela excelência na formação acadêmica, pela produção
              científica de impacto e pelo compromisso com a inovação e a transferência de
              conhecimento para a sociedade. Contamos com uma equipe de professores altamente
              qualificados e com infraestrutura de ponta para o desenvolvimento de pesquisas.
            </p>
            <p className="body-large text-gray-600">
              Buscamos alunos comprometidos, críticos e engajados com a transformação da
              realidade da saúde materno-infantil no Brasil e no mundo.
            </p>
          </div>
        </div>
      </Section>

      {/* Níveis do Programa */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Níveis do Programa</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Oferecemos formação em dois níveis de pós-graduação stricto sensu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card hover>
            <CardContent className="pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <GraduationCap className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-4">Mestrado</h3>
              <p className="body-normal text-gray-600 mb-4">
                Formação de mestres capacitados para desenvolver pesquisas aplicadas e
                contribuir para o avanço do conhecimento na área de saúde materno-infantil.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Duração: 24 meses</li>
                <li>• Modalidade: Presencial</li>
                <li>• Titulação: Mestre em Saúde Materno Infantil</li>
              </ul>
            </CardContent>
          </Card>

          <Card hover>
            <CardContent className="pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-6">
                <Award className="w-8 h-8 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="heading-4 text-gray-900 mb-4">Doutorado</h3>
              <p className="body-normal text-gray-600 mb-4">
                Formação de doutores com autonomia para conduzir pesquisas originais e
                inovadoras que contribuam significativamente para a área.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Duração: 48 meses</li>
                <li>• Modalidade: Presencial</li>
                <li>• Titulação: Doutor em Saúde Materno Infantil</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Navegação Rápida */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Conheça Mais</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Explore as diferentes áreas do nosso programa de pós-graduação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/pos-graduacao/linhas-de-pesquisa" className="group">
            <Card hover className="h-full transition-all group-hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors">
                  <BookOpen className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="heading-5 text-gray-900 mb-2">Linhas de Pesquisa</h3>
                <p className="body-small text-gray-600 mb-3">
                  Conheça as linhas de pesquisa e os temas de estudo do programa.
                </p>
                <div className="flex items-center justify-center text-primary text-sm font-semibold">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/pos-graduacao/corpo-docente" className="group">
            <Card hover className="h-full transition-all group-hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary-100 rounded-full mb-4 group-hover:bg-secondary-200 transition-colors">
                  <Users className="w-7 h-7 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="heading-5 text-gray-900 mb-2">Corpo Docente</h3>
                <p className="body-small text-gray-600 mb-3">
                  Conheça nossos professores e suas áreas de especialização.
                </p>
                <div className="flex items-center justify-center text-primary text-sm font-semibold">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/pos-graduacao/processo-seletivo" className="group">
            <Card hover className="h-full transition-all group-hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-100 rounded-full mb-4 group-hover:bg-accent-200 transition-colors">
                  <FileText className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="heading-5 text-gray-900 mb-2">Processo Seletivo</h3>
                <p className="body-small text-gray-600 mb-3">
                  Veja como se candidatar e os requisitos para ingresso.
                </p>
                <div className="flex items-center justify-center text-primary text-sm font-semibold">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/pos-graduacao/alunos-egressos" className="group">
            <Card hover className="h-full transition-all group-hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors">
                  <GraduationCap className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="heading-5 text-gray-900 mb-2">Alunos e Egressos</h3>
                <p className="body-small text-gray-600 mb-3">
                  Veja depoimentos e projetos dos nossos alunos.
                </p>
                <div className="flex items-center justify-center text-primary text-sm font-semibold">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Pronto para se juntar a nós?</h2>
          <p className="body-large text-white/90 mb-8">
            Candidate-se ao nosso programa e faça parte de uma comunidade comprometida com a
            excelência em pesquisa e inovação na saúde materno-infantil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pos-graduacao/processo-seletivo">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Processo Seletivo
              </Button>
            </Link>
            <Link href="/contato">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Tirar Dúvidas
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
