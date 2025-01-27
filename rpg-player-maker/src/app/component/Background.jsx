import { useState } from "react";

const Background = () => {
  const [background, setBackground] = useState("null");

  const handleBackground = (e) => {
    setBackground(e);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5 underline decoration-2 underline-offset-4">
        Elige tu Trasfondo
      </p>
      <div className="grid grid-cols-3 gap-2 mb-10">
        <button
          onClick={() => handleBackground("ACÓLITO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            background === "ACÓLITO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          ACÓLITO
        </button>

        <button
          onClick={() => handleBackground("CRIMINAL")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            background === "CRIMINAL"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          CRIMINAL
        </button>

        <button
          onClick={() => handleBackground("SOLDADO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            background === "SOLDADO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          SOLDADO
        </button>

        <button
          onClick={() => handleBackground("ERUDITO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            background === "ERUDITO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          ERUDITO
        </button>

        <button
          onClick={() => handleBackground("MARINERO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            background === "MARINERO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          MARINERO
        </button>

        <button
          onClick={() => handleBackground("HÉROE DEL PUEBLO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            background === "HÉROE DEL PUEBLO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          HÉROE DEL PUEBLO
        </button>
      </div>
    </div>
  );
};

export default Background;
