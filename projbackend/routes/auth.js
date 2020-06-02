const express = require('express')
const Router =  express.Router()
const {signout , signup} = require("../controllers/auth")


Router.post('/signup' , signup );
Router.get('/signout' , signout );

module.exports = Router;