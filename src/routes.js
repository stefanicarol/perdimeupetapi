const{Router} = require('express');
const PetController = require('./Controllers/PetController');
const CharactersController = require('./Controllers/CharactersController');
const DistEuc = require('./dist_euclidiana.js');

const routes = Router();

routes.get('/', (req, res)=>{
    return res.status(200).json({message: "Server is on..."});
});

//endpoints cadastro e listagem de pets
routes.post('/pets', PetController.store);
routes.get('/pets', PetController.index);
routes.get('/pets/:id', PetController.show);
routes.put('/pets/:id', PetController.update);
routes.delete('/pets/:id', PetController.destroy);
routes.get('/my_pets/:owner', PetController.myPets);
routes.get('/filter_pets/:status', PetController.filterPets);

//endpoints cadastro e listagem de características
routes.post('/characters', CharactersController.store);
routes.get('/characters', CharactersController.index);
routes.get('/characters/:id', CharactersController.show);
routes.put('/characters/:id', CharactersController.update);
routes.delete('/characters/:id', CharactersController.destroy);

//endpoint para calcular distância euclidiana
routes.post('/combination', DistEuc.arrayPets);

module.exports = routes;