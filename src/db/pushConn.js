const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb://localhost:27019/test", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

conn.on("error", () => {
  console.log("Error! Push Database connection failed.");
});
conn.once("open", () => {
  console.log("Push server is on!");
});
const TestModel = conn.model("Test", require("../model/test"));
const m = new TestModel();
m.save();

module.exports = conn;
