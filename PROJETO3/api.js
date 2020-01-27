const request = require('request');

const hostname = 'https://restcountries.eu/rest/v2/';
const path = 'all/';


request(`${hostname}${path}`, (err, res, body) => {
  console.log(body);
  });

  //app.post(`https://restcountries.eu/rest/v2/alpha/${code}`, (req, res) => {
//   const result = req.body;

//   if (!result) {
//     return res.status(400).end();
//   }

//   data.push(result);
//   return res.json({ result });
//});

