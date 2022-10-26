const http = require("http");
const fs = require("fs");

const port = 3000;
const hostname = "127.0.0.1" //localhost

const content = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html"); //isso é padrão, então pode não existir (mas eu não entendi bem)
    //com res.end()
    // res.end(`
    // <h1>Hello World</h1>
    // Olha que bonito`);

    //com res.write() e res.end()
    // res.write("<h1>Hello World</h1>"");
    // res.end();

    //passando o content
    res.end(content);
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
});