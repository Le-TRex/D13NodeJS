const express = require("express");
const mongoose = require("mongoose");
const Person = require("./person");

const app = express();

const dbUri = "mongodb://localhost:27017";
mongoose.connect(dbUri, {useUnifiedTopology: true, useNewUrlParser: true}) //promise = un objet
  .then(() => app.listen(3002)) //promise.then => quand la promise est résolue, faire xxx
  .catch(error => console.log(error)); //catch attrape les erreurs et permet de les traiter

Person.create({
  firstname: "Richard",
  lastname: "Coeur De Lion",
  age: 863
});

Person.find().then(result => {
  console.log(result);
})



Person.findById("60a3c8b0b9620ab4b6face3f").then(result => {
  console.log("FindById", result);
})

app.use(express.static("public"));
app.set('view engine', 'ejs');


app.use((request, resopnse, next) => {
  console.log(request.url, request.method);
  next();
})

app.get("/", (request, response) => {
  //response.sendFile("./views/home.ejs", { root: __dirname});
  const people = [{name:'Robert', sayHello: true},
                  {name: 'René', sayHello: false},
                  {name: 'Richard', sayHello: true}];
  response.render("home", {people: people, test: 'Yo les haricots ! '});
  //render page home + valeur de la variable test
})

app.get("/about", (request, response) => {
  response.render("about");
  //response.sendFile("./views/about.ejs", { root: __dirname});
})

/* Use doit être APRÈS les app.xxx */
app.use((request, response) => {
  response.status(404).render("404");
  //response.status(404).sendFile("./views/404.ejs", { root: __dirname})
});