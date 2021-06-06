const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("Couldn't find .env file");
}
process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  db: {
    development: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      port: process.env.DB_PORT,
      operatorsAliases: process.env.DB_OPERATORS_ALIASES,
    },
    test: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
      operatorsAliases: process.env.DB_OPERATORS_ALIASES,
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
      operatorsAliases: process.env.DB_OPERATORS_ALIASES,
    },
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "DISCOUNT ENGINE API DOC",
      version: "1.0.0",
      description:
        "This is a REST API application made with Express. It retrieves data from discount-engine database.",
      // license: {
      //   name: "Licensed Under MIT",
      //   url: "https://spdx.org/licenses/MIT.html",
      // },
      // contact: {
      //   name: "JSONPlaceholder",
      //   url: "https://jsonplaceholder.typicode.com",
      // },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: `development server`,
      },
    ],
  },
};
