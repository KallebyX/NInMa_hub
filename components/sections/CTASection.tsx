import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <Section background="secondary" className="text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-2 text-white mb-6">
          Quer Saber Mais Sobre Nosso Trabalho?
        </h2>
        <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco para conhecer nossas pesquisas, produtos e oportunidades
          de colaboração.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contato">
            <Button
              variant="accent"
              size="lg"
              className="group shadow-xl hover:shadow-2xl"
            >
              <Mail className="mr-2 w-5 h-5" aria-hidden="true" />
              Entre em Contato
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
          <Link href="/sobre">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary"
            >
              Conheça Nossa Equipe
            </Button>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-semibold mb-2">Email</div>
              <a
                href="mailto:contato@ninmahub.com"
                className="text-white/90 hover:text-white transition-colors"
              >
                contato@ninmahub.com
              </a>
            </div>
            <div>
              <div className="font-semibold mb-2">Telefone</div>
              <a
                href="tel:+555533219000"
                className="text-white/90 hover:text-white transition-colors"
              >
                (55) 3321-9000
              </a>
            </div>
            <div>
              <div className="font-semibold mb-2">Localização</div>
              <p className="text-white/90">Santa Maria - RS, Brasil</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
