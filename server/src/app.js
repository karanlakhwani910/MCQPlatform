const express = require("express");
const cron = require("node-cron");

require("./db/mongoose");

const c2cRouter = require("./routers/question(C2c)");
const circuitronRouter = require("./routers/question(Circuitron)");
const couchPotatoRouter = require("./routers/question(Couch Potato)");
const xenatusRouter = require("./routers/question(Xenatus)");


const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/c2c",c2cRouter);
app.use("/circuitron",circuitronRouter);
app.use("/couchPotato",couchPotatoRouter);
app.use("/xenatus",xenatusRouter);

module.exports = app;

//"/home/kshitij/mongodb/bin/mongod --dbpath=/home/kshitij/mongodb-data"
