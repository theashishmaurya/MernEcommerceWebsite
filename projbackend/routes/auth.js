const express = require('express')
const Router =  express.Router()
const {signout} = require("../controllers/auth")



Router.get('/signout' , signout )

module.exports = Router;