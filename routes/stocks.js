var express = require("express");
var router = express.Router();
const stockController = require("../controllers/stocks");
const authController = require("../utils/auth");
const respond = require("../utils/Responder");

/* GET users listing. */
router.get(
  "/search",
  authController.verifyToken,
  async function (req, res, next) {
    let response = await stockController.search(req);
    respond(res, response.status, response);
  }
);
router.get(
  "/details/:id",
  authController.verifyToken,
  async function (req, res, next) {
    let response = await stockController.details(req);
    respond(res, response.status, response);
  }
);

module.exports = router;
