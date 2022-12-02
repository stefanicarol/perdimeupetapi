var api = {
    arrayPets : async function(req,res) {
        var euclidiana = []; 
        var data = req.body.pets;
        var pet = req.body.pet;
        let vectors = new Array();
        for (let i = 0 ; i < data.length ; i++) {
            vectors[i] = [data[i]['cat_breed'], data[i]['dog_breed'], data[i]['color'], data[i]['size'], data[i]['pelage'], data[i]['gender'], data[i]['species']];
            euclidiana.push(eucDistance(pet, vectors[i]));
            console.log(euclidiana);
            console.log(pet);
            console.log(vectors[i]);

        } 
        return res.status(200).json(euclidiana);  
    }, 
}

function eucDistance(a, b) {
    return a
        .map((x, i) => Math.abs( x - b[i] ) ** 2) // verifica a diferença
        .reduce((sum, now) => sum + now) // soma
        ** (1/2)
}
  
module.exports = api;
