
exports.signup = (req , res )=>{
    res.json({
        message : "Signup route works"
    })
}
exports.signout = (req,res)=>{
    res.json({
        loggedOut : "yes" 
    });
}
