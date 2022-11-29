const TodoListModel = require('../Models/TodoListModel');

class TodoListController{
    async store(req, res){
 
        const createdPet = await TodoListModel.create(req.body);
        return res.status(200).json(createdPet);
    }
    async index(req, res){
        const pets = await TodoListModel.find();
        return res.status(200).json(pets);
    }
    async show(req, res){
        try {
            const {id} = req.params;

            const pet = await TodoListModel.findById(id);

            if(!pet){
                return res.status(404).json({message:"Lista não encontrada"});
            }

            return res.status(200).json(pet);

        } catch(error) {               
             return res.status(404).json({message:"Lista não encontrada"});
        }
     
    }
    
    async filterList(req, res){
        try {
            const {status} = req.params;
            console.log(status);

            const pet = await TodoListModel.find({status});

            if(!pet){
                return res.status(404).json({message:"Lista não encontrada"});
            }

            return res.status(200).json(pet);

        } catch(error) {               
             return res.status(404).json({message:"Lista não encontrada"});
        }
     
    }

    async myList(req, res){
        try {
            const {owner} = req.params;
            console.log(owner);

            const pet = await TodoListModel.find({owner});

            if(!pet){
                return res.status(404).json({message:"Lista não encontrada"});
            }

            return res.status(200).json(pet);

        } catch(error) {               
             return res.status(404).json({message:"Lista não encontrada"});
        }
     
    }

 
    async update(req, res){
        try{ 
            const{id} = req.params;
            
            const updatePet =    await TodoListModel.findByIdAndUpdate(id, req.body);     
            return res.status(200).json({message:"Lista atualizada",updatePet })   
        } catch(error){
            return res.status(404).json({message:"Lista não encontrada"});                
        }
    }
    async destroy(req, res){
        try{ 
            const{ id} = req.params;
            
            const petDeleted = await TodoListModel.findByIdAndDelete(id);  
            if(!petDeleted){
                return res.status(404).json({message:"Lista não existe"});                
            }   
             return res.status(200).json({message:"Lista deletada com sucesso!"})   
        } catch(error){
            return res.status(404).json({message:"Lista não encontrado"});                
        }
    }
}

module.exports = new TodoListController();