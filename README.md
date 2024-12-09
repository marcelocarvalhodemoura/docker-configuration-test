# Ambiente Multi-Container com Docker Compose

## Visão Geral
Este projeto configura um ambiente multi-container usando Docker Compose com uma aplicação Node.js e um banco de dados PostgreSQL.

## Pré-requisitos
- Docker
- Docker Compose

## Instruções de Configuração

### 1. Clone o Repositório
```
git clone https://github.com/marcelocarvalhodemoura/docker-configuration-test.git
cd docker-configuration-test
```

### 2. Configure as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
```
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```
Ajuste os valores conforme necessário.

### 3. Construa e Execute os Containers
Use o Docker Compose para construir e executar os containers:
```
docker-compose up --build
```
Este comando iniciará a aplicação Node.js e o banco de dados PostgreSQL.

### 4. Acesse a Aplicação
A aplicação estará acessível em `http://localhost:3000`.

## Configuração do Banco de Dados
- O banco de dados PostgreSQL é configurado com um volume persistente para garantir a persistência dos dados.
- As credenciais do banco de dados são gerenciadas usando variáveis de ambiente.

## Considerações de Segurança
- Evite usar o usuário root para operações no banco de dados.
- Use variáveis de ambiente para gerenciar configurações sensíveis.

## Solução de Problemas
- Certifique-se de que o Docker e o Docker Compose estão instalados e em execução.
- Verifique se as variáveis de ambiente no arquivo `.env` estão configuradas corretamente.
