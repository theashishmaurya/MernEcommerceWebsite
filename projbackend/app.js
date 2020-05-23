const mongoose = require ("mongoose");
const express  = require ("express");
require('dotenv').config() ;

mongoose.connect(process.env.DATABASE , {useNewUrlParser : true ,  useUnifiedTopology: true })
                .then(() => console.log("MONGODB CONNECTED"));

const port = 8000;
const app = express();

app.listen (port , ()=> console.log(`APP is listeninig on port ${port}`));