const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema)

module.exports = Person;