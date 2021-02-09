const router = require("express").Router();

//Define our routers here
router.use('/post', require("./post.route"));
router.use('/weather', require("./weather.route"));

module.exports = router;