# 🚀 Guia de Deploy - AchaDex

## 📋 Pré-requisitos

1. **Conta no Vercel** - [vercel.com](https://vercel.com)
2. **Conta no GitHub** - [github.com](https://github.com)
3. **Banco de dados PostgreSQL** - Recomendamos [Neon](https://neon.tech) ou [Supabase](https://supabase.com)

## 🔧 Configuração do Banco de Dados

### Opção 1: Neon (Recomendado)
1. Acesse [neon.tech](https://neon.tech)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Copie a URL de conexão

### Opção 2: Supabase
1. Acesse [supabase.com](https://supabase.com)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Vá em Settings > Database
5. Copie a URL de conexão

## 🔑 Configuração das Variáveis de Ambiente

### No Vercel:
1. Vá para o dashboard do seu projeto
2. Clique em "Settings" > "Environment Variables"
3. Adicione as seguintes variáveis:

```env
DATABASE_URL="postgresql://user:password@host:port/database"
NEXTAUTH_SECRET="sua-chave-secreta-aqui"
NEXTAUTH_URL="https://seu-dominio.vercel.app"
JWT_SECRET="sua-chave-jwt-aqui"
```

### Gerando Chaves Secretas:
```bash
# Para NEXTAUTH_SECRET
openssl rand -base64 32

# Para JWT_SECRET
openssl rand -base64 32
```

## 🚀 Deploy no Vercel

### Método 1: Via GitHub (Recomendado)
1. **Push para GitHub:**
   ```bash
   git add .
   git commit -m "Preparando para deploy"
   git push origin main
   ```

2. **Conectar ao Vercel:**
   - Vá para [vercel.com](https://vercel.com)
   - Clique "New Project"
   - Importe o repositório do GitHub
   - Configure as variáveis de ambiente
   - Clique "Deploy"

### Método 2: Via Vercel CLI
1. **Instalar CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login e Deploy:**
   ```bash
   vercel login
   vercel
   ```

## 🗄️ Configuração do Banco de Dados

### Após o Deploy:
1. **Acesse o projeto no Vercel**
2. **Vá para "Functions" > "View Function Logs"**
3. **Execute o comando de migração:**
   ```bash
   npx prisma db push
   ```

4. **Popule o banco com dados iniciais:**
   ```bash
   npm run db:seed
   ```

## 🔍 Verificação do Deploy

### 1. Teste o Site Principal
- Acesse: `https://seu-dominio.vercel.app`
- Verifique se o site carrega corretamente

### 2. Teste o Login Admin
- Acesse: `https://seu-dominio.vercel.app/admin/login`
- Use as credenciais: `admin@achadex.com` / `admin123`

### 3. Teste a API
- Acesse: `https://seu-dominio.vercel.app/api/products`
- Deve retornar uma lista de produtos

## 🛠️ Troubleshooting

### Erro: "Database connection failed"
- Verifique se a `DATABASE_URL` está correta
- Certifique-se de que o banco está acessível

### Erro: "NextAuth configuration error"
- Verifique se `NEXTAUTH_SECRET` está definida
- Verifique se `NEXTAUTH_URL` está correta

### Erro: "Build failed"
- Verifique os logs no Vercel
- Certifique-se de que todas as dependências estão instaladas

## 📱 Configuração para App Android

### URLs de Produção:
```kotlin
const val BASE_URL = "https://seu-dominio.vercel.app"
const val API_BASE_URL = "$BASE_URL/api"
```

### Endpoints:
- Login: `POST $API_BASE_URL/auth/mobile`
- Produtos: `GET $API_BASE_URL/products`
- Categorias: `GET $API_BASE_URL/categories`

## 🔒 Segurança

### Recomendações:
1. **Use HTTPS sempre**
2. **Configure CORS adequadamente**
3. **Monitore os logs do Vercel**
4. **Use variáveis de ambiente para secrets**
5. **Configure rate limiting se necessário**

## 📊 Monitoramento

### Vercel Analytics:
- Ative o Vercel Analytics no dashboard
- Monitore performance e erros

### Logs:
- Acesse "Functions" > "View Function Logs"
- Monitore erros e performance

## 🎯 Próximos Passos

1. **Configure um domínio personalizado**
2. **Implemente backup automático do banco**
3. **Configure monitoramento avançado**
4. **Implemente CI/CD completo**

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no Vercel
2. Teste localmente primeiro
3. Verifique a documentação do NextAuth
4. Consulte a documentação do Prisma 