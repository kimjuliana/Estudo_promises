// importando os pacotes para uso no arquivo index.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// crio um servidor express
const app = express();

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// DB local (tempo de execução)
const data = [];

// criação de rota que será acessada utilizando o método HTTP GET/
// http://localhost:9001/
app.get('/', (req, res) => {
  return res.json({ data });
});

// criação de rota que será acessada utilizando o método HTTP POST/
// http://localhost:9001/add
app.post('/add', (req, res) => {
  const result = req.body;

  if (!result) {
    return res.status(400).end();
  }

  data.push(result);
  return res.json({ result });
});

//var Request = require("request");

//Request.get("http://localhost:9000", (error, response, body) => {
//    if(error) {
//        return console.dir(error);
//    }
//    console.dir(JSON.parse(body));
//});

//var Request = require("request");

//Request.post({
//    "headers": { "content-type": "application/json" },
//    "url": "http://httpbin.org/post",
//    "body": JSON.stringify({
//        "firstname": "Nic",
//        "lastname": "Raboy"
//    })
//}, (error, response, body) => {
//    if(error) {
//        return console.dir(error);
//    }
//    console.dir(JSON.parse(body));
//});

// o servidor irá rodar dentro da porta 9001
app.listen(9001, () => console.log('Express started at http://localhost:9001'));