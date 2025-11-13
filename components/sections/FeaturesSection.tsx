import { Lightbulb, Users, Award, Rocket } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent } from '@/components/ui/Card'

const features = [
  {
    icon: Lightbulb,
    title: 'Inovação',
    description:
      'Desenvolvemos soluções criativas e inovadoras para os desafios da saúde materno-infantil.',
    color: 'text-accent',
    bg: 'bg-accent-50',
  },
  {
    icon: Users,
    title: 'Colaboração',
    description:
      'Trabalhamos em equipe multidisciplinar para alcançar resultados excepcionais.',
    color: 'text-secondary',
    bg: 'bg-secondary-50',
  },
  {
    icon: Award,
    title: 'Excelência',
    description:
      'Comprometidos com a qualidade e rigor científico em todas as nossas atividades.',
    color: 'text-primary',
    bg: 'bg-primary-50',
  },
  {
    icon: Rocket,
    title: 'Impacto',
    description:
      'Buscamos gerar impacto real na vida de mães, bebês e famílias.',
    color: 'text-accent',
    bg: 'bg-accent-50',
  },
]

export default function FeaturesSection() {
  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="heading-2 text-gray-900 mb-4">
          Por que o NInMa Hub é Diferente?
        </h2>
        <p className="body-large text-gray-600 max-w-2xl mx-auto">
          Combinamos pesquisa de ponta, tecnologia e paixão para transformar a saúde
          materno-infantil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              hover
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bg} mb-6`}
                >
                  <Icon className={`w-8 h-8 ${feature.color}`} aria-hidden="true" />
                </div>
                <h3 className="heading-5 text-gray-900 mb-3">{feature.title}</h3>
                <p className="body-small text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
