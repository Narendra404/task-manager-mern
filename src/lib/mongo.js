const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

async function getClient() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    return client;
  } catch (error) {
    console.error("Error in getting MongoClient : ", error);
  }
}

module.exports = {
  getClient,
};
