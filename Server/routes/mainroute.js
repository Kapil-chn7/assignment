const router = require("express").Router();
// const client = require("../Database/DbConnection");
const data = require("../Database/userdata");
router.post("/", (req, res) => {
  //connecting to mongodb

  // console.log("this is the request");
  // client.connect()
  // res.send(200);
  const seeker = req.body.formdata;
  const filteredData = data.filter((element) => {
    if (element.jc === seeker) return true;
  });
  res.send(filteredData);
});
module.exports = router;
