const mongoose = require("mongoose");
const{ObjectId} = mongoose.Schema ;

const cartSchema = mongoose.Schema({
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

module.exports = mongoose.model("cart" , cartSchema);