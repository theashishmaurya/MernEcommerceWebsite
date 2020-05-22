const mongoose = require("mongoose");
const {ObjectID} = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type : String ,
        required : true ,
        trim : true,
        maxlength : 32 
    },

    discription : {
        type : String ,
        trim : true,
        required : true ,
        maxlength : 10000,
    },

    price : {
        type : Number ,
        required : true,
        maxlength : 32,
        trim : true,
    
    },
    stock : {
        type : Number ,

    },
    sold :{
        type: Number,
        default : 0,
    },
    category : {
        type : ObjectID ,
        ref : "category",
        required : true ,

    },
    photo : {
        type : Buffer,
        contentType : String,
    }
} , {timestamps : true});

module.exports = mongoose.model("product" , productSchema);