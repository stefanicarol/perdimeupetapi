const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PetSchema = new Schema({
    id: ObjectId,
    returned: { type: Boolean, required: true },        
    cat_breed: { type: String, required: false }, 
    dog_breed: { type: String, required: false }, 
    color: { type: String, required: true }, 
    gender: { type: String, required: true },        
    owner: { type: String, required: true }, 
    pelage: { type: String, required: true },
    size: { type: String, required: true }, 
    species: { type: String, required: true }, 
    status: { type: String, required: true },
    photo: { type: String, required: true },   
    contact: { type: String, required: false },   
    city: { type: String, required: false },   
    observation: { type: String, required: false },  
    date: { type: String, required: false },   
});

const PetModel =mongoose.model('pets', PetSchema);

module.exports = PetModel;