var request = require('request');
var name = ""
var id = ""
exports.getByName = async (req,res) =>{
    var name = req.params.name;
    var id = req.params.id;
    try{
        console.log('name or id:', req.params.name)
        await request(`https://pokeapi.co/api/v2/pokemon/${name}` ||
        `https://pokeapi.co/api/v2/pokemon/${id}`, 
        function(error, response, body){
            console.log(body)
            return res.send({body});
    });
}catch(error){
    res.send(error)

}};


exports.getBySpecie = async(req, res) =>{
    var name = req.params.name;
    var id = req.params.id;
    try{
        console.log('id:', req.params.id)
        var id = req.params.id;
        await request (`https://pokeapi.co/api/v2/pokemon-species/${name}` ||
        `https://pokeapi.co/api/v2/pokemon-species/${id}`, 
        function(error, response, body) {
        res.json(body);
    });
}catch(error){
    throw new Error(error)
}};

exports.getByColor = async (req,res) =>{
    var name = req.params.name;
    var id = req.params.id;
    try{
        console.log('name or id:', req.params.name)
    await request(`https://pokeapi.co/api/v2/pokemon-color/${name}` ||
     `https://pokeapi.co/api/v2/pokemon-color/${id}`, 
     function(error, response, body){
        return res.send(body);
    });
}catch(error){
    res.send(error)

}};