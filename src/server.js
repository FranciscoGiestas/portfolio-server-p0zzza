const express = require("express");

const config = require("./config");

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