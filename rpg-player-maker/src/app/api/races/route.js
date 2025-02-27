import clientPromise from "@/app/api/db";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("miBasedeDatos"); // Cambia al nombre real de tu DB
    const races = await db.collection("races").find().toArray();

    return Response.json(races);
  } catch (error) {
    console.error("Error en GET /api/races:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
