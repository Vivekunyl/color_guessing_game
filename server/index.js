const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 8000;



dotenv.config({path:'./config.env'});
require('./Database/connect');

app.use(cookieParser());
app.use(express.json());
// linking the router files
app.use(require('./routes/router'));


app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});