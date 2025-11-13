# 🚀 Guia de Início Rápido - NInMa Hub

Este guia irá te ajudar a configurar e executar o projeto em poucos minutos.

## ⚡ Setup Rápido

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Banco de Dados

#### Opção A: PostgreSQL Local

Certifique-se de ter o PostgreSQL instalado e rodando, então:

```bash
# Criar banco de dados
createdb ninma_hub

# Atualizar .env com suas credenciais
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/ninma_hub"
```

#### Opção B: PostgreSQL na Nuvem (Recomendado para testes)

Use um serviço gratuito como:
- [Supabase](https://supabase.com/)
- [Neon](https://neon.tech/)
- [Railway](https://railway.app/)

### 3. Configurar Variáveis de Ambiente

```bash
cp .env.example .env
```

Edite `.env` e configure:

```env
DATABASE_URL="sua-url-do-banco"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="cole-aqui-o-secret-gerado"
ADMIN_EMAIL="admin@ninmahub.com"
ADMIN_PASSWORD="SuaSenhaSegura123!"
```

Gere o NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### 4. Inicializar Banco de Dados

```bash
# Sincronizar schema
npx prisma db push

# Criar usuário admin e dados de exemplo
npm run seed
```

### 5. Iniciar o Projeto

```bash
npm run dev
```

Acesse: http://localhost:3000

## 🔐 Acessar Painel Admin

1. Vá para: http://localhost:3000/admin/login
2. Use as credenciais do `.env`:
   - Email: admin@ninmahub.com
   - Senha: (a que você configurou)

## 📝 Comandos Importantes

```bash
# Desenvolvimento
npm run dev                # Iniciar servidor

# Prisma
npx prisma studio         # Interface visual do banco
npx prisma generate       # Gerar cliente Prisma
npx prisma db push        # Sincronizar schema

# Build
npm run build             # Build de produção
npm start                 # Rodar build
```

## 🎨 Personalizações Rápidas

### Alterar Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  primary: { DEFAULT: '#604E9E', ... },
  secondary: { DEFAULT: '#6FB9A1', ... },
  accent: { DEFAULT: '#F3A65A', ... },
}
```

### Alterar Logo

Substitua o SVG em `components/ui/Logo.tsx`

### Alterar Informações de Contato

Edite `components/layout/Footer.tsx`

## 🐛 Problemas Comuns

### Erro de conexão com banco

- Verifique se o PostgreSQL está rodando
- Confirme as credenciais no `.env`
- Teste a conexão: `psql $DATABASE_URL`

### Erro "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro no Prisma

```bash
npx prisma generate
npx prisma db push --force-reset
npm run seed
```

## 📚 Próximos Passos

1. ✅ Acesse o painel admin
2. ✅ Adicione produtos, artigos e conteúdos
3. ✅ Personalize as páginas públicas
4. ✅ Configure upload de imagens
5. ✅ Faça deploy em produção

## 🆘 Precisa de Ajuda?

- 📖 Leia o [README.md](./README.md) completo
- 🐛 Verifique os logs do console
- 💬 Entre em contato: contato@ninmahub.com

---

**Dica**: Use `npx prisma studio` para gerenciar dados diretamente no banco de forma visual!
