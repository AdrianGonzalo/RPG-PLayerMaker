import clientPromise from "../db";

export async function getBackground() {
  try {
    const client = await clientPromise;
    const db = client.db("RPGDataBase");
    const background = await db.collection("background").find().toArray();

    return background;
  } catch (error) {
    console.error("Error al obtener los backgrounds:", error);
    throw new Error("Error en el servidor");
  }
}
