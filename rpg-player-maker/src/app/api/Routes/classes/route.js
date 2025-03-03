import { getClasses } from "../../logic/classesLogic";

export async function GET() {
  try {
    const classes = await getClasses();
    return Response.json(classes, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
