const router = require("express").Router();
const client = require("../Database/DbConnection");
// const data = require("../Database/userdata");

router.post("/", async (req, res) => {
  const data = req.body;
  console.log("this is the data", req.body);
  await client.connect(async (err) => {
    const collection = client.db("uploadingVideo").collection("jobseekers");
    // perform actions on the collection object
    collection
      .insertMany(data)
      .then((data) => {
        // console.log("this si", data);
        res.send(200);
      })
      .catch((err) => {
        res.send(500);
      });
  });
  client.close();
  res.send(500);
});
module.exports = router;
