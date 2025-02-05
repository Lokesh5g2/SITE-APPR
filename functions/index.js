const functions = require("firebase-functions");
const express = require("express");
const webBuilder = require("./services/FromBuilder/controller");
const app = express();
const cors = require("cors");

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/formbuilder", webBuilder);

app.use("/auth", require("./services/Authentication/controller"));

exports.app = functions.https.onRequest(app);
