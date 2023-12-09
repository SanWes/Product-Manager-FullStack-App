const express = require("express");
const cors = require("cors")
const app = express();
const localport = 8000;
require('dotenv').config();

app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information
app.use(cors()); //tells the app that it is allowed to share resources  

require("./server/config/config");

//require the routes
require("./server/routes/product.routes")(app)

//app.listen needs to be at the end of the file
app.listen(process.env.PORT || localport, () => console.log(`Listening on port: ${localport}`) );