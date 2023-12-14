require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const { DB_LINK, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, MONGODB_URI } = process.env;

const urlDB = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?${DB_LINK}`;

// console.log(MONGODB_URI, " is Type of ???????????????  ");
// console.log(typeof MONGODB_URI, "<<<<<<<<<<<===========================");  // should be string 
// console.log("===================================");


//mongoose connection/config
mongoose.connect(urlDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`Established a connection to the database`))
    .catch(err => console.log(`ERROR connecting to the database: `, err.message));

