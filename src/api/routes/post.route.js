const posts = require("../../controllers/post.controller.js");

const router = require("express").Router();

router.post("/", posts.create);

router.get("/", posts.findAll);

router.get("/:id", posts.findOne);

router.put("/:id", posts.update);

router.delete("/:id", posts.delete);

router.delete("/", posts.deleteAll);

module.exports = router;