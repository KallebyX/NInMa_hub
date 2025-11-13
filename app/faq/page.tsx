'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

// Mock data - será substituído por dados reais da API/Prisma
const faqs = [
  {
    id: 1,
    question: 'O que é o NInMa Hub?',
    answer:
      'O NInMa Hub é o Hub de Inovação em Saúde Materno Infantil do Programa de Pós-Graduação em Saúde Materno Infantil da Universidade Franciscana. Somos um centro de pesquisa, desenvolvimento e inovação dedicado a melhorar os indicadores de saúde materno-infantil através de produtos, pesquisas e formação profissional.',
    category: 'Geral',
  },
  {
    id: 2,
    question: 'Como posso colaborar com o NInMa Hub?',
    answer:
      'Existem diversas formas de colaboração: como pesquisador, desenvolvendo projetos em parceria; como instituição, estabelecendo convênios; como aluno, ingressando em nossos programas de pós-graduação; ou como profissional, participando de eventos e capacitações. Entre em contato conosco para discutir oportunidades.',
    category: 'Colaboração',
  },
  {
    id: 3,
    question: 'Os produtos desenvolvidos estão disponíveis para uso?',
    answer:
      'Muitos de nossos produtos já estão disponíveis para uso, seja através de parcerias com instituições de saúde ou diretamente para o público. Cada produto possui suas especificidades de licenciamento e distribuição. Consulte a página específica do produto para mais informações.',
    category: 'Produtos',
  },
  {
    id: 4,
    question: 'Como posso acessar as pesquisas e artigos publicados?',
    answer:
      'Todos os nossos artigos estão disponíveis na seção "Artigos" do site. Muitos estão em acesso aberto, enquanto outros podem ser acessados através das plataformas das revistas científicas onde foram publicados. Também mantemos um repositório institucional com versões dos trabalhos.',
    category: 'Pesquisa',
  },
  {
    id: 5,
    question: 'Quais são os requisitos para ingressar no programa de pós-graduação?',
    answer:
      'Os requisitos incluem graduação completa na área da saúde ou áreas afins, aprovação no processo seletivo (que inclui análise de currículo e entrevista), e disponibilidade para dedicação aos estudos. Informações detalhadas sobre o processo seletivo são divulgadas periodicamente no site da Universidade Franciscana.',
    category: 'Formação',
  },
  {
    id: 6,
    question: 'O NInMa Hub oferece estágios ou bolsas de pesquisa?',
    answer:
      'Sim, regularmente oferecemos oportunidades de iniciação científica, estágios de pós-graduação e bolsas de pesquisa financiadas por agências de fomento como CNPq, CAPES e FAPERGS. As oportunidades são divulgadas em nossa seção de eventos e redes sociais.',
    category: 'Formação',
  },
  {
    id: 7,
    question: 'Como posso participar dos eventos organizados pelo hub?',
    answer:
      'Todos os nossos eventos são divulgados na seção "Eventos" do site e em nossas redes sociais. As inscrições geralmente são feitas online através de formulários específicos. Fique atento às datas de abertura de inscrições!',
    category: 'Eventos',
  },
  {
    id: 8,
    question: 'O hub presta serviços de consultoria?',
    answer:
      'Sim, oferecemos consultoria técnica e científica para instituições públicas e privadas nas áreas de saúde materno-infantil, desenvolvimento de produtos, pesquisa aplicada e formação profissional. Entre em contato para discutir sua necessidade.',
    category: 'Serviços',
  },
]

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null)

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

  return (
    <>
      {/* Hero */}
      <Section background="gray" className="pt-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-primary" aria-hidden="true" />
          </div>
          <h1 className="heading-1 text-gray-900 mb-6">Perguntas Frequentes</h1>
          <p className="body-large text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre o NInMa Hub. Não encontrou
            o que procura? Entre em contato conosco!
          </p>
        </div>

        {/* FAQs by Category */}
        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="heading-4 text-gray-900 mb-6">{category}</h2>
              <div className="space-y-4">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <Card key={faq.id} className="overflow-hidden">
                      <button
                        className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        aria-expanded={openId === faq.id}
                      >
                        <span className="heading-5 text-gray-900 pr-8">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            'w-6 h-6 text-primary flex-shrink-0 transition-transform',
                            openId === faq.id && 'rotate-180'
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {openId === faq.id && (
                        <div className="px-6 pb-6 body-normal text-gray-600 animate-slide-down">
                          {faq.answer}
                        </div>
                      )}
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="bg-primary-50 border-primary-100">
            <div className="p-8">
              <h3 className="heading-4 text-gray-900 mb-4">
                Não encontrou a resposta que procurava?
              </h3>
              <p className="body-normal text-gray-600 mb-6">
                Nossa equipe está pronta para ajudar. Entre em contato conosco!
              </p>
              <a href="/contato">
                <button className="btn btn-primary">
                  Fale Conosco
                </button>
              </a>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}
