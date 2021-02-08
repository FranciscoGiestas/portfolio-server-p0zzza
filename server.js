const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");

const app = express();

const db = require("./src/models/index");
//db.sequelize.sync({ force: true });

/*
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
*/

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//require("./src/routes/weather.route")(app);
//require("./src/routes/tutorial.route")(app);

// set port, listen for requests
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Portfolio server v1.2 started - by Giestas <3");
  db.connect();
});