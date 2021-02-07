module.exports = app => {
    const weather = require("../controllers/weather.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Tutorials
    router.get("/", weather.getWeatherData);
  
    app.use('/api/weather', router);
  };