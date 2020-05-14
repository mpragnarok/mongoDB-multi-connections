const mongoose = require("mongoose");
const regoConn = require("../db/regoConn");
const pushConn = require("../db/pushConn");
const Test = regoConn.model("RegoTest");
const PushTest = pushConn.model("Test");

module.exports = {
  getTest: async (req, res) => {
    try {
      // console.log({ ...Test });
      const test = await Test.find();
      // console.log(test);
      return res.status(200).json({ test });
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getRegoTest: async (req, res) => {
    try {
      // console.log({ ...Test });
      const test = await PushTest.find();
      // console.log(test);
      return res.status(200).json({ test });
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
