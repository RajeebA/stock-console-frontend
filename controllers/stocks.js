const ResponseTemplates = require("../utils/ResponseTemplate");
const Commons = require("../utils/Commons");
const Stocks = require("../models").stock;
const AuthController = require("../utils/auth");
const { Op } = require("sequelize");
const search = async (req) => {
  let searchQuery = req.query.query;
  let err = null;
  let stocks = await Stocks.findAll({
    where: {
      name: { [Op.like]: "%" + searchQuery + "%" },
    },
    order: [["createdAt", "DESC"]],
    limit: 50,
    attributes: ["name", "id"],
  }).catch((error) => {
    console.log(error);
    err = error.errors
      ? ResponseTemplates.badRequestTemplate(error.errors[0].message)
      : ResponseTemplates.serverErrorTemplate();
  });
  if (err) return err;
  return ResponseTemplates.dataTemplate(stocks);
};
const details = async (req) => {
  let { id } = req.params;
  let err = null;
  let stock = await Stocks.findOne({
    where: {
      id: id,
    },
  }).catch((error) => {
    console.log(error);
    err = error.errors
      ? ResponseTemplates.badRequestTemplate(error.errors[0].message)
      : ResponseTemplates.serverErrorTemplate();
  });
  if (err) return err;
  return ResponseTemplates.dataTemplate(stock);
};

module.exports = { search, details };
