import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    // Get the database and collection on which to run the operation
    const database = client.db("University");
    const collection = database.collection("Student");

    // Execute queries
    // const student = collection.findOne({ name: "Vijay" }); get single data

    // const studentCursor = collection.find();  get multiple data in cursor form
    // const studentArray = await studentCursor.toArray(); convert cursor to array

    const student = await collection.insertOne({
      name: "Vijay2",
      email: "Something",
    }); //convert cursor to array

    console.log(student);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
