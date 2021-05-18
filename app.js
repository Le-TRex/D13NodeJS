const express = require("express");

const app = express();

app.listen(3002);

app.use(express.static("public"));

app.use((request, resopnse, next) => {
  console.log(request.url, request.method);
  next();
})

app.get("/", (request, response) => {
  response.sendFile("./views/home.html", { root: __dirname});
})

app.get("/about", (request, response) => {
  response.sendFile("./views/about.html", { root: __dirname});
})

/* Use doit être APRÈS les app.xxx */
app.use((request, response) => {
  response.status(404).sendFile("./views/404.html", { root: __dirname})
});