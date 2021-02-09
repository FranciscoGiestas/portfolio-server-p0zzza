const express = require("express");
const axios = require('axios');

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

  /* CHAMADA API DE TESTE
  axios.post('http://localhost:9000/api/post', {
    title: 'Finn',
    description: 'Williams',
    published: '1010'
  })
    .then(response => {
        console.log("dasdadasdada");
    });
  */
}
startServer();