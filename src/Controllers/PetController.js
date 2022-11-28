const PetModel = require('../Models/PetModel');

class PetController{
    async store(req, res){
 
        const createdPet = await PetModel.create(req.body);
        return res.status(200).json(createdPet);
    }
    async index(req, res){
        const pets = await PetModel.find();
        return res.status(200).json(pets);
    }
    async show(req, res){
        try {
            const {id} = req.params;

            const pet = await PetModel.findById(id);

            if(!pet){
                return res.status(404).json({message:"Pet não encontrado"});
            }

            return res.status(200).json(pet);

        } catch(error) {               
             return res.status(404).json({message:"Pet não encontrado"});
        }
     
    }
    
    async filterPets(req, res){
        try {
            const {status} = req.params;
            console.log(status);

            const pet = await PetModel.find({status});

            if(!pet){
                return res.status(404).json({message:"Pet não encontrado"});
            }

            return res.status(200).json(pet);

        } catch(error) {               
             return res.status(404).json({message:"Pet não encontrado"});
        }
     
    }

    async myPets(req, res){
        try {
            const {owner} = req.params;
            console.log(owner);

            const pet = await PetModel.find({owner});

            if(!pet){
                return res.status(404).json({message:"Pet não encontrado"});
            }

            return res.status(200).json(pet);

        } catch(error) {               
             return res.status(404).json({message:"Pet não encontrado"});
        }
     
    }

 
    async update(req, res){
        try{ 
            const{id} = req.params;
            
            const updatePet =    await PetModel.findByIdAndUpdate(id, req.body);     
            return res.status(200).json({message:"Pet atualizado",updatePet })   
        } catch(error){
            return res.status(404).json({message:"Pet não encontrado"});                
        }
    }
    async destroy(req, res){
        try{ 
            const{ id} = req.params;
            
            const petDeleted = await PetModel.findByIdAndDelete(id);  
            if(!petDeleted){
                return res.status(404).json({message:"Pet não existe"});                
            }   
             return res.status(200).json({message:"Pet deletado com sucesso!"})   
        } catch(error){
            return res.status(404).json({message:"Pet não encontrado"});                
        }
    }
}

module.exports = new PetController();