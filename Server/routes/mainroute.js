const router = require("express").Router();
// const client = require("../Database/DbConnection");
const data = require("../Database/userdata");
router.post("/", (req, res) => {
  //connecting to mongodb

  //someerror is occuring
  //   await client.connect(async (err) => {
  //     const collection = client.db("uploadingVideo").collection("jobseekers");
  //     // perform actions on the collection object
  //     collection
  //       .find({userdata: {$eq: req.body.userprofile}})
  //       .then((data) => {
  //         // console.log("this si", data);
  //         res.send(data);
  //       })
  //       .catch((err) => {
  //         res.send(500);
  //       });
  //   });
  //   client.close();
  //   res.send(500);
  // });
  const seeker = req.body.formdata;
  const filteredData = data.filter((element) => {
    if (element.jc === seeker) return true;
  });
  res.send(filteredData);
});
module.exports = router;
