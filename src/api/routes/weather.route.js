const weather = require("../../services/weather.service");

const router = require("express").Router();

router.get("/", function(res) {
    res.send(weather.getData());
});

module.exports = router;