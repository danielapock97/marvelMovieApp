const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
var cryptoJS = require("crypto-js");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose);
db.movies = require("./movie.model.js")(mongoose);
db.reviews = require("./review.model.js")(mongoose);

module.exports = db;
