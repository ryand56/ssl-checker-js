const express = require("express");
const app = express();
const checker = require("./checker.js");

app.get("/", function (req, res) {
    res.send("Simple HTTPS Checker made by elementemerald#0002");
});

app.get("/check", function (req, res) {
    
});