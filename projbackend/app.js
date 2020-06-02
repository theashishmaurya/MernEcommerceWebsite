const mongoose = require ("mongoose");
const express  = require ("express");
require('dotenv').config() ;

// Middleware Used 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require("./routes/auth")

// Connection mongoose database 
mongoose.connect(process.env.DATABASE , {useNewUrlParser : true ,  useUnifiedTopology: true })
                .then(() => console.log("MONGODB CONNECTED"))
                .catch(()=>console.log("DATABASE NOT CONNECTED"))

// defining Port
const port = 8000;
const app = express();

// Express server configuration
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My routes 
app.use("/api" , authRoute);



// Connecting to Server 
app.listen (port , ()=> console.log(`APP is listeninig on port ${port}  http://localhost:8000/` )); 