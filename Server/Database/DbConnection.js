const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv").config();
const uri = dotenv.URL;
const client = new MongoClient(
  "mongodb+srv://Kapil:Kapil%40123@cluster0.cl5ei.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }
);

module.exports = client;
