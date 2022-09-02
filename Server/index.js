const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000 || process.env.PORT;
const router1 = require("./routes/mainroute");
const router2 = require("./routes/insertroute");

app.use(express.urlencoded());
app.use(express.json());
//Importing routes
app.use("/getdata", router1);
app.use("/insert", router2);

app.listen(PORT, () => {
  console.log("Server is listening on PORT", PORT);
});
