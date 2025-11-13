import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Container from '@/components/ui/Container'

const footerLinks = {
  institucional: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Eventos', href: '/eventos' },
    { name: 'Prêmios', href: '/premios' },
  ],
  conteudo: [
    { name: 'Produtos', href: '/produtos' },
    { name: 'Artigos', href: '/artigos' },
    { name: 'Vídeos', href: '/videos' },
    { name: 'Curiosidades', href: '/curiosidades' },
  ],
  suporte: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Contato', href: '/contato' },
    { name: 'Localização', href: '/localizacao' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Logo size="md" />
              </div>
              <p className="body-small text-gray-400 mb-6">
                Hub de Inovação em Saúde Materno Infantil do Programa de Pós-Graduação em
                Saúde Materno Infantil da Universidade Franciscana.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:contato@ninmahub.com"
                  className="flex items-center gap-3 text-sm hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <span>contato@ninmahub.com</span>
                </a>
                <a
                  href="tel:+555533219000"
                  className="flex items-center gap-3 text-sm hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>(55) 3321-9000</span>
                </a>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>
                    Universidade Franciscana
                    <br />
                    Rua dos Andradas, 1614
                    <br />
                    Santa Maria - RS, 97010-032
                  </span>
                </div>
              </div>
            </div>

            {/* Institucional */}
            <div>
              <h3 className="heading-5 text-white mb-4">Institucional</h3>
              <ul className="space-y-2">
                {footerLinks.institucional.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conteúdo */}
            <div>
              <h3 className="heading-5 text-white mb-4">Conteúdo</h3>
              <ul className="space-y-2">
                {footerLinks.conteudo.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h3 className="heading-5 text-white mb-4">Suporte</h3>
              <ul className="space-y-2">
                {footerLinks.suporte.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm">
                Siga-nos nas redes sociais e fique por dentro das novidades
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} NInMa Hub - Universidade Franciscana. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacidade" className="hover:text-secondary transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="hover:text-secondary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
