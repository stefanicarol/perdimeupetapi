const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const RankSchema = new Schema({ 
        id: {
            type: String,
            required: true
        },     
        distance: {
            type: Number,
            required: true
        },  
});

const RankModel = mongoose.model('rank', RankSchema); 
module.exports = RankModel;