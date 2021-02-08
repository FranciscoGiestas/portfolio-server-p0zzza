const express = require("express");

const config = require("./config");

module.exports = function(app) {
  app.use(morgan("dev"));

  app.get('/status', (req, res) => {
      res.status(200).end();
  });
  app.head('/status', (req, res) => {
      res.status(200).end();
  });

  // Useful if you're behind a reverse proxy
  app.enable('trust proxy');

  // Config cors options
  var corsOptions = {
      origin: "http://localhost:9000"
    };
  app.use(cors(corsOptions));

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  app.use(config.api.prefix, routes);
};

async function startServer() {
  const app = express();

  console.log(`
  #####################################################
  ★  Portfolio server v1.3 - by Francisco Giestas <3  ★
  #####################################################
  `);

  console.log("Initilizing server dependencies...")

  const loader = require("./loaders");
  await loader.load(app);

  const port = config.port;
  app.listen(port, () => {
    console.log(`Server started at *:${port}`);      
  });
}

startServer();