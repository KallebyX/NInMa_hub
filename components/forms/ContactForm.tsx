'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false,
      })
    } catch (err: any) {
      setError(err.message || 'Erro ao enviar mensagem')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" aria-hidden="true" />
            <h3 className="heading-4 text-gray-900 mb-2">Mensagem Enviada!</h3>
            <p className="body-normal text-gray-600 mb-6">
              Recebemos sua mensagem e entraremos em contato em breve.
            </p>
            <Button variant="primary" size="md" onClick={() => setIsSuccess(false)}>
              Enviar Nova Mensagem
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Envie-nos uma Mensagem</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div
              className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
              role="alert"
            >
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nome Completo"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isLoading}
            />
            <Input
              label="Email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isLoading}
              helperText="Opcional"
            />
            <Input
              label="Assunto"
              placeholder="Assunto da mensagem"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <Textarea
            label="Mensagem"
            rows={6}
            placeholder="Digite sua mensagem..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            disabled={isLoading}
          />

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="privacy"
              checked={formData.privacy}
              onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
              className="mt-1"
              required
              disabled={isLoading}
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              Concordo com a{' '}
              <a href="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </a>{' '}
              e autorizo o uso dos meus dados para responder esta mensagem.
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={isLoading}
            disabled={isLoading}
          >
            <Send className="w-5 h-5 mr-2" aria-hidden="true" />
            Enviar Mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
