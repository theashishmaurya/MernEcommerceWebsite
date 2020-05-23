const mongoose = require("mongoose");
const{ObjectId} = mongoose.Schema ;

const productcartSchema = new mongoose.Schema({
    product : {
        type : ObjectId ,
        ref : "product" ,
    },
    name : String,
    count : Number,
    price : Number ,

});
const ProductCart = mongoose.model ("ProductCart" , productcartSchema);

const cartSchema = new mongoose.Schema({
    product : [productcartSchema],
    transaction_id : {},
    amount : {type : Number},
    address : String,
    updated : Date ,
    user : {
        type : ObjectId ,
        ref : "User",
    }



},{timestamps : true});

const Order = mongoose.model("Cart" , cartSchema);

module.exports = {Order , ProductCart};