const { distance } = require('ml-distance');
const RankModel = require('../src/Models/RankModel');

var api = {
    arrayPets : async function(req,res) {
        var euclidiana = []; 
        var id = [];  
        var rank = []; 
        var data = req.body.pets;
        var pet = req.body.pet;
        let vectors = new Array();
        var breed;
        for (let i = 0 ; i < data.length ; i++) {
            if(data[i]['cat_breed'] == null){
                  breed =  data[i]['dog_breed'];
            }else{
                  breed =  data[i]['cat_breed']; 
            } 
            // verifica se gênero dos pets que irão ranquear é igual ao gênero do pet a ser ranqueado
            //if(breed == pet['characters'][0]){
                vectors[i] = [breed, data[i]['color'], data[i]['size'], data[i]['pelage'], data[i]['gender'], data[i]['species']];
                euclidiana.push(eucDistance(pet['characters'], vectors[i], vectors[i]['id']));
                id.push(data[i]['id']); 
                rank.push({ id: data[i]['id'] , distance: euclidiana[i]});

           // } 
           
            console.log(euclidiana);
            console.log(pet);
            console.log(vectors[i]); 

        }  
        console.log(rank);
        const euc = await RankModel.create(rank);
        return res.status(200).json(euc);  
    }, 
}

function eucDistance(a, b) {
    return a
        .map((x, i) => Math.abs( x - b[i] ) ** 2)  
        .reduce((sum, now) => sum + now)  
        ** (1/2)
}
  
module.exports = api;
