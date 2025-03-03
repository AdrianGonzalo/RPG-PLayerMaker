import { NextResponse } from "next/server";
import clientPromise from "../db";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("RPGDataBase");
    const classes = await db.collection("classes").find().toArray();

    return NextResponse.json(classes);
  } catch (error) {
    console.log("Error en GET /api/classes:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
