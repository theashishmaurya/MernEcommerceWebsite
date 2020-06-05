const express = require('express')
const Router =  express.Router()
const {signout , signup} = require("../controllers/auth")
const { check , validationResult} = require('express-validator');

// Router and express validation
Router.post('/signup' , [
    check("name" ).isLength({ min: 2}).withMessage('name must be at least 2 characters long') , // validation for name
    check("email").isEmail().withMessage('email is required'), // validation for email
    check("password").isLength({min : 5}).withMessage("Password should be more than 5 characters") // validation for password

],signup );
Router.get('/signout' , signout );

module.exports = Router;