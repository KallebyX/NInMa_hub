'use client'

import { useState } from 'react'
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
    category: 'Geral',
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
    category: 'Pós-Graduação',
  },
  {
    id: 6,
    question: 'O NInMa Hub oferece estágios ou bolsas de pesquisa?',
    answer:
      'Sim, regularmente oferecemos oportunidades de iniciação científica, estágios de pós-graduação e bolsas de pesquisa financiadas por agências de fomento como CNPq, CAPES e FAPERGS. As oportunidades são divulgadas em nossa seção de eventos e redes sociais.',
    category: 'Pós-Graduação',
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
    category: 'Geral',
  },
  // Perguntas para o Público Geral
  {
    id: 9,
    question: 'Até quando devo amamentar meu bebê?',
    answer:
      'A Organização Mundial da Saúde (OMS) recomenda o aleitamento materno exclusivo até os 6 meses de idade e a continuação da amamentação, complementada com outros alimentos, até os 2 anos ou mais. O leite materno fornece nutrientes essenciais e proteção contra infecções. Consulte sempre seu pediatra para orientações personalizadas.',
    category: 'Saúde Materno-Infantil',
  },
  {
    id: 10,
    question: 'Quando devo iniciar o pré-natal?',
    answer:
      'O ideal é iniciar o pré-natal assim que descobrir a gravidez ou suspeitar dela. O acompanhamento precoce permite identificar e tratar problemas de saúde antes que se tornem graves, além de orientar a gestante sobre cuidados importantes durante a gravidez. O Ministério da Saúde recomenda no mínimo 6 consultas de pré-natal.',
    category: 'Saúde Materno-Infantil',
  },
  {
    id: 11,
    question: 'O que é parto humanizado?',
    answer:
      'Parto humanizado é uma abordagem que respeita o protagonismo da mulher, oferecendo a ela autonomia nas decisões sobre seu parto, com mínimas intervenções médicas desnecessárias. Inclui práticas baseadas em evidências científicas, respeito ao tempo da mulher e do bebê, e promoção de um ambiente acolhedor. Não significa parto sem assistência médica.',
    category: 'Saúde Materno-Infantil',
  },
  {
    id: 12,
    question: 'Como identificar sinais de depressão pós-parto?',
    answer:
      'Sinais incluem tristeza profunda e persistente, choro frequente, perda de interesse em atividades, dificuldade de se conectar com o bebê, mudanças no sono e apetite, pensamentos negativos recorrentes e, em casos graves, pensamentos de fazer mal a si ou ao bebê. Se você ou alguém próximo apresenta esses sintomas, procure ajuda profissional imediatamente. A depressão pós-parto é tratável.',
    category: 'Saúde Materno-Infantil',
  },
  {
    id: 13,
    question: 'Quando começar a introdução alimentar?',
    answer:
      'A introdução de alimentos sólidos deve começar aos 6 meses de idade, mantendo o aleitamento materno. Antes disso, o leite materno ou fórmula infantil são suficientes para suprir as necessidades nutricionais do bebê. Consulte sempre um pediatra ou nutricionista para orientações sobre como iniciar e quais alimentos oferecer.',
    category: 'Saúde Materno-Infantil',
  },
  {
    id: 14,
    question: 'As vacinas são seguras para bebês?',
    answer:
      'Sim! As vacinas são seguras e essenciais para proteger bebês e crianças de doenças graves. Os benefícios das vacinas superam amplamente os riscos. Efeitos colaterais são geralmente leves e temporários. O calendário de vacinação do Ministério da Saúde é baseado em evidências científicas sólidas. Mantenha a carteira de vacinação sempre atualizada.',
    category: 'Saúde Materno-Infantil',
  },
  {
    id: 15,
    question: 'É normal o bebê chorar muito?',
    answer:
      'Chorar é a forma principal de comunicação do bebê, especialmente nos primeiros meses. Bebês choram quando têm fome, desconforto, sono, precisam de troca de fralda ou simplesmente querem colo. Porém, choro intenso e inconsolável (mais de 3 horas por dia, por mais de 3 dias por semana) pode indicar cólicas ou outro problema. Consulte o pediatra se estiver preocupado.',
    category: 'Saúde Materno-Infantil',
  },
  {
    id: 16,
    question: 'Posso fazer exercícios durante a gravidez?',
    answer:
      'Sim, na maioria dos casos. Exercícios moderados durante a gravidez trazem benefícios para a mãe e o bebê, incluindo melhor controle de peso, redução de dores nas costas e preparação para o parto. Atividades como caminhada, natação e yoga são geralmente seguras. Sempre consulte seu médico antes de iniciar ou continuar uma rotina de exercícios durante a gestação.',
    category: 'Saúde Materno-Infantil',
  },
  {
    id: 17,
    question: 'Como saber se meu bebê está se desenvolvendo bem?',
    answer:
      'O acompanhamento regular com o pediatra é fundamental. O médico avaliará crescimento (peso, altura), desenvolvimento motor (como o bebê se movimenta), desenvolvimento cognitivo e social. Marcos importantes incluem: sorrir (2-3 meses), segurar a cabeça (4 meses), sentar (6-8 meses), engatinhar (7-10 meses), andar (12-15 meses). Cada bebê tem seu próprio ritmo, mas consulte o pediatra se tiver preocupações.',
    category: 'Saúde Materno-Infantil',
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
