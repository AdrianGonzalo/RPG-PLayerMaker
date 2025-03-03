import clientPromise from "../db";

export async function getClasses() {
  try {
    const client = await clientPromise;
    const db = client.db("RPGDataBase");
    const classes = await db.collection("classes").find().toArray();

    return classes;
  } catch (error) {
    console.log("Error al obtener las clases:", error);
    throw new Error("Error interno del servidor");
  }
}
