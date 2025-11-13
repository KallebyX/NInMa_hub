import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  noPadding?: boolean
  background?: 'white' | 'gray' | 'primary' | 'secondary' | 'accent'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      containerSize = 'lg',
      noPadding = false,
      background = 'white',
      children,
      ...props
    },
    ref
  ) => {
    const backgrounds = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      accent: 'bg-accent text-white',
    }

    return (
      <section
        ref={ref}
        className={cn(
          !noPadding && 'section',
          backgrounds[background],
          className
        )}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section
