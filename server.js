// Importando a biblioteca Express para criar a aplicação web
import express from "express";

// Criando uma lista (array) de posts sobre catíneos :)
const posts = [
    {
      descricao: "Gatinho fofinho",
      imagem: "https://placecats.com/millie/300/150",
      id: 1
    },
    {
      descricao: "Gatinho comendo bananinha",
      imagem: "https://placecats.com/neo_banana/300/200",
      id: 2
    },
    {
      descricao: "Olha que cachorrinho mais lindo!",
      imagem: "https://picsum.photos/id/237/300/200",
      id: 3
    },
    {
      descricao: "Gatos são os melhores!",
      imagem: "https://source.unsplash.com/random/300x200/?cat",
      id: 4
    },
    {
      descricao: "Gato julgando todo fofinho",
      imagem: "https://loremflickr.com/300/200/cat",
      id: 5
    }
  ];

// Criando uma nova aplicação Express
const app = express();
app.use(express.json());

// Iniciando o servidor na porta 3000 e mostrando uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000!");
});

// Definindo uma rota para a raiz da aplicação (/)
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

// Buscando o dado dentro de uma estrutura
function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

// Definindo uma rota para o index (/)
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});
