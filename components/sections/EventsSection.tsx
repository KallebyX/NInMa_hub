import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'

// Mock data - será substituído por dados reais da API
const events = [
  {
    id: 1,
    title: 'Simpósio de Inovação em Saúde Materno-Infantil 2024',
    description:
      'Encontro anual reunindo pesquisadores, profissionais e estudantes para discutir os avanços na área.',
    startDate: new Date('2024-11-20'),
    endDate: new Date('2024-11-22'),
    location: 'Universidade Franciscana, Santa Maria - RS',
    category: 'Simpósio',
    slug: 'simposio-inovacao-2024',
  },
  {
    id: 2,
    title: 'Workshop: Metodologias de Pesquisa em Saúde',
    description:
      'Capacitação prática em métodos de pesquisa aplicados à saúde materno-infantil.',
    startDate: new Date('2024-12-05'),
    location: 'Online',
    category: 'Workshop',
    slug: 'workshop-metodologias-pesquisa',
  },
  {
    id: 3,
    title: 'Palestra: Tecnologia e Humanização no Cuidado Neonatal',
    description:
      'Discussão sobre como equilibrar tecnologia e humanização no cuidado de recém-nascidos.',
    startDate: new Date('2024-12-15'),
    location: 'Auditório Central - UFN',
    category: 'Palestra',
    slug: 'palestra-tecnologia-humanizacao',
  },
]

export default function EventsSection() {
  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="heading-2 text-gray-900 mb-4">Próximos Eventos</h2>
        <p className="body-large text-gray-600 max-w-2xl mx-auto">
          Participe de nossos eventos e amplie seu conhecimento na área.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {events.map((event, index) => (
          <Card
            key={event.id}
            hover
            className="flex flex-col animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent to-accent-600 rounded-lg flex flex-col items-center justify-center text-white">
                  <div className="text-2xl font-bold">
                    {event.startDate.getDate()}
                  </div>
                  <div className="text-xs uppercase">
                    {event.startDate.toLocaleDateString('pt-BR', { month: 'short' })}
                  </div>
                </div>
                <Badge variant="accent" size="sm">
                  {event.category}
                </Badge>
              </div>
              <CardTitle className="line-clamp-2">{event.title}</CardTitle>
              <CardDescription className="line-clamp-3">
                {event.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  {formatDate(event.startDate)}
                  {event.endDate && ` - ${formatDate(event.endDate)}`}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{event.location}</span>
              </div>
            </CardContent>

            <CardFooter className="mt-auto">
              <Link href={`/eventos/${event.slug}`} className="w-full">
                <Button variant="ghost" size="sm" fullWidth className="group">
                  Ver Detalhes
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/eventos">
          <Button variant="accent" size="lg">
            Ver Todos os Eventos
          </Button>
        </Link>
      </div>
    </Section>
  )
}
