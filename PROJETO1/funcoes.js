const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
    let resposta
    request.get("http://localhost:9001/", (error, response, body) => new Promise((resolve, reject) =>{
      if(error) reject(console.log('error:', error));
      console.log('statusCode:', response && response.statusCode); 
      resolve(console.log('body:', body)); 
      resposta = body
    }));
    return res.json({ resposta });
  });