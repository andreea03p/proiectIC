import { MongoClient, ServerApiVersion } from "mongodb";

const URI = process.env.ATLAS_URI || ""; //variabila creata in config.env
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employees"); //o sa mi se creeze automat o baza de date "employees"

export default db;