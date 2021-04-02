const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true}});
    // Export the model     (model has to start with a capital letter in this case Product)
    module.exports = mongoose.model('Product', ProductSchema);
