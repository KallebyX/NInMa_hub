import type { Metadata } from 'next'
import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'NInMa Hub - Hub de Inovação em Saúde Materno Infantil',
    template: '%s | NInMa Hub',
  },
  description:
    'Hub de Inovação em Saúde Materno Infantil do Programa de Pós-Graduação em Saúde Materno Infantil da Universidade Franciscana. Desenvolvemos produtos, pesquisas e soluções inovadoras para a saúde materno-infantil.',
  keywords: [
    'saúde materno infantil',
    'inovação em saúde',
    'pesquisa científica',
    'universidade franciscana',
    'pós-graduação',
    'produtos de saúde',
  ],
  authors: [{ name: 'NInMa Hub', url: 'https://ninmahub.com' }],
  creator: 'NInMa Hub',
  publisher: 'Universidade Franciscana',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ninmahub.com',
    title: 'NInMa Hub - Hub de Inovação em Saúde Materno Infantil',
    description:
      'Hub de Inovação em Saúde Materno Infantil da Universidade Franciscana',
    siteName: 'NInMa Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NInMa Hub - Hub de Inovação em Saúde Materno Infantil',
    description:
      'Hub de Inovação em Saúde Materno Infantil da Universidade Franciscana',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        {/* Skip to main content link para acessibilidade */}
        <a href="#main-content" className="skip-to-main">
          Pular para o conteúdo principal
        </a>

        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1 pt-20">
            <Suspense fallback={<div className="min-h-screen" />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
