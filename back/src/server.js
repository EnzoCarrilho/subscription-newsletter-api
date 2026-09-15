/*************************************************************************
 * Objetivo: Arquivo responsável pelo funcionamento da API
 * Data: 15/09/2026
 * Developer: Enzo Carrilho
 * Versão: 1.0.0
 *************************************************************************/


//Import das dependencias da API
const express = require('express')
const cors =    require('cors') 


// Import das dependências para a documentação dos EndPoints da API 
//const swaggerUi         = require('swagger-ui-express')
//const swaggerDocument   = require('../doc/index.js')

// Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.env.PORT || 8080

// Criando instância da classe express
const app = express()

// Configuração de permissões de requisição
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

// Middleware para permitir JSON no body
app.use(express.json());

//EndPoint da documentação
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, () => {
    console.log(`API rodando na porta: ${PORT}`)
})