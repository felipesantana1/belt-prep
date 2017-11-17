var mongoose = require("mongoose");
var RecipeSchema = mongoose.Schema({
    name: {type: String, required:[true, "please enter name!"]},
    chef: {type: String, required:[true, "please enter chef name"]},
    rating: {type: Number, default:0},
    ingredients: {type: Array, default:[]}
}, {timestamps:true});

mongoose.model("Recipe", RecipeSchema);