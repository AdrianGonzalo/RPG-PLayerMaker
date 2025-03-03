import { getRaces } from "@/app/api/logic/racesLogic";

export async function GET() {
  try {
    const races = await getRaces();
    return Response.json(races, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
