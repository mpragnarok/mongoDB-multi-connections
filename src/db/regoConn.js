const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb://localhost:27018/regoDev", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

conn.on("error", () => {
  console.log("Error! Rego Database connection failed.");
});

conn.once("open", () => {
  console.log("Rego server is on!");
});
const TestModel = conn.model("RegoTest", require("../model/test"));
// conn.model("RegoTest", require("../model/test"));
const m = new TestModel();
m.save(); // works
module.exports = conn;
