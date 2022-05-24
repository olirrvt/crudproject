const express = require('express');
const app = express();
const port = 4500;

app.use(express.json());

let produtos = [];
let usuarios = [];

app.get('/usuario', (request, response) => {
    return response.json({produtos})
});

app.post('/produto', (request, response) => {
    const produto = request.body;
    produtos.push(produto);
    return response.send("Produto Cadastrado com Sucesso!")
})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})