// Importando a biblioteca Express para criar a aplicação web
import express from "express";

// Criando uma nova aplicação Express
const app = express();

// Iniciando o servidor na porta 3000 e mostrando uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000!");
});

// Definindo uma rota para a raiz da aplicação (/)
app.get("/", (req, res) => {
    // Enviando a mensagem "Hello, World!" como resposta
    res.send("Hello, World!");
});
