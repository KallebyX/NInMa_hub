# NInMa Hub - Hub de Inovação em Saúde Materno Infantil

Site institucional do Hub de Inovação em Saúde Materno Infantil do Programa de Pós-Graduação em Saúde Materno Infantil da Universidade Franciscana.

## 🚀 Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Banco de Dados**: PostgreSQL + Prisma ORM
- **Autenticação**: NextAuth.js
- **Validação**: Zod + React Hook Form
- **Ícones**: Lucide React
- **Animações**: Framer Motion

## 🎨 Design System

### Cores

- **Primária**: `#604E9E` (Roxo)
- **Secundária**: `#6FB9A1` (Verde-azulado)
- **Apoio**: `#F3A65A` (Laranja)

### Tipografia

- **Fonte Principal**: Vagron BT

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

## 🔧 Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd NInMa_hub
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure as variáveis:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/ninma_hub"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="seu-secret-aqui-gere-um-seguro"

# Admin Credentials (First Time Setup)
ADMIN_EMAIL="admin@ninmahub.com"
ADMIN_PASSWORD="suaSenhaSegura123"
```

**Importante**: Gere um `NEXTAUTH_SECRET` seguro usando:

```bash
openssl rand -base64 32
```

### 4. Configure o banco de dados

Execute as migrações do Prisma:

```bash
npx prisma generate
npx prisma db push
```

### 5. Crie o usuário administrador

Execute o script de seed para criar o primeiro usuário admin:

```bash
npm run seed
```

Ou crie manualmente via Prisma Studio:

```bash
npx prisma studio
```

### 6. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000

## 🔐 Acesso ao Painel Administrativo

1. Acesse http://localhost:3000/admin/login
2. Use as credenciais configuradas no `.env`:
   - Email: `admin@ninmahub.com`
   - Senha: configurada em `ADMIN_PASSWORD`

## 📁 Estrutura do Projeto

```
NInMa_hub/
├── app/                      # Rotas do Next.js (App Router)
│   ├── (public)/            # Rotas públicas
│   │   ├── page.tsx         # Home
│   │   ├── sobre/           # Sobre nós
│   │   ├── produtos/        # Produtos
│   │   ├── artigos/         # Artigos
│   │   ├── videos/          # Vídeos
│   │   ├── curiosidades/    # Curiosidades
│   │   ├── faq/             # Perguntas frequentes
│   │   ├── eventos/         # Eventos
│   │   ├── premios/         # Prêmios
│   │   ├── contato/         # Contato
│   │   └── localizacao/     # Localização
│   ├── admin/               # Painel administrativo
│   │   ├── dashboard/       # Dashboard
│   │   ├── produtos/        # Gerenciar produtos
│   │   ├── artigos/         # Gerenciar artigos
│   │   ├── videos/          # Gerenciar vídeos
│   │   └── ...              # Outras seções
│   ├── api/                 # API Routes
│   │   ├── auth/            # Autenticação
│   │   ├── products/        # CRUD de produtos
│   │   └── ...              # Outras APIs
│   ├── layout.tsx           # Layout raiz
│   └── globals.css          # Estilos globais
├── components/              # Componentes React
│   ├── ui/                  # Componentes UI base
│   ├── layout/              # Header, Footer
│   ├── sections/            # Seções da home
│   └── admin/               # Componentes admin
├── lib/                     # Bibliotecas e utilitários
│   ├── prisma.ts           # Cliente Prisma
│   ├── auth.ts             # Configuração NextAuth
│   └── utils.ts            # Funções auxiliares
├── prisma/
│   └── schema.prisma       # Schema do banco de dados
├── types/                   # Tipos TypeScript
└── public/                  # Arquivos estáticos
```

## 🎯 Funcionalidades

### Área Pública

- ✅ Página inicial com seções dinâmicas
- ✅ Sobre nós (missão, visão, valores)
- ✅ Listagem de produtos
- ✅ Listagem de artigos científicos
- ✅ Listagem de vídeos educativos
- ✅ Curiosidades sobre saúde materno-infantil
- ✅ FAQ (Perguntas frequentes)
- ✅ Eventos e agenda
- ✅ Prêmios e reconhecimentos
- ✅ Formulário de contato
- ✅ Localização e informações

### Painel Administrativo

- ✅ Dashboard com estatísticas
- ✅ Autenticação segura (NextAuth)
- ✅ CRUD completo de produtos
- ✅ CRUD de artigos científicos
- ✅ CRUD de vídeos
- ✅ CRUD de curiosidades
- ✅ Gerenciamento de FAQ
- ✅ Gerenciamento de eventos
- ✅ Gerenciamento de prêmios
- ✅ Gerenciamento de notícias
- ✅ Gerenciamento de equipe
- ✅ Sistema de busca e filtros
- ✅ Upload de imagens (em desenvolvimento)

### Design e UX

- ✅ Design 100% profissional
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Acessibilidade (WCAG 2.1 AA)
- ✅ Animações suaves (Framer Motion)
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🔨 Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Inicia o servidor de desenvolvimento

# Build
npm run build            # Cria build de produção
npm run start            # Inicia servidor de produção

# Prisma
npm run prisma:generate  # Gera cliente Prisma
npm run prisma:push      # Sincroniza schema com DB
npm run prisma:studio    # Abre Prisma Studio

# Lint
npm run lint             # Executa ESLint
```

## 🗃️ Banco de Dados

O projeto usa PostgreSQL com Prisma ORM. O schema inclui:

- **Users**: Usuários administrativos
- **Products**: Produtos desenvolvidos
- **Articles**: Artigos científicos
- **Videos**: Vídeos educativos
- **Curiosities**: Curiosidades
- **Faq**: Perguntas frequentes
- **Events**: Eventos e agenda
- **Awards**: Prêmios e reconhecimentos
- **News**: Notícias
- **TeamMembers**: Membros da equipe
- **SiteConfig**: Configurações do site

## 🔒 Segurança

- Autenticação via NextAuth.js com JWT
- Senhas criptografadas com bcrypt
- Middleware de proteção de rotas
- Validação de dados com Zod
- SQL Injection protegido pelo Prisma
- XSS protegido pelo React

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Acessibilidade

- Navegação por teclado
- Leitores de tela (ARIA labels)
- Contraste de cores adequado
- Textos alternativos em imagens
- Foco visível em elementos interativos
- Skip to content link

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- DigitalOcean App Platform

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Universidade Franciscana - NInMa Hub.

## 📞 Contato

**NInMa Hub**
- Email: contato@ninmahub.com
- Telefone: (55) 3321-9000
- Endereço: Universidade Franciscana, Rua dos Andradas, 1614, Santa Maria - RS

---

Desenvolvido com ❤️ para transformar a saúde materno-infantil através da inovação.
