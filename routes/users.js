var express = require("express");
var router = express.Router();
const userController = require("../controllers/users");
const respond = require("../utils/Responder");

/* GET users listing. */
router.post("/signup", async function (req, res, next) {
  let response = await userController.signup(req.body);
  respond(res, response.status, response);
});
router.post("/login", async function (req, res, next) {
  let response = await userController.login(req.body);
  respond(res, response.status, response);
});

module.exports = router;
