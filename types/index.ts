// Types globais para o projeto

export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface PublishableEntity extends BaseEntity {
  published: boolean
  publishedAt?: Date
}

export interface SlugEntity {
  slug: string
}

export interface FeaturedEntity {
  featured: boolean
}

export interface TaggableEntity {
  tags: string[]
}

export type Product = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  image?: string | null
  category?: string | null
  tags: string[]
  featured: boolean
  published: boolean
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

export type Article = {
  id: string
  title: string
  slug: string
  authors: string[]
  abstract: string
  content: string
  journal?: string | null
  doi?: string | null
  year: number
  image?: string | null
  pdfUrl?: string | null
  tags: string[]
  featured: boolean
  published: boolean
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

export type Video = {
  id: string
  title: string
  slug: string
  description: string
  videoUrl: string
  thumbnail?: string | null
  duration?: string | null
  category?: string | null
  tags: string[]
  featured: boolean
  published: boolean
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

export type Curiosity = {
  id: string
  title: string
  slug: string
  content: string
  image?: string | null
  category?: string | null
  tags: string[]
  featured: boolean
  published: boolean
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

export type Faq = {
  id: string
  question: string
  answer: string
  category?: string | null
  order: number
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export type Event = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  image?: string | null
  startDate: Date
  endDate?: Date | null
  location?: string | null
  eventUrl?: string | null
  category?: string | null
  tags: string[]
  featured: boolean
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export type Award = {
  id: string
  title: string
  slug: string
  description: string
  image?: string | null
  awardedBy: string
  awardedTo: string
  year: number
  category?: string | null
  featured: boolean
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export type News = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string | null
  category?: string | null
  tags: string[]
  featured: boolean
  published: boolean
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

export type TeamMember = {
  id: string
  name: string
  slug: string
  role: string
  bio: string
  image?: string | null
  email?: string | null
  phone?: string | null
  linkedin?: string | null
  lattes?: string | null
  order: number
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export type User = {
  id: string
  email: string
  name: string
  role: string
  createdAt: Date
  updatedAt: Date
}
