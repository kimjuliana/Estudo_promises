var request = require('request');

exports.get = async (req, res, next) => {
    console.log('teste');
    await request('https://restcountries.eu/rest/v2/all', function(error,response,body){
        res.json(body);
    });
};


// exports.get = (req,res,next) => {
//     res.status(200).send('Requisição recebida com sucesso');
// };

exports.getById = (req, res, next) =>{
    res.status(200).send('Requisição recebida com sucesso!');
};


exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso');
};

exports.put = (req,res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req,res,next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};