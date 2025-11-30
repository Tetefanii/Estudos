import express from "express";

const app = express();
const PORT = 3000;
const objResponse = {nome: "Tete", cargo: "estudante"};

app.get("/", (req, res) => {
    res.json(objResponse)
});

app.listen(PORT, ()=> console.log(`O servidor está rodando na porta ${PORT}`));