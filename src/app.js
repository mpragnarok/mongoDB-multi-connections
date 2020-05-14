const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Sever is listening on port 3000");
});

require("./routers/")(app);
