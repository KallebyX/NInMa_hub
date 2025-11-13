import Link from 'next/link'
import { ArrowRight, Package } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

// Mock data - será substituído por dados reais da API
const products = [
  {
    id: 1,
    title: 'Sistema de Monitoramento Neonatal',
    description:
      'Plataforma integrada para monitoramento em tempo real de sinais vitais de recém-nascidos.',
    category: 'Tecnologia',
    image: null,
    slug: 'sistema-monitoramento-neonatal',
  },
  {
    id: 2,
    title: 'App Gestação Saudável',
    description:
      'Aplicativo mobile para acompanhamento personalizado da gestação com dicas e orientações.',
    category: 'Mobile',
    image: null,
    slug: 'app-gestacao-saudavel',
  },
  {
    id: 3,
    title: 'Protocolo de Cuidados Maternos',
    description:
      'Protocolo baseado em evidências para cuidados durante o pré-natal e pós-parto.',
    category: 'Protocolo',
    image: null,
    slug: 'protocolo-cuidados-maternos',
  },
]

export default function ProductsSection() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="heading-2 text-gray-900 mb-4">Nossos Produtos</h2>
        <p className="body-large text-gray-600 max-w-2xl mx-auto">
          Conheça as soluções inovadoras desenvolvidas pelo nosso time de pesquisadores.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {products.map((product, index) => (
          <Card
            key={product.id}
            hover
            className="flex flex-col animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary to-secondary rounded-t-lg flex items-center justify-center">
              <Package className="w-16 h-16 text-white" aria-hidden="true" />
            </div>

            <CardHeader>
              <div className="flex items-start justify-between gap-4 mb-2">
                <CardTitle>{product.title}</CardTitle>
                <Badge variant="primary" size="sm">
                  {product.category}
                </Badge>
              </div>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>

            <CardFooter className="mt-auto">
              <Link href={`/produtos/${product.slug}`} className="w-full">
                <Button variant="outline" size="sm" fullWidth className="group">
                  Saiba Mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/produtos">
          <Button variant="primary" size="lg">
            Ver Todos os Produtos
          </Button>
        </Link>
      </div>
    </Section>
  )
}
