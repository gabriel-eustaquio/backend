const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URL } = process.env;

async function connect() {
  const url = MONGO_URL;
  const client = new MongoClient(url);
  global.connection = await client.connect();
  global.db = global.connection.db("Webbank");
  global.collection = global.db.collection("Customers");
}

connect();

function insertCustomer(dataReq) {
  return global.collection.insertOne(dataReq);
}

async function findCustomer(dataReq) {
  const data = await global.collection.find({ $and: [dataReq] }).toArray();
  return data;
}

module.exports = {
  insertCustomer,
  findCustomer,
};
