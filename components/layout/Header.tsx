'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Início', href: '/' },
  {
    name: 'Institucional',
    href: '#',
    children: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Contato', href: '/contato' },
      { name: 'Localização', href: '/localizacao' },
    ],
  },
  {
    name: 'Pós-Graduação',
    href: '#',
    children: [
      { name: 'Sobre o Programa', href: '/pos-graduacao' },
      { name: 'Linhas de Pesquisa', href: '/pos-graduacao/linhas-de-pesquisa' },
      { name: 'Corpo Docente', href: '/pos-graduacao/corpo-docente' },
      { name: 'Processo Seletivo', href: '/pos-graduacao/processo-seletivo' },
      { name: 'Alunos e Egressos', href: '/pos-graduacao/alunos-egressos' },
    ],
  },
  {
    name: 'Conteúdo',
    href: '#',
    children: [
      { name: 'Produtos', href: '/produtos' },
      { name: 'Artigos Científicos', href: '/artigos' },
      { name: 'Blog', href: '/blog' },
      { name: 'Vídeos', href: '/videos' },
      { name: 'Curiosidades', href: '/curiosidades' },
    ],
  },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Prêmios', href: '/premios' },
  { name: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between" aria-label="Navegação principal">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors',
                        'hover:text-primary hover:bg-primary-50',
                        isActive(item.href) && 'text-primary bg-primary-50'
                      )}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </button>
                    {openDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 text-sm font-medium transition-colors',
                              'hover:bg-primary-50 hover:text-primary',
                              isActive(child.href) && 'bg-primary-50 text-primary'
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 text-sm font-semibold rounded-md transition-colors',
                      'hover:text-primary hover:bg-primary-50',
                      isActive(item.href) && 'text-primary bg-primary-50'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contato">
              <Button variant="primary" size="sm" className="ml-4">
                Entre em Contato
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu de navegação"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        className={cn(
                          'w-full flex items-center justify-between px-3 py-2 text-sm font-semibold rounded-md transition-colors',
                          'hover:bg-primary-50 hover:text-primary'
                        )}
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.name ? null : item.name)
                        }
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform',
                            openDropdown === item.name && 'rotate-180'
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-2 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={cn(
                                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                                'hover:bg-primary-50 hover:text-primary',
                                isActive(child.href) && 'bg-primary-50 text-primary'
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-3 py-2 text-sm font-semibold rounded-md transition-colors',
                        'hover:bg-primary-50 hover:text-primary',
                        isActive(item.href) && 'bg-primary-50 text-primary'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contato">
                <Button variant="primary" size="sm" fullWidth className="mt-4">
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
