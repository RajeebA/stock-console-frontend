const ResponseTemplates = require("../utils/ResponseTemplate");
const Commons = require("../utils/Commons");
const User = require("../models").Users;
const AuthController = require("../utils/auth");

const signup = async (body) => {
  if (!body.username || !body.password)
    return ResponseTemplates.badRequestTemplate(
      "Username and password are required"
    );

  // Salt hash password
  body.password = await Commons.generatePasswordHash(body.password);

  let err = null;
  let user = await User.create(body).catch((error) => {
    err = error.errors
      ? ResponseTemplates.badRequestTemplate(error.errors[0].message)
      : ResponseTemplates.serverErrorTemplate();
  });

  if (err) return err;
  return ResponseTemplates.dataTemplate(
    await AuthController.createAndRegisterToken(user)
  );
};
const login = async (body) => {
  if (!body.username || !body.password)
    return ResponseTemplates.badRequestTemplate(
      "Username and password are required"
    );

  let user = await User.findOne({ username: body.username });
  if (!user) return ResponseTemplates.unAuthorizedRequestTemplate();
  if (Commons.compareHashes(user, body.password))
    return ResponseTemplates.dataTemplate(
      await AuthController.createAndRegisterToken(user)
    );
  else return ResponseTemplates.unAuthorizedRequestTemplate();
};
module.exports = { login, signup };
