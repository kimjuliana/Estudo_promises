// importando os pacotes para uso no arquivo index.js
const express = require('express');
//const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');

// crio um servidor express
const app = express();

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// DB local (tempo de execução)
const data = [];

function getLocalHost9001 () {
  return new Promise((resolve,reject)=>{
    request.get("http://localhost:9001/", (error, response, body) => {
      // console.log('error:', error);
      // console.log('statusCode:', response && response.statusCode); 
      console.log('body:', body); 
      if( body === null || body === undefined){
        reject({error: "deu ruim"})
      }
      resolve(body)
    });
  })
}

// criação de rota que será acessada utilizando o método HTTP GET/
// http://localhost:9000/
app.get('/', (req, res) => {
  getLocalHost9001().then( respostaDaPromise => {
    console.log("resposta da promise",respostaDaPromise)
    return res.json({respostaDaPromise,teste:"teste"});
  }).catch(err =>{
    return res.json(err)
  })
});




// criação de rota que será acessada utilizando o método HTTP POST/
// http://localhost:9000/add
app.post('/add', (req, res) => {
  const result = req.body;

  if (!result) {
    return res.status(400).end();
  }

  data.push(result);
  return res.json({ result });
});

// o servidor irá rodar dentro da porta 9000
app.listen(9000, () => console.log('Express started at http://localhost:9000'));