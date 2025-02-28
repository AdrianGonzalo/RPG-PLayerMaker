import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error("❌ Falta la variable de entorno MONGODB_URI");
}

let client = new MongoClient(uri, options);
let clientPromise = client.connect();

export default clientPromise;
