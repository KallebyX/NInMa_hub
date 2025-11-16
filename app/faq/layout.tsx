import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Perguntas Frequentes',
  description:
    'Encontre respostas para as dúvidas mais comuns sobre o NInMa Hub, nossos programas, produtos e serviços de saúde materno-infantil.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
