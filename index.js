const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Simple HTTPS Checker made by elementemerald#0002");
});