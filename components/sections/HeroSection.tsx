import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary-600 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-400" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse animation-delay-200" />

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-semibold">Hub de Inovação em Saúde</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-1 text-white mb-6 animate-slide-up">
            Transformando o Futuro da{' '}
            <span className="text-secondary-200">Saúde Materno-Infantil</span>
          </h1>

          <p className="body-large text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Desenvolvemos produtos, pesquisas e soluções inovadoras no Programa de
            Pós-Graduação em Saúde Materno Infantil da Universidade Franciscana.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
            <Link href="/produtos">
              <Button
                variant="accent"
                size="lg"
                className="group shadow-xl hover:shadow-2xl"
              >
                Conheça Nossos Produtos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/sobre">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              >
                Sobre o NInMa Hub
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in animation-delay-600">
            {[
              { value: '50+', label: 'Produtos Desenvolvidos' },
              { value: '100+', label: 'Artigos Publicados' },
              { value: '30+', label: 'Pesquisadores' },
              { value: '15+', label: 'Prêmios Conquistados' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  )
}
