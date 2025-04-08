import { useState } from "react";

const History = ({ character, setCharacter }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const generateHistory = async () => {
    setIsGenerating(true);
    setError(null);

    const prompt = `
      Crea la historia de un héroe llamado ${character.name}, quien es un ${
      character.sex
    } ${character.race} ${character.subrace ? character.subrace : ""} ${
      character.class
    } de clase ${character.subclass ? character.subclass : ""}.
      Su trasfondo es: ${
        character.background ? character.background.name : "desconocido"
      }.
      Usa estos detalles para crear una historia épica sobre su vida, sus aventuras y su destino.
    `;

    try {
      const response = await fetch("/api/generate-history/GenerateText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setCharacter({ ...character, history: data?.generated_text || "" });
    } catch (error) {
      console.error("Error al generar la historia:", error);
      setError("Error de red o conexión: " + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-4xl mb-8 mt-6 w-full text-center underline decoration-2 underline-offset-4">
          Escribe tu historia
        </h2>
        <textarea
          className="mb-6 w-[800px] rounded-xl bg-[var(--color6)] p-4 text-left placeholder:text-center text-xl"
          placeholder="Empieza a dar aquí tus primeros pasos... (si quieres)"
          value={character.history || ""}
          onChange={(e) =>
            setCharacter({ ...character, history: e.target.value })
          }
        ></textarea>
      </div>
      <button
        onClick={generateHistory}
        disabled={isGenerating}
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
      >
        {isGenerating ? "Generando historia..." : "Generar Historia"}
      </button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
};

export default History;
