const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodoListSchema = new Schema({
    id: ObjectId,
    title: { type: String, required: true },        
    subtitle: { type: String, required: false }, 
    description: { type: String, required: false }, 
    status: { type: Boolean, required: true }, 
    owner: { type: String, required: true }, 
   
});

const TodoListModel =mongoose.model('list', TodoListSchema);

module.exports = TodoListModel;