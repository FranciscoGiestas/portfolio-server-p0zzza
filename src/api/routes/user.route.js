const user_controller = require("../../controllers/user.controller.js");

const router = require("express").Router();

router.get("/", user_controller.findAll);
router.post("/", user_controller.create);

/*
router.get("/", posts.findAll);

router.get("/:id", posts.findOne);

router.put("/:id", posts.update);

router.delete("/:id", posts.delete);

router.delete("/", posts.deleteAll);*/

module.exports = router;