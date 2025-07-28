# 📱 API Documentation - AchaDex Mobile App

## 🔐 Autenticação

### Login Mobile
```
POST /api/auth/mobile
```

**Request Body:**
```json
{
  "email": "admin@achadex.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "Administrador",
    "email": "admin@achadex.com",
    "role": "ADMIN"
  }
}
```

## 📦 Produtos

### Listar Produtos
```
GET /api/products
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "id": "product_id",
    "name": "Smartphone Galaxy S23",
    "description": "Smartphone Samsung Galaxy S23 com 128GB",
    "price": 2999.99,
    "image": "https://example.com/image.jpg",
    "category": {
      "id": "category_id",
      "name": "Eletrônicos"
    },
    "user": {
      "name": "Administrador",
      "email": "admin@achadex.com"
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### Criar Produto
```
POST /api/products
```

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Novo Produto",
  "description": "Descrição do produto",
  "price": 99.99,
  "categoryId": "category_id",
  "image": "https://example.com/image.jpg"
}
```

**Response:**
```json
{
  "id": "new_product_id",
  "name": "Novo Produto",
  "description": "Descrição do produto",
  "price": 99.99,
  "image": "https://example.com/image.jpg",
  "category": {
    "id": "category_id",
    "name": "Eletrônicos"
  },
  "user": {
    "name": "Administrador",
    "email": "admin@achadex.com"
  },
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## 🏷️ Categorias

### Listar Categorias
```
GET /api/categories
```

**Response:**
```json
[
  {
    "id": "category_id",
    "name": "Eletrônicos",
    "description": "Produtos eletrônicos e tecnologia",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

## 🔧 Implementação no Android

### 1. Configuração do Retrofit

```kotlin
interface AchaDexApi {
    @POST("auth/mobile")
    suspend fun login(@Body loginRequest: LoginRequest): LoginResponse
    
    @GET("products")
    suspend fun getProducts(@Header("Authorization") token: String): List<Product>
    
    @POST("products")
    suspend fun createProduct(
        @Header("Authorization") token: String,
        @Body product: CreateProductRequest
    ): Product
    
    @GET("categories")
    suspend fun getCategories(): List<Category>
}
```

### 2. Modelos de Dados

```kotlin
data class LoginRequest(
    val email: String,
    val password: String
)

data class LoginResponse(
    val success: Boolean,
    val token: String,
    val user: User
)

data class Product(
    val id: String,
    val name: String,
    val description: String,
    val price: Double,
    val image: String?,
    val category: Category,
    val createdAt: String,
    val updatedAt: String
)

data class CreateProductRequest(
    val name: String,
    val description: String,
    val price: Double,
    val categoryId: String,
    val image: String?
)
```

### 3. Exemplo de Uso

```kotlin
class ProductRepository {
    private val api: AchaDexApi = // Configurar Retrofit
    
    suspend fun login(email: String, password: String): LoginResponse {
        return api.login(LoginRequest(email, password))
    }
    
    suspend fun getProducts(token: String): List<Product> {
        return api.getProducts("Bearer $token")
    }
    
    suspend fun createProduct(token: String, product: CreateProductRequest): Product {
        return api.createProduct("Bearer $token", product)
    }
}
```

## 🚀 URLs de Produção

- **Base URL:** `https://achadex-site-final.vercel.app`
- **Login:** `POST /api/auth/mobile`
- **Produtos:** `GET/POST /api/products`
- **Categorias:** `GET /api/categories`

## 🔑 Credenciais de Teste

- **Email:** `admin@achadex.com`
- **Senha:** `admin123`

## 📱 Funcionalidades do App

1. **Login Administrativo**
   - Autenticação segura com JWT
   - Validação de permissões

2. **Gerenciamento de Produtos**
   - Listar produtos
   - Adicionar novos produtos
   - Editar produtos existentes
   - Excluir produtos

3. **Categorias**
   - Visualizar categorias disponíveis
   - Selecionar categoria ao criar produto

4. **Upload de Imagens**
   - Suporte a imagens de produtos
   - URLs de imagem opcionais

## 🔒 Segurança

- Autenticação JWT obrigatória
- Validação de permissões de admin
- Tokens com expiração de 7 dias
- Validação de dados no servidor 