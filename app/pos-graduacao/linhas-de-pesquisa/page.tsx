import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ArrowRight, Microscope, Heart, Baby, Smartphone } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Linhas de Pesquisa - Pós-Graduação',
  description:
    'Conheça as linhas de pesquisa do Programa de Pós-Graduação em Saúde Materno Infantil.',
}

const linhasPesquisa = [
  {
    title: 'Saúde da Mulher e do Recém-Nascido',
    icon: Heart,
    color: 'primary',
    description:
      'Estudos sobre gestação, parto, puerpério e cuidados neonatais, abrangendo aspectos clínicos, epidemiológicos e de qualidade de vida.',
    temas: [
      'Assistência pré-natal e parto humanizado',
      'Complicações gestacionais e neonatais',
      'Aleitamento materno e nutrição infantil',
      'Saúde mental materna e vínculo mãe-bebê',
      'Prematuridade e cuidados intensivos neonatais',
    ],
  },
  {
    title: 'Crescimento e Desenvolvimento Infantil',
    icon: Baby,
    color: 'secondary',
    description:
      'Investigação dos fatores que influenciam o crescimento físico, desenvolvimento neuropsicomotor e cognitivo de crianças.',
    temas: [
      'Avaliação do desenvolvimento neuropsicomotor',
      'Intervenções precoces em desenvolvimento',
      'Fatores de risco e proteção ao desenvolvimento',
      'Nutrição e crescimento infantil',
      'Desenvolvimento cognitivo e aprendizagem',
    ],
  },
  {
    title: 'Tecnologias e Inovação em Saúde',
    icon: Smartphone,
    color: 'accent',
    description:
      'Desenvolvimento e avaliação de tecnologias, aplicativos e dispositivos para melhoria da assistência materno-infantil.',
    temas: [
      'Aplicativos móveis para saúde materno-infantil',
      'Tecnologias assistivas e dispositivos médicos',
      'Telemedicina e telemonitoramento',
      'Inteligência artificial aplicada à saúde',
      'Validação de instrumentos e escalas',
    ],
  },
  {
    title: 'Epidemiologia e Saúde Coletiva',
    icon: Microscope,
    color: 'primary',
    description:
      'Estudos epidemiológicos, políticas públicas e determinantes sociais da saúde materno-infantil no Brasil.',
    temas: [
      'Indicadores de saúde materno-infantil',
      'Desigualdades em saúde e determinantes sociais',
      'Avaliação de programas e políticas públicas',
      'Vigilância epidemiológica',
      'Estudos de coorte e longitudinais',
    ],
  },
]

export default function LinhasPesquisaPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-white" aria-hidden="true" />
          </div>
          <h1 className="heading-1 mb-6">Linhas de Pesquisa</h1>
          <p className="body-large text-white/90">
            Nosso programa está organizado em linhas de pesquisa que refletem as principais
            áreas de estudo e inovação em saúde materno-infantil.
          </p>
        </div>
      </Section>

      {/* Introdução */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-gray-900 mb-6">Áreas de Concentração</h2>
          <p className="body-large text-gray-600 mb-8">
            As linhas de pesquisa do nosso programa são complementares e interdisciplinares,
            permitindo que os alunos desenvolvam projetos inovadores que integrem diferentes
            perspectivas e metodologias. Cada linha conta com professores orientadores
            especializados e infraestrutura adequada para o desenvolvimento das pesquisas.
          </p>
        </div>
      </Section>

      {/* Linhas de Pesquisa */}
      {linhasPesquisa.map((linha, index) => {
        const Icon = linha.icon
        const isEven = index % 2 === 0

        return (
          <Section key={linha.title} background={isEven ? 'white' : 'gray'}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-${linha.color}-100 rounded-full mb-6`}
                >
                  <Icon className={`w-8 h-8 text-${linha.color}`} aria-hidden="true" />
                </div>
                <h2 className="heading-3 text-gray-900 mb-4">{linha.title}</h2>
                <p className="body-large text-gray-600 mb-6">{linha.description}</p>
                <Link href="/pos-graduacao/corpo-docente">
                  <Button variant="outline" size="sm">
                    Ver Professores da Linha
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="heading-5 text-gray-900 mb-4">Principais Temas de Estudo</h3>
                    <ul className="space-y-3">
                      {linha.temas.map((tema, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-3 mt-1">•</span>
                          <span className="body-normal text-gray-600">{tema}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Section>
        )
      })}

      {/* Interdisciplinaridade */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-gray-900 mb-6 text-center">Abordagem Interdisciplinar</h2>
          <div className="prose prose-lg max-w-none">
            <p className="body-large text-gray-600 mb-6 text-center">
              Incentivamos fortemente projetos que integrem diferentes linhas de pesquisa,
              promovendo uma visão holística e inovadora da saúde materno-infantil. Nossos
              alunos têm a oportunidade de trabalhar em equipes multidisciplinares e
              desenvolver pesquisas que combinam expertise de diferentes áreas do conhecimento.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" className="text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">Interessado em desenvolver sua pesquisa?</h2>
          <p className="body-large text-white/90 mb-8">
            Conheça nosso corpo docente e veja como você pode contribuir para o avanço da
            ciência em saúde materno-infantil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pos-graduacao/corpo-docente">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver Professores
              </Button>
            </Link>
            <Link href="/pos-graduacao/processo-seletivo">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Como Ingressar
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
