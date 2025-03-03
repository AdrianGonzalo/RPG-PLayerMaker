import { NextResponse } from "next/server";
import clientPromise from "../db";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("RPGDataBase");
    const background = await db.collection("background").find().toArray();

    return NextResponse.json(background);
  } catch (error) {
    console.log("Error en GET /api/background");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
