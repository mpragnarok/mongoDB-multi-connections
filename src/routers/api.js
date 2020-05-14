const express = require("express");
const router = express.Router();

const testController = require("../controller/test");

router.get("/test", testController.getTest);
router.get("/pushTest", testController.getRegoTest);

module.exports = router;
