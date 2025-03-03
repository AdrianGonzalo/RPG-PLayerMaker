import clientPromise from "../db";

export async function getRaces() {
  try {
    const client = await clientPromise;
    const db = client.db("RPGDataBase");
    const races = await db.collection("races").find().toArray();
    return races;
  } catch (error) {
    console.error("Error al obtener las razas:", error);
    throw new Error("Error interno del servidor");
  }
}
