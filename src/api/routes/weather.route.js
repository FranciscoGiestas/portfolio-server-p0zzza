const weather = require("../../services/weather.service");

const router = require("express").Router();

router.get("/", function(req, res) {
    weather.getData()
     .then( data => {
        res.json(data)
     });
});

module.exports = router;