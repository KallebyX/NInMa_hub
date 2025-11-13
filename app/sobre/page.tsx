import { Metadata } from 'next'
import { Target, Eye, Heart, Users } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a história, missão e visão do NInMa Hub - Hub de Inovação em Saúde Materno Infantil.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6">Sobre o NInMa Hub</h1>
          <p className="body-large text-white/90">
            Somos um hub de inovação dedicado a transformar a saúde materno-infantil através
            da pesquisa, desenvolvimento de produtos e formação de profissionais qualificados.
          </p>
        </div>
      </Section>

      {/* Missão, Visão e Valores */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover className="text-center">
            <CardContent className="pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <h2 className="heading-4 text-gray-900 mb-4">Nossa Missão</h2>
              <p className="body-normal text-gray-600">
                Desenvolver e disseminar conhecimento científico e soluções inovadoras que
                melhorem a qualidade de vida de mães, bebês e suas famílias.
              </p>
            </CardContent>
          </Card>

          <Card hover className="text-center">
            <CardContent className="pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-6">
                <Eye className="w-8 h-8 text-secondary" aria-hidden="true" />
              </div>
              <h2 className="heading-4 text-gray-900 mb-4">Nossa Visão</h2>
              <p className="body-normal text-gray-600">
                Ser referência nacional e internacional em inovação e pesquisa aplicada à
                saúde materno-infantil.
              </p>
            </CardContent>
          </Card>

          <Card hover className="text-center">
            <CardContent className="pt-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h2 className="heading-4 text-gray-900 mb-4">Nossos Valores</h2>
              <p className="body-normal text-gray-600">
                Excelência científica, inovação, ética, colaboração e compromisso com o
                impacto social.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* História */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-6 text-center">Nossa História</h2>
          <div className="prose prose-lg max-w-none">
            <p className="body-large text-gray-600 mb-6">
              O NInMa Hub nasceu da visão de transformar a pesquisa acadêmica em soluções
              práticas que pudessem beneficiar diretamente a população. Fundado no âmbito do
              Programa de Pós-Graduação em Saúde Materno Infantil da Universidade
              Franciscana, o hub reúne pesquisadores, profissionais de saúde e estudantes em
              torno de um objetivo comum: melhorar os indicadores de saúde materno-infantil
              no Brasil.
            </p>
            <p className="body-large text-gray-600 mb-6">
              Desde sua criação, o hub tem se destacado pela produção científica de
              qualidade, desenvolvimento de produtos inovadores e pela formação de recursos
              humanos altamente qualificados. Nossa equipe multidisciplinar trabalha em
              projetos que vão desde o desenvolvimento de tecnologias assistivas até estudos
              epidemiológicos de grande escala.
            </p>
            <p className="body-large text-gray-600">
              Hoje, somos reconhecidos como um centro de referência em inovação e pesquisa,
              com parcerias nacionais e internacionais que amplificam nosso impacto e alcance.
            </p>
          </div>
        </div>
      </Section>

      {/* Áreas de Atuação */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Áreas de Atuação</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            Atuamos em múltiplas frentes para maximizar nosso impacto na saúde
            materno-infantil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Pesquisa Científica',
              description:
                'Desenvolvimento de pesquisas originais e de alto impacto em saúde materno-infantil.',
            },
            {
              title: 'Desenvolvimento de Produtos',
              description:
                'Criação de tecnologias, aplicativos e soluções inovadoras para o cuidado em saúde.',
            },
            {
              title: 'Formação Profissional',
              description:
                'Capacitação de mestres, doutores e profissionais especializados na área.',
            },
            {
              title: 'Extensão Comunitária',
              description:
                'Projetos que levam conhecimento e cuidado diretamente à comunidade.',
            },
            {
              title: 'Consultoria Técnica',
              description:
                'Assessoria especializada para instituições públicas e privadas.',
            },
            {
              title: 'Divulgação Científica',
              description:
                'Comunicação acessível da ciência para profissionais e público geral.',
            },
          ].map((area, index) => (
            <Card key={index} hover>
              <CardContent className="pt-6">
                <h3 className="heading-5 text-gray-900 mb-3">{area.title}</h3>
                <p className="body-small text-gray-600">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
