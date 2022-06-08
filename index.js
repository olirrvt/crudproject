const express = require('express');
const app = express();
const port = 4500;

app.use(express.json());

let produtos = [];
let usuarios = [];

app.get('/usuario', (request, response) => {
    console.log("Requisição recebida!")
    return response.json({produtos})
});

app.post('/produto', (request, response) => {
    const produto = request.body;
    produtos.push(produto);
    console.log("Produto recebido!")
    return response.send("Produto Cadastrado com Sucesso!")
})

app.put('/editar', (request, response) => {
    const { valor, nome, id } = request.body;
    const usuarioIndice = produtos.findIndex((prod) => prod.id === id)
    
    console.log(usuarioIndice)
    produtos[usuarioIndice] = {
        id: id,
        nome: nome,
        valor: valor
    }
    
    return response.json({produtos})
});

app.delete('/apagar', (request, response) => {
    const { nome } = request.body
    const produtoIndice = produtos.findIndex((prod) => prod.nome === nome)
    produtos.splice(produtoIndice,1)
    return response.send("Produto deletado com sucesso!")
})

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`)
})