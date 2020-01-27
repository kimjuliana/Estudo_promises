// importando os pacotes para uso no arquivo index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');

// crio um servidor express
const app = express();

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// DB local (tempo de execução)
const data = [];

// function getAll () {
//   return new Promise((resolve,reject)=>{
//     request.get("https://restcountries.eu/rest/v2/", (error, response, body) => {
//       console.log('body:', body); 
//       if( body === null || body === undefined){
//         reject({error: "deu ruim"})
//       }
//       resolve(body)
//     });
//   })
// }

// // criação de rota que será acessada utilizando o método HTTP GET/
// app.get('/', (req, res) => {
//   getAll().then( respostaDaAPI => {
//     console.log("resposta da Api",respostaDaAPI)
//     return res.json({respostaDaAPI});
//   }).catch(err =>{
//     return res.json(err)
//   })
// });

// function getPaisbyName (name) {
//   return new Promise((resolve,reject)=>{
//     request.get(`https://restcountries.eu/rest/v2/name/${name}`, (error, response, body) => {
//       if( body === null || body === undefined){
//         reject({error: "deu ruim"})
//       }
//       resolve(body)
//     });
//   })
// }
 
// app.get('/name/:name', (req, res) => {
//   getPaisbyName(req.params.name).then( respostaDaAPI => {
//     res.send({respostaDaAPI});
//   }).catch(err =>{
//     res.send(err)
//   })
// });

// function getPaisbyCode (code) {
//   return new Promise((resolve,reject)=>{
//     request.get(`https://restcountries.eu/rest/v2/alpha/${code}`, (error, response, body) => {
//       if( body === null || body === undefined){
//         reject({error: "deu ruim"})
//       }
//       resolve(body)
//     });
//   })
// }
 
// app.post('/alpha/', (req, res) => {
//   console.log(req.body.code)
//   getPaisbyCode(req.body.code).then( respostaDaAPI => {
//     //JSON.parse(respostaDaAPI);
//     console.log(typeof respostaDaAPI)
//     return res.json(respostaDaAPI);
//     //res.send(respostaDaAPI);
    
//   }).catch(err =>{
//     res.send(err)
//   })
// });

function getPaisbyNameandLanguage (name) {
  return new Promise((resolve,reject)=>{
    request.get(`https://restcountries.eu/rest/v2/name/${name}`, (error, response, body) => {
      if( body === null || body === undefined){
        reject({error: "deu ruim"})
      }
      resolve(body)
    });
  })
}
app.get('/name/:name', (req, res) => {
  getPaisbyNameandLanguage(req.params.name).then( respostaDoPais => {
    const resultado = JSON.parse(respostaDoPais);
   console.log("retorno da API:", resultado)
   var idioma = resultado[0].languages[0].iso639_1
   console.log("idioma:", idioma)
    res.send({idioma});
  }).catch(err =>{
    res.send(err)
  })

  function getLanguagebyPais (lang) {
    return new Promise((resolve,reject)=>{
      request.get(`https://restcountries.eu/rest/v2/lang/${lang}`,(error, response, body) => {
        if( body === null || body === undefined){
          reject({error: "deu ruim"})
    }
        resolve(body)
  });
})
}
  
  app.get('/lang/:lang', (req, res) => {
    getLanguagebyPais(req.params.lang).then( respostaDaLing => {
    //console.log('idioma', idioma)
    //console.log("resultado", lang)
    console.log('resposta da ling',respostaDaLing)
      res.send({respostaDaLing});
  }).catch(err =>{
      res.send(err)
  })
});    
});

 
// o servidor irá rodar dentro da porta 9000
app.listen(9000, () => console.log('Express started at http://localhost:9000'));