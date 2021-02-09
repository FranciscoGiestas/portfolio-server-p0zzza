const post = require("../services/post.service")

exports.create = async(req, res) => {
  const reqBody = req.body;
  
  await post.create(reqBody);
  res.sendStatus(201);
};