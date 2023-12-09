require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const { MONGODB_URI } = process.env;

// console.log(MONGODB_URI, " is Type of ???????????????  ");
// console.log(typeof MONGODB_URI, "<<<<<<<<<<<===========================");  // should be string 
// console.log("===================================");


//mongoose connection/config
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`Established a connection to the database`))
    .catch(err => console.log(`ERROR connecting to the database: `, err.message));

