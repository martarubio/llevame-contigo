// âšī¸ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");


// âšī¸ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();
require("./config")(app);
require("./config/session.config")(app);

// default value for title local
const projectName = "llevame-contigo";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}`;

// đ Start handling routes here
require("./routes")(app);

// â To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
