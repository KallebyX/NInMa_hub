import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import ContactForm from '@/components/forms/ContactForm'

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
            <ContactForm />
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
