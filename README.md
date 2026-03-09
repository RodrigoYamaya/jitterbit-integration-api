# Orders Management API - Jitterbit Challenge

Esta é uma API REST desenvolvida em Node.js para o gerenciamento de pedidos, com suporte a mapeamento de dados (Mapping), documentação automática com Swagger e autenticação JWT.

##   Tecnologias Utilizadas
- **Node.js** & **Express**
- **MySQL/PostgreSQL** (ou o banco que você usou)
- **JWT** (JSON Web Token) para segurança
- **Swagger UI** para documentação

##   Funcionalidades e Decisões Técnicas

### 1. Mapeamento de Dados (Mapping)
Conforme solicitado no desafio, a API recebe um JSON de entrada (formato legado) e realiza o mapeamento automático para o esquema do banco de dados:
- O campo `idItem` é mapeado e salvo como `productId`.
- A estrutura de itens é processada para garantir a integridade referencial com o pedido principal.

### 2. Autenticação JWT
Implementei uma camada de segurança simples para proteger as rotas de Pedidos.
- **Rota de Login:** `POST /login`
- **Credenciais de Teste:** Usuário: `admin` | Senha: `1234`
- *Obs: Em produção, estas credenciais seriam validadas via Hash Bcrypt no banco de dados.*

### 3. Documentação Automática
A API possui interface do Swagger integrada. Com o servidor rodando, acesse:
  [http://localhost:3000/docs](http://localhost:3000/docs)

## Como Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure o arquivo `.env` (utilize o `.env.example` como base).
4. Execute o script SQL contido em `database.sql` no seu banco de dados.
5. Inicie o servidor: `npm start`.

