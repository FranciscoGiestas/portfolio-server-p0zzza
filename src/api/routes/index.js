const router = require("express").Router();

//Define our routers here
router.get('/', (req, res) => {
    res.send("Nothing to do here :)");
});
router.use('/user', require("./user.route"));
router.use('/weather', require("./weather.route"));

module.exports = router;