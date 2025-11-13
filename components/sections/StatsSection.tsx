import { TrendingUp, Users, Award, Globe } from 'lucide-react'
import Section from '@/components/ui/Section'

const stats = [
  {
    icon: TrendingUp,
    value: '50+',
    label: 'Produtos Desenvolvidos',
    description: 'Soluções inovadoras criadas pelo nosso time',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Artigos Publicados',
    description: 'Pesquisas em revistas científicas renomadas',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Prêmios Conquistados',
    description: 'Reconhecimento nacional e internacional',
  },
  {
    icon: Globe,
    value: '30+',
    label: 'Parcerias Ativas',
    description: 'Colaborações com instituições de excelência',
  },
]

export default function StatsSection() {
  return (
    <Section background="primary" className="text-white">
      <div className="text-center mb-12">
        <h2 className="heading-2 text-white mb-4">Nosso Impacto em Números</h2>
        <p className="body-large text-white/90 max-w-2xl mx-auto">
          Resultados que demonstram nosso compromisso com a excelência e inovação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Icon className="w-8 h-8 text-secondary-200" aria-hidden="true" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-white/80">{stat.description}</div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
