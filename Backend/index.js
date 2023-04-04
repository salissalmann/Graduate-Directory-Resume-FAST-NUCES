const connection = require('./connection');

const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())




connection();

//Routing.
app.use(cors());
app.use('/student' , require('./routes/student'))

//app.use('/authorization' , require('./routes/Authorization'))
//app.use('/notes' , require('./routes/Notes'))

app.listen( 3001 , ()=> {console.log("LISTENING AT PORT: 3001")} )
