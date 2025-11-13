# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

## [1.1.0] - 2024-11-13

### ✨ Novas Funcionalidades

#### 📤 Sistema de Upload de Imagens
- **Upload Local**: Sistema completo de upload para o servidor
- **Processamento de Imagens**: Redimensionamento automático com Sharp
- **Validação**: Tipo e tamanho de arquivo
- **Componente Drag & Drop**: Interface intuitiva com preview
- **Segurança**: Upload protegido por autenticação
- Arquivos salvos em `/public/uploads`
- API endpoint: `POST /api/upload`

**Componentes criados:**
- `components/admin/ImageUpload.tsx` - Componente de upload com drag & drop
- `lib/upload.ts` - Funções utilitárias de upload
- `app/api/upload/route.ts` - API de upload

#### 📚 CRUD Completo de Artigos
- **Listagem**: Página admin com tabela, filtros e busca
- **Criação**: Formulário completo com editor rico
- **Edição**: Atualização de artigos existentes
- **Deleção**: Remoção segura com confirmação
- **Gerenciamento**: Publicar/despublicar, destacar artigos
- **Metadados**: Autores, ano, journal, DOI, PDF

**Arquivos criados:**
- `app/api/articles/route.ts` - API de listagem e criação
- `app/api/articles/[id]/route.ts` - API de atualização e deleção
- `app/admin/artigos/page.tsx` - Listagem no admin
- `app/admin/artigos/novo/page.tsx` - Formulário de criação

#### ✍️ Editor Rico de Conteúdo (React Quill)
- **WYSIWYG**: Interface visual de edição
- **Formatação**: Negrito, itálico, listas, títulos
- **Mídia**: Inserção de links e imagens
- **Cores**: Customização de texto e fundo
- **Code Blocks**: Blocos de código formatados
- **Responsivo**: Funciona em todos os dispositivos

**Componente:**
- `components/admin/RichTextEditor.tsx`

#### 📄 Páginas de Detalhes Individuais
- **Produtos**: Página completa com todas as informações
- **Artigos**: Visualização científica profissional
- **SEO**: Meta tags dinâmicas por página
- **Compartilhamento**: Botões de share social
- **Sidebar**: Informações complementares e CTAs
- **Breadcrumbs**: Navegação contextual
- **Links relacionados**: Sugestões de conteúdo

**Páginas criadas:**
- `app/produtos/[slug]/page.tsx` - Detalhes do produto
- `app/artigos/[slug]/page.tsx` - Detalhes do artigo

#### 📧 Sistema de Email Funcional
- **Envio de Contato**: API integrada com Nodemailer
- **Email HTML**: Templates profissionais e responsivos
- **Confirmação**: Email automático ao remetente
- **Validação**: Campos e formato de email
- **SMTP**: Configuração flexível (Gmail, SendGrid, etc)
- **Modo Teste**: Desenvolvimento sem SMTP real

**Arquivos criados:**
- `lib/email.ts` - Funções de envio de email
- `app/api/contact/route.ts` - API de contato
- `components/forms/ContactForm.tsx` - Formulário funcional

### 🔧 Melhorias

#### Banco de Dados
- Schema Prisma completo para artigos
- Índices otimizados para busca
- Suporte a arrays (autores, tags)

#### UI/UX
- Componente ImageUpload drag & drop
- RichTextEditor integrado
- ContactForm com estados de loading/sucesso
- Validações em tempo real
- Feedback visual em todas as ações

#### Segurança
- Upload protegido por autenticação
- Validação de tipos de arquivo
- Limite de tamanho de upload
- Sanitização de dados

#### Developer Experience
- Tipos TypeScript completos
- Componentes reutilizáveis
- Código bem documentado
- Estrutura escalável

### 📦 Dependências Adicionadas

```json
{
  "nodemailer": "^6.9.14",
  "@types/nodemailer": "^6.4.15"
}
```

### 🗂️ Arquivos Criados/Modificados

**Novos arquivos (15):**
1. `lib/upload.ts`
2. `lib/email.ts`
3. `app/api/upload/route.ts`
4. `app/api/contact/route.ts`
5. `app/api/articles/route.ts`
6. `app/api/articles/[id]/route.ts`
7. `app/admin/artigos/page.tsx`
8. `app/admin/artigos/novo/page.tsx`
9. `app/produtos/[slug]/page.tsx`
10. `app/artigos/[slug]/page.tsx`
11. `components/admin/ImageUpload.tsx`
12. `components/admin/RichTextEditor.tsx`
13. `components/forms/ContactForm.tsx`
14. `app/contato/page_new.tsx`
15. `CHANGELOG.md`

**Modificados:**
- `package.json` - Adicionadas dependências
- `.env.example` - Configurações de email
- `ROADMAP.md` - Atualizado com progresso

### 🚀 Como Usar as Novas Features

#### Upload de Imagens

```tsx
import ImageUpload from '@/components/admin/ImageUpload'

<ImageUpload
  value={imageUrl}
  onChange={(url) => setImageUrl(url)}
  label="Imagem do Produto"
/>
```

#### Editor Rico

```tsx
import RichTextEditor from '@/components/admin/RichTextEditor'

<RichTextEditor
  value={content}
  onChange={(value) => setContent(value)}
  label="Conteúdo"
/>
```

#### Envio de Email

Configure as variáveis de ambiente:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="seu@email.com"
SMTP_PASS="sua-senha"
CONTACT_EMAIL="destino@email.com"
```

### 📊 Estatísticas

- **Linhas de código adicionadas**: ~2.500
- **Novos componentes**: 3
- **Novas APIs**: 4
- **Novas páginas**: 6
- **Tempo de desenvolvimento**: ~2 horas

### 🎯 Próximas Etapas

- [ ] Sistema de notificações em tempo real
- [ ] Dashboard com gráficos e analytics
- [ ] Exportação de dados (Excel, PDF)
- [ ] Sistema de comentários em artigos
- [ ] Integração com redes sociais
- [ ] Sistema de busca avançada
- [ ] Multi-idioma (i18n)

---

## [1.0.0] - 2024-11-13

### 🎉 Lançamento Inicial

- ✅ Site institucional completo
- ✅ Painel administrativo funcional
- ✅ Sistema de autenticação
- ✅ CRUD de produtos
- ✅ Design system profissional
- ✅ Responsividade completa
- ✅ Acessibilidade WCAG 2.1 AA
- ✅ SEO otimizado
- ✅ Documentação completa

---

Formato baseado em [Keep a Changelog](https://keepachangelog.com/)
