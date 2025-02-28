import { NextResponse } from "next/server";
import clientPromise from "@/app/api/db";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("RPGDataBase");
    const races = await db.collection("races").find().toArray();

    return NextResponse.json(races);
  } catch (error) {
    console.error("Error en GET /api/races:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
