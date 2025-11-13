import { Metadata } from 'next'
import Link from 'next/link'
import { Package, ArrowRight, Search } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Input from '@/components/ui/Input'

export const metadata: Metadata = {
  title: 'Produtos',
  description:
    'Conheça os produtos inovadores desenvolvidos pelo NInMa Hub para a saúde materno-infantil.',
}

// Mock data - será substituído por dados reais da API/Prisma
const products = [
  {
    id: 1,
    title: 'Sistema de Monitoramento Neonatal Inteligente',
    description:
      'Plataforma integrada com IA para monitoramento em tempo real de sinais vitais de recém-nascidos, com alertas preditivos.',
    category: 'Tecnologia',
    featured: true,
    slug: 'sistema-monitoramento-neonatal',
  },
  {
    id: 2,
    title: 'App Gestação Saudável',
    description:
      'Aplicativo mobile personalizado para acompanhamento da gestação, com dicas baseadas em evidências científicas.',
    category: 'Mobile',
    featured: true,
    slug: 'app-gestacao-saudavel',
  },
  {
    id: 3,
    title: 'Protocolo de Cuidados Maternos Integrados',
    description:
      'Protocolo clínico baseado em evidências para cuidados durante pré-natal, parto e pós-parto.',
    category: 'Protocolo',
    featured: false,
    slug: 'protocolo-cuidados-maternos',
  },
  {
    id: 4,
    title: 'Sistema de Triagem Neonatal Digital',
    description:
      'Plataforma digital para gerenciamento e acompanhamento da triagem neonatal (teste do pezinho).',
    category: 'Tecnologia',
    featured: false,
    slug: 'triagem-neonatal-digital',
  },
  {
    id: 5,
    title: 'Guia de Aleitamento Materno Interativo',
    description:
      'Material educativo interativo com técnicas, dicas e soluções para desafios comuns no aleitamento.',
    category: 'Educação',
    featured: false,
    slug: 'guia-aleitamento-materno',
  },
  {
    id: 6,
    title: 'Plataforma de Telemedicina Materno-Infantil',
    description:
      'Sistema de teleconsulta e telemonitoramento especializado em saúde materno-infantil.',
    category: 'Tecnologia',
    featured: false,
    slug: 'telemedicina-materno-infantil',
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6">Nossos Produtos</h1>
          <p className="body-large text-white/90">
            Soluções inovadoras desenvolvidas para transformar a saúde materno-infantil e
            melhorar a vida de famílias em todo o Brasil.
          </p>
        </div>
      </Section>

      {/* Search and Filter */}
      <Section background="gray">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-12"
            />
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="heading-3 text-gray-900 mb-8">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products
              .filter((p) => p.featured)
              .map((product) => (
                <Card key={product.id} hover className="flex flex-col">
                  <div className="h-56 bg-gradient-to-br from-primary to-secondary rounded-t-lg flex items-center justify-center">
                    <Package className="w-20 h-20 text-white" aria-hidden="true" />
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle>{product.title}</CardTitle>
                      <Badge variant="accent" size="sm">
                        Destaque
                      </Badge>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>

                  <CardFooter className="mt-auto">
                    <Link href={`/produtos/${product.slug}`} className="w-full">
                      <Button variant="primary" size="md" fullWidth className="group">
                        Saiba Mais
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <h2 className="heading-3 text-gray-900 mb-8">Todos os Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} hover className="flex flex-col">
                <div className="h-48 bg-gradient-to-br from-secondary to-primary rounded-t-lg flex items-center justify-center">
                  <Package className="w-16 h-16 text-white" aria-hidden="true" />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="line-clamp-2">{product.title}</CardTitle>
                    <Badge variant="primary" size="sm">
                      {product.category}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-3">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="mt-auto">
                  <Link href={`/produtos/${product.slug}`} className="w-full">
                    <Button variant="outline" size="sm" fullWidth className="group">
                      Ver Detalhes
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
