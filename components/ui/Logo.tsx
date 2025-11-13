import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ className, size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: {
      container: 'h-8',
      text: 'text-xl',
    },
    md: {
      container: 'h-10',
      text: 'text-2xl',
    },
    lg: {
      container: 'h-12',
      text: 'text-3xl',
    },
  }

  return (
    <Link
      href="/"
      className={cn('flex items-center gap-3 group', className)}
      aria-label="NInMa Hub - Página Inicial"
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary p-2 transition-transform group-hover:scale-105',
          sizes[size].container
        )}
      >
        <svg
          className="w-full h-full text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Ícone estilizado de mãe e bebê + inovação */}
          <path
            d="M12 2C10.34 2 9 3.34 9 5C9 6.66 10.34 8 12 8C13.66 8 15 6.66 15 5C15 3.34 13.66 2 12 2Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M17 9H7C5.9 9 5 9.9 5 11V13C5 14.1 5.9 15 7 15H8V21C8 21.55 8.45 22 9 22C9.55 22 10 21.55 10 21V15H14V21C14 21.55 14.45 22 15 22C15.55 22 16 21.55 16 21V15H17C18.1 15 19 14.1 19 13V11C19 9.9 18.1 9 17 9Z"
            fill="currentColor"
          />
          <circle cx="18" cy="6" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="20" cy="8" r="1" fill="currentColor" opacity="0.6" />
          <circle cx="6" cy="6" r="1.5" fill="currentColor" opacity="0.6" />
          <circle cx="4" cy="8" r="1" fill="currentColor" opacity="0.6" />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              'font-bold leading-none text-primary group-hover:text-primary-600 transition-colors',
              sizes[size].text
            )}
          >
            NInMa Hub
          </span>
          <span className="text-xs text-gray-600 leading-none mt-1">
            Inovação em Saúde Materno-Infantil
          </span>
        </div>
      )}
    </Link>
  )
}
