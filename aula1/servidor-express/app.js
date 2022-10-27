const express = require("express");

const app = express();
const port = 3000;

//Rotas
app.get("/", (req, res) => {
    console.log("Servidor foi chamado");
    res.send(`
    <h1>Hello World!</h1>`);
})

app.get("/testeRota", (req, res) => {
    console.log("Página de usuários foi chamada");
    res.send("<h1>TesteRota</h1>");
});


//Disponibiliza o servidor, colocando-0 em modo de escuta
app.listen(port, () => {
    console.log(`Server running at ${port}`);
});