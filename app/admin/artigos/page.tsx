'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, Search, FileText } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Input from '@/components/ui/Input'
import { formatDate } from '@/lib/utils'

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/articles')
      const data = await response.json()
      setArticles(data)
    } catch (error) {
      console.error('Erro ao carregar artigos:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja deletar este artigo?')) return

    try {
      await fetch(`/api/articles/${id}`, { method: 'DELETE' })
      fetchArticles()
    } catch (error) {
      console.error('Erro ao deletar artigo:', error)
      alert('Erro ao deletar artigo')
    }
  }

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <p className="text-gray-600">Carregando...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading-2 text-gray-900 mb-2">Artigos Científicos</h1>
          <p className="body-normal text-gray-600">
            Gerencie os artigos publicados pelo NInMa Hub
          </p>
        </div>
        <Link href="/admin/artigos/novo">
          <Button variant="primary" size="md">
            <Plus className="w-5 h-5 mr-2" aria-hidden="true" />
            Novo Artigo
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-primary" aria-hidden="true" />
              <p className="text-sm text-gray-600">Total de Artigos</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">{articles.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <Eye className="w-5 h-5 text-green-600" aria-hidden="true" />
              <p className="text-sm text-gray-600">Publicados</p>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {articles.filter((a) => a.published).length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <Plus className="w-5 h-5 text-accent" aria-hidden="true" />
              <p className="text-sm text-gray-600">Em Destaque</p>
            </div>
            <p className="text-3xl font-bold text-accent">
              {articles.filter((a) => a.featured).length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          aria-hidden="true"
        />
        <Input
          placeholder="Buscar artigos..."
          className="pl-12"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Articles Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Artigo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Autores
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Ano
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredArticles.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      Nenhum artigo encontrado
                    </td>
                  </tr>
                ) : (
                  filteredArticles.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">
                            {article.title}
                          </p>
                          {article.journal && (
                            <p className="text-sm text-gray-500">{article.journal}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {article.authors.slice(0, 2).join(', ')}
                          {article.authors.length > 2 && ` +${article.authors.length - 2}`}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary" size="sm">
                          {article.year}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {article.published ? (
                            <Badge variant="success" size="sm">
                              Publicado
                            </Badge>
                          ) : (
                            <Badge variant="neutral" size="sm">
                              Rascunho
                            </Badge>
                          )}
                          {article.featured && (
                            <Badge variant="accent" size="sm">
                              Destaque
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link href={`/artigos/${article.slug}`} target="_blank">
                            <button
                              className="p-2 text-gray-600 hover:text-primary rounded-lg hover:bg-gray-100"
                              title="Visualizar"
                            >
                              <Eye className="w-4 h-4" aria-hidden="true" />
                            </button>
                          </Link>
                          <Link href={`/admin/artigos/${article.id}`}>
                            <button
                              className="p-2 text-gray-600 hover:text-primary rounded-lg hover:bg-gray-100"
                              title="Editar"
                            >
                              <Edit className="w-4 h-4" aria-hidden="true" />
                            </button>
                          </Link>
                          <button
                            className="p-2 text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-100"
                            onClick={() => handleDelete(article.id)}
                            title="Deletar"
                          >
                            <Trash2 className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
