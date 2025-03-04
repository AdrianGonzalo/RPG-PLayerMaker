import { getBackground } from "../../logic/backgroundLogic";

export async function GET() {
  try {
    const background = await getBackground();
    return Response.json(background, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
