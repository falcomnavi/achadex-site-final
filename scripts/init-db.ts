import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'

async function main() {
  console.log('🚀 Inicializando banco de dados...')

  // Criar categorias padrão
  const categories = [
    { name: 'Eletrônicos', description: 'Produtos eletrônicos e tecnologia' },
    { name: 'Vestuário', description: 'Roupas e acessórios' },
    { name: 'Casa e Jardim', description: 'Produtos para casa e jardim' },
    { name: 'Esportes', description: 'Produtos esportivos' },
    { name: 'Livros', description: 'Livros e publicações' }
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: category
    })
  }

  console.log('✅ Categorias criadas')

  // Criar usuário admin
  const adminEmail = 'admin@achadex.com'
  const adminPassword = 'admin123'
  const hashedPassword = await bcrypt.hash(adminPassword, 12)

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN'
    }
  })

  console.log('✅ Usuário admin criado')
  console.log('📧 Email: admin@achadex.com')
  console.log('🔑 Senha: admin123')

  // Criar alguns produtos de exemplo
  const sampleProducts = [
    {
      name: 'Smartphone Galaxy S23',
      description: 'Smartphone Samsung Galaxy S23 com 128GB',
      price: 2999.99,
      categoryName: 'Eletrônicos'
    },
    {
      name: 'Tênis Nike Air Max',
      description: 'Tênis esportivo Nike Air Max para corrida',
      price: 599.99,
      categoryName: 'Esportes'
    },
    {
      name: 'Livro React Native',
      description: 'Guia completo de React Native para desenvolvimento mobile',
      price: 89.90,
      categoryName: 'Livros'
    }
  ]

  for (const product of sampleProducts) {
    const category = await prisma.category.findUnique({
      where: { name: product.categoryName }
    })

    if (category) {
      const admin = await prisma.user.findUnique({
        where: { email: adminEmail }
      })

      if (admin) {
        await prisma.product.upsert({
          where: { 
            id: `sample-${product.name.toLowerCase().replace(/\s+/g, '-')}`
          },
          update: {},
          create: {
            id: `sample-${product.name.toLowerCase().replace(/\s+/g, '-')}`,
            name: product.name,
            description: product.description,
            price: product.price,
            categoryId: category.id,
            userId: admin.id
          }
        })
      }
    }
  }

  console.log('✅ Produtos de exemplo criados')
  console.log('🎉 Banco de dados inicializado com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro ao inicializar banco:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 