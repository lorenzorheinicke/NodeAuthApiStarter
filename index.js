const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan"); //logging framework
const router = require("./router");
const app = express();
const mongoose = require("mongoose");
const config = require("./config");

//DB setup
mongoose.connect(
  `mongodb://localhost:${config.MONGO_DB_PORT}/${config.MONGO_DB}`
);

// App Setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log("Server listening on:", port);
