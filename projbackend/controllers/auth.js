const User = require("../models/user")

exports.signup = (req , res )=>{
    // console.log("REQ BODY" , req.body)
    // res.json({
    //     message : "Signup route works"
    //})
    const user = new User(req.body) 
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err : "ERROR can't write to db check your input data again"
            });

        }
        res.json({
            name : user.name ,
            lastname : user.lastname,
            email : user.email ,
            id : user._id

        });
    });
}
exports.signout = (req,res)=>{
    res.json({
        loggedOut : "yes" 
    });
}
