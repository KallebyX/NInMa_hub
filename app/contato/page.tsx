import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com o NInMa Hub. Estamos prontos para responder suas dúvidas e conhecer suas ideias.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gray" className="pt-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="heading-1 text-gray-900 mb-6">Entre em Contato</h1>
          <p className="body-large text-gray-600">
            Estamos prontos para responder suas dúvidas, conhecer suas ideias e explorar
            oportunidades de colaboração.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:contato@ninmahub.com"
                  className="text-primary hover:underline"
                >
                  contato@ninmahub.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+555533219000" className="text-primary hover:underline">
                  (55) 3321-9000
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Universidade Franciscana
                  <br />
                  Rua dos Andradas, 1614
                  <br />
                  Centro, Santa Maria - RS
                  <br />
                  CEP: 97010-032
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Segunda a Sexta
                  <br />
                  08:00 - 18:00
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envie-nos uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Nome Completo"
                      placeholder="Digite seu nome"
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                    />
                    <Input label="Assunto" placeholder="Assunto da mensagem" required />
                  </div>

                  <Textarea
                    label="Mensagem"
                    rows={6}
                    placeholder="Digite sua mensagem..."
                    required
                  />

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1"
                      required
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Concordo com a{' '}
                      <a href="/privacidade" className="text-primary hover:underline">
                        Política de Privacidade
                      </a>{' '}
                      e autorizo o uso dos meus dados para responder esta mensagem.
                    </label>
                  </div>

                  <Button type="submit" variant="primary" size="lg" fullWidth>
                    <Send className="mr-2 w-5 h-5" aria-hidden="true" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section background="white" noPadding>
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-600">
            [Mapa da localização - Integração com Google Maps]
          </p>
        </div>
      </Section>
    </>
  )
}
