import Link from 'next/link'
import { ArrowRight, Play, Clock } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

// Mock data - será substituído por dados reais da API
const videos = [
  {
    id: 1,
    title: 'Introdução ao NInMa Hub: Nossa Missão e Visão',
    description:
      'Conheça a história, missão e visão do Hub de Inovação em Saúde Materno Infantil.',
    duration: '8:45',
    category: 'Institucional',
    thumbnail: null,
    slug: 'introducao-ninma-hub',
  },
  {
    id: 2,
    title: 'Webinar: Tecnologias Emergentes no Cuidado Neonatal',
    description:
      'Discussão sobre as principais tecnologias aplicadas ao cuidado de recém-nascidos.',
    duration: '45:20',
    category: 'Webinar',
    thumbnail: null,
    slug: 'webinar-tecnologias-neonatal',
  },
  {
    id: 3,
    title: 'Entrevista: Pesquisa em Saúde Materno-Infantil',
    description:
      'Conversa com pesquisadores sobre os desafios e avanços na área.',
    duration: '15:30',
    category: 'Entrevista',
    thumbnail: null,
    slug: 'entrevista-pesquisa-saude',
  },
]

export default function VideosSection() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="heading-2 text-gray-900 mb-4">Vídeos Educativos</h2>
        <p className="body-large text-gray-600 max-w-2xl mx-auto">
          Aprenda com nossos especialistas através de conteúdos em vídeo de alta qualidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {videos.map((video, index) => (
          <Card
            key={video.id}
            hover
            className="flex flex-col overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Video Thumbnail Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-secondary to-primary group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary ml-1" aria-hidden="true" />
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="accent" size="sm">
                  {video.category}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" aria-hidden="true" />
                {video.duration}
              </div>
            </div>

            <CardHeader>
              <CardTitle className="line-clamp-2">{video.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {video.description}
              </CardDescription>
            </CardHeader>

            <CardFooter className="mt-auto">
              <Link href={`/videos/${video.slug}`} className="w-full">
                <Button variant="ghost" size="sm" fullWidth className="group">
                  Assistir Vídeo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/videos">
          <Button variant="secondary" size="lg">
            Ver Todos os Vídeos
          </Button>
        </Link>
      </div>
    </Section>
  )
}
