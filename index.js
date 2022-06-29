/* ==== External Modules === */
const express = require("express");
const cors = require("cors");

/* ==== Internal Modules === */
const { generic, bands } = require("./controllers");
const mongo = require("./db/bands.mongo");
const mysql = require("./db/bands.mysql");

/* ==== System Variables === */
const app = express();
const PORT = 1337;

/* ==== Middleware === */
// allow cors
// app.use(cors());

// body data
app.use(express.json());

// serve static directory
app.use(express.static(__dirname + "/client"));

/* ==== Route Handlers === */
// app.method("url", controller(req,res,next))

// test route to demo cors
app.get("/test", generic.test);

// band test

app.get("/bands/test", bands.test);

// v1 band routes mongo

// get bands
app.get("/api/v1/bands", function (req, res, next) {
  mongo.find().then(bands => {
    return res.json(bands);
  });
});

// create band
app.post("/api/v1/bands", function (req, res, next) {
  mongo.create(req.body).then(success => {
    return res.sendStatus(201);
  });
});

// v2 band routes using mysql

// get bands
app.get("/api/v2/bands", function (req, res, next) {
  mysql.find().then(bands => {
    return res.json(bands);
  });
});

// create band
app.post("/api/v2/bands", function (req, res, next) {
  mysql.create(req.body).then(success => {
    return res.sendStatus(201);
  });
});

/* ==== Server Binding === */
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
