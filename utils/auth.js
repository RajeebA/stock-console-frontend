const jwt = require("jsonwebtoken");
const ResponseTemplates = require("../utils/ResponseTemplate");
const respond = require("../utils/Responder");
const Constants = require("../utils/Constants");
const User = require("../models").Users;

module.exports = {
  async createAndRegisterToken(user) {
    let access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });
    return {
      access_token,
    };
  },

  verifyToken(req, res, next) {
    var token = req.headers["x-access-token"];
    if (!token)
      return respond(
        res,
        Constants.RESPONSE_CODES.UN_AUTHORIZED,
        ResponseTemplates.unAuthorizedRequestTemplate()
      );
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err)
        return respond(
          res,
          401,
          ResponseTemplates.unAuthorizedRequestTemplate()
        );
      console.log(decoded);
      req.user = await User.findOne({
        where: { id: decoded.id },
      }).catch((error) => {
        console.error(error);
        return respond(
          res,
          Constants.RESPONSE_CODES.UN_AUTHORIZED,
          ResponseTemplates.unAuthorizedRequestTemplate()
        );
      });
      next();
    });
  },
};
