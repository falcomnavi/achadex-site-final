# 🚀 AchaDex - Sistema Completo

Um sistema moderno com site web e API para app Android, construído com Next.js, TypeScript, Prisma e NextAuth.

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações suaves
- **Prisma** - ORM para banco de dados
- **NextAuth.js** - Autenticação
- **SQLite** - Banco de dados
- **JWT** - Tokens de autenticação

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd achadex-site-final
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados:
```bash
npm run db:generate
npm run db:push
npm run db:seed
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔐 Acesso Administrativo

- **URL:** `http://localhost:3000/admin/login`
- **Email:** `admin@achadex.com`
- **Senha:** `admin123`

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run db:generate` - Gera o cliente Prisma
- `npm run db:push` - Sincroniza o banco de dados
- `npm run db:seed` - Popula o banco com dados iniciais

## 📁 Estrutura do Projeto

```
achadex-site-final/
├── app/
│   ├── admin/           # Painel administrativo
│   │   ├── login/       # Página de login
│   │   └── dashboard/   # Dashboard admin
│   ├── api/             # APIs REST
│   │   ├── auth/        # Autenticação
│   │   ├── products/    # Produtos
│   │   └── categories/  # Categorias
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página inicial
├── components/          # Componentes reutilizáveis
├── prisma/             # Schema do banco de dados
├── scripts/            # Scripts de inicialização
└── package.json        # Dependências e scripts
```

## 🎨 Características

### 🌐 Site Web
- **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- **Animações Suaves** - Transições e animações com Framer Motion
- **Performance Otimizada** - Otimizado para velocidade e SEO
- **Acessibilidade** - Seguindo as melhores práticas de acessibilidade

### 🔐 Sistema Administrativo
- **Autenticação Segura** - Login com NextAuth.js
- **Painel Administrativo** - Dashboard completo
- **Gerenciamento de Produtos** - CRUD completo
- **Proteção de Rotas** - Acesso restrito a administradores

### 📱 API para App Android
- **REST API** - Endpoints para produtos e categorias
- **Autenticação JWT** - Tokens seguros para mobile
- **Documentação Completa** - Veja `API_DOCS.md`

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente:
   - `DATABASE_URL` - URL do banco de dados
   - `NEXTAUTH_SECRET` - Chave secreta para NextAuth
   - `JWT_SECRET` - Chave secreta para JWT
3. Deploy automático a cada push

### Variáveis de Ambiente
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET="your-jwt-secret-key-here"
```

## 📱 App Android

### Funcionalidades
- ✅ Login administrativo
- ✅ Listar produtos
- ✅ Adicionar produtos
- ✅ Editar produtos
- ✅ Excluir produtos
- ✅ Gerenciar categorias

### Documentação da API
Veja o arquivo `API_DOCS.md` para detalhes completos da implementação no Android.

## 🔒 Segurança

- **Autenticação JWT** - Tokens seguros com expiração
- **Validação de Permissões** - Apenas admins podem modificar dados
- **Validação de Dados** - Verificação no servidor
- **Proteção de Rotas** - Middleware de autenticação

## 📊 Banco de Dados

- **SQLite** - Banco local para desenvolvimento
- **Prisma** - ORM moderno e type-safe
- **Migrações** - Controle de versão do banco
- **Seed Data** - Dados iniciais automáticos

## 🎯 Próximos Passos

1. **Deploy no Vercel** - Configure as variáveis de ambiente
2. **App Android** - Implemente usando a API documentada
3. **Upload de Imagens** - Integre com serviço de storage
4. **Notificações** - Implemente push notifications
5. **Analytics** - Adicione métricas de uso

## 📝 Licença

Este projeto está sob a licença MIT. 