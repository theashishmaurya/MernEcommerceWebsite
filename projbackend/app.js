const mongoose = require ("mongoose");
const express  = require ("express");
require('dotenv').config() ;
// Middleware Used 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Connection mongoose database 
mongoose.connect(process.env.DATABASE , {useNewUrlParser : true ,  useUnifiedTopology: true })
                .then(() => console.log("MONGODB CONNECTED"))
                .catch(()=>console.log("DATABASE NOT CONNECTED"))

// Express server configuration

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const port = 8000;
const app = express();

app.listen (port , ()=> console.log(`APP is listeninig on port ${port}`)); 