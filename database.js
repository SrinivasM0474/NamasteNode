const { MongoClient } = require("mongodb");

// Connection URL
const url =
  "mongodb+srv://snmsv0474:TlWi9cIX86LUyJWp@namastenode.btl7myt.mongodb.net/";

const client = new MongoClient(url);

const dbName = "FirstDatabase";

async function main() {
  //Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to the server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "Sas",
    lastname: "Sri",
    city: "Hyderabad",
    country: "India",
  };

  const insertResult = await collection.insertOne(data);
  console.log("Inserted documents =>", insertResult);

  // const updateResult = await collection.updateOne(
  //   { firstname: "Chirangeevi" },
  //   {
  //     $set: {
  //       firstname: "RAMCHARAN",
  //       lastname: "Mega",
  //       city: "HYD",
  //       country: "India",
  //     },
  //   },
  // );
  // console.log("Updated documents =>", updateResult);

  const recordsCount = await collection.countDocuments({});
  console.log("recordsCount==>", recordsCount);

  const findResult = await collection.find({}).toArray();
  console.log("Found documents", findResult);
  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Install mongodb using npm
// Create a database
//
