const express = require('express')
const Router =  express.Router()

Router.get('/signout' , (req,res)=>{
    res.send("this is the Singup page");
})

module.exports = Router;