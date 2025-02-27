import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("❌ Falta la variable de entorno MONGODB_URI");
}

let client;
let db;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    client = new MongoClient(uri, options);
    global._mongoClient = client;
  } else {
    client = global._mongoClient;
  }
} else {
  client = new MongoClient(uri, options);
}

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db();
  }
  return db;
}

export default connectDB;
