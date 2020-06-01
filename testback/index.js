 const express = require('express')
 const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
const port = 8080 ;
app.get('/',(req,res) => {
    res.send('Hello world , I am express');
});
app.get('/Login',(req,res) => {
    res.send('Hello world , I am express and ur at log in page');
});

const admin = (req,res,)=>{
    res.send('This is admin page xD Dashboard');
};
// middleware function 
const isAdmin = (res,req ,next ) => {
    console.log ("isAdmin working");
    next();
}

app.get('/admin' , isAdmin ,admin); // isadmin is a middleware function and  admin is a function consedering req / res.

app.get('/Signup',(req,res) => {
    res.send('Hello world , I am express and ur at Signup in page');
});

app.listen(port , ()=> console.log( `Example app listening at http://localhost:${port}`));