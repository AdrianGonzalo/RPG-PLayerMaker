export async function POST(request) {
  const { prompt } = await request.json();

  const apiKey = process.env.HUGGING_FACE_API_KEY;
  const url = "https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B";

  // Usamos fetch directamente, ya que está disponible nativamente en Next.js 13+
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  const data = await response.json();

  if (response.ok) {
    return new Response(JSON.stringify(data), { status: 200 });
  } else {
    return new Response(
      JSON.stringify({ error: "Error generando la historia", details: data }),
      { status: 500 }
    );
  }
}
