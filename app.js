const express = require("express");

const app = express();

app.listen(3002);

app.get("/", (request, response) => {
  response.sendFile("./views/home.html", { root: __dirname});
})