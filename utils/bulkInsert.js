const fs = require("fs");
const csv = require("csv-parser");
const Stocks = require("../models").stock;

const path = require("path");
let results = [];

fs.createReadStream(path.join(__dirname, "../public/stocks.csv"))
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    results = results.map((result) => ({
      name: result["Name"],
      current_market_price: result["Current Market Price"],
      market_cap: result["Market Cap"],
      stock_PE: result["Stock P/E"],
      dividend_yield: result["Dividend Yield"],
      roce: result["ROCE %"],
      roe_previos_annum: result["ROE Previous Annum"],
      debt_to_equity: result["Debt to Equity"],
      eps: result["EPS"],
      reserves: result["Reserves"],
      debt: result["Debt"],
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    Stocks.bulkCreate(results)
      .then(() => {
        return Stocks.findAll();
      })
      .then((stocks) => {
        console.log(stocks);
      });
  });
