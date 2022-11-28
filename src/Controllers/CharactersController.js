const CharactersModel = require('../Models/CharactersModel');

class CharactersController{
    async store(req, res){ 

        const createdCharacter = await CharactersModel.create(req.body);
        return res.status(200).json(createdCharacter);
    }
    async index(req, res){
        const characters = await CharactersModel.find();
        return res.status(200).json(characters);
    }
    async show(req, res){
        try {
            const {id} = req.params;

            const character = await CharactersModel.findById(id);

            if(!character){
                return res.status(404).json({message:"Característica não encontrada"});
            }

            return res.status(200).json(character);

        } catch(error) {               
             return res.status(404).json({message:"Característica não encontrada"});
        }
     
    }
    async update(req, res){
        try{ 
            const{ id} = req.params;
            
            await CharactersModel.findByIdAndUpdate(id, req.body);     
            return res.status(200).json({message:"Característica atualizada"})   
        } catch(error){
            return res.status(404).json({message:"Característica não encontrada"});                
        }
    }
    async destroy(req, res){
        try{ 
            const{ id} = req.params;
            
            const characterDeleted = await CharactersModel.findByIdAndDelete(id);  
            if(!characterDeleted){
                return res.status(404).json({message:"Característica não encontrada"});                
            }   
             return res.status(200).json({message:"Característica deletada com sucesso!"})   
        } catch(error){
            return res.status(404).json({message:"Característica não encontrada"});                
        }
    }
}

module.exports = new CharactersController();