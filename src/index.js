const express = require("express");
const app = express();
const { getClient } = require("./lib/mongo");

const PORT = 3003;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const dataToInsert = [
  { name: "John Doe", age: 30, job: "Developer" },
  { name: "Jane Smith", age: 25, job: "Designer" },
];

app.get("/save", async (_req, res) => {
  try {
    const client = await getClient();
    const dbName = "myDatabase";
    const db = client.db(dbName);
    const collection = db.collection("myCollection");
    const result = await collection.insertMany(dataToInsert);
    console.log(`${result.insertedCount} documents were inserted.`);
    console.log("Inserted document IDs:", result.insertedIds);
    res.status(200).send("Saved!!!");
  } catch (error) {
    console.error("Error in saving task : ", error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port : ${PORT}`);
});
