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
app.get('/Signup',(req,res) => {
    res.send('Hello world , I am express and ur at Signup in page');
});

app.listen(port , ()=> console.log( `Example app listening at http://localhost:${port}`));