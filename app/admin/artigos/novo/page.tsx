'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import RichTextEditor from '@/components/admin/RichTextEditor'
import ImageUpload from '@/components/admin/ImageUpload'
import Link from 'next/link'

export default function NewArticlePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    content: '',
    authors: '',
    journal: '',
    doi: '',
    year: new Date().getFullYear().toString(),
    image: null as string | null,
    pdfUrl: '',
    tags: '',
    featured: false,
    published: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const authors = formData.authors
        .split(',')
        .map((a) => a.trim())
        .filter((a) => a)

      const tags = formData.tags
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t)

      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          authors,
          tags,
          year: parseInt(formData.year),
        }),
      })

      if (!response.ok) {
        throw new Error('Erro ao criar artigo')
      }

      router.push('/admin/artigos')
      router.refresh()
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro ao criar artigo')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/artigos">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Voltar
          </Button>
        </Link>
        <div>
          <h1 className="heading-2 text-gray-900">Novo Artigo</h1>
          <p className="body-normal text-gray-600">
            Adicione um novo artigo científico
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informações Básicas */}
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Input
              label="Título do Artigo"
              placeholder="Ex: Impacto da Tecnologia no Cuidado Neonatal"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />

            <Textarea
              label="Resumo/Abstract"
              placeholder="Digite um resumo do artigo..."
              rows={4}
              value={formData.abstract}
              onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
              required
              helperText="Breve resumo do artigo científico"
            />

            <Input
              label="Autores"
              placeholder="Silva, M.A., Santos, J.P., Oliveira, L.C."
              value={formData.authors}
              onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
              required
              helperText="Separe os nomes dos autores por vírgula"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Revista/Journal"
                placeholder="Ex: Revista Brasileira de Saúde"
                value={formData.journal}
                onChange={(e) =>
                  setFormData({ ...formData, journal: e.target.value })
                }
              />

              <Input
                label="Ano de Publicação"
                type="number"
                placeholder="2024"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="DOI"
                placeholder="10.1234/example.doi"
                value={formData.doi}
                onChange={(e) => setFormData({ ...formData, doi: e.target.value })}
                helperText="Digital Object Identifier (opcional)"
              />

              <Input
                label="URL do PDF"
                placeholder="https://..."
                value={formData.pdfUrl}
                onChange={(e) =>
                  setFormData({ ...formData, pdfUrl: e.target.value })
                }
                helperText="Link para o arquivo PDF (opcional)"
              />
            </div>

            <Input
              label="Tags"
              placeholder="saúde materno-infantil, neonatal, tecnologia"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              helperText="Separe as tags por vírgula"
            />
          </CardContent>
        </Card>

        {/* Conteúdo */}
        <Card>
          <CardHeader>
            <CardTitle>Conteúdo Completo</CardTitle>
          </CardHeader>
          <CardContent>
            <RichTextEditor
              label="Conteúdo do Artigo"
              value={formData.content}
              onChange={(value) => setFormData({ ...formData, content: value })}
              placeholder="Digite o conteúdo completo do artigo..."
              helperText="Descreva detalhadamente o artigo, metodologia, resultados e conclusões"
            />
          </CardContent>
        </Card>

        {/* Imagem de Capa */}
        <Card>
          <CardHeader>
            <CardTitle>Imagem de Capa</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageUpload
              value={formData.image}
              onChange={(url) => setFormData({ ...formData, image: url })}
              helperText="Imagem que representa o artigo (opcional)"
            />
          </CardContent>
        </Card>

        {/* Configurações */}
        <Card>
          <CardHeader>
            <CardTitle>Configurações de Publicação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({ ...formData, featured: e.target.checked })
                }
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                Destacar artigo na página inicial
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="published"
                checked={formData.published}
                onChange={(e) =>
                  setFormData({ ...formData, published: e.target.checked })
                }
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="published" className="text-sm font-medium text-gray-700">
                Publicar artigo imediatamente
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4">
          <Link href="/admin/artigos">
            <Button type="button" variant="outline" size="lg" disabled={isLoading}>
              Cancelar
            </Button>
          </Link>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            disabled={isLoading}
          >
            <Save className="w-5 h-5 mr-2" aria-hidden="true" />
            Salvar Artigo
          </Button>
        </div>
      </form>
    </div>
  )
}
