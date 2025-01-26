import { useState } from "react";

const Race = () => {
  const [selectedRace, setSelectedRace] = useState("null");

  const handleSelectRace = (race) => {
    setSelectedRace(race);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5">Elige tu Raza</p>
      <div className="grid grid-cols-3 gap-2 mb-10">
        <button
          onClick={() => handleSelectRace("ELFO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedRace === "ELFO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          ELFO
        </button>

        <button
          onClick={() => handleSelectRace("TIEFLING")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedRace === "TIEFLING"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          TIEFLING
        </button>

        <button
          onClick={() => handleSelectRace("HUMANO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedRace === "HUMANO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          HUMANO
        </button>

        <button
          onClick={() => handleSelectRace("SEMIORCO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedRace === "SEMIORCO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          SEMIORCO
        </button>

        <button
          onClick={() => handleSelectRace("ENANO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedRace === "ENANO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          ENANO
        </button>

        <button
          onClick={() => handleSelectRace("SEMIELFO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedRace === "SEMIELFO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          SEMIELFO
        </button>

        <button
          onClick={() => handleSelectRace("MEDIANO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedRace === "MEDIANO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          MEDIANO
        </button>

        <button
          onClick={() => handleSelectRace("GNOMO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedRace === "GNOMO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          GNOMO
        </button>

        <button
          onClick={() => handleSelectRace("DRAGONBORN")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedRace === "DRAGONBORN"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          DRAGONBORN
        </button>
      </div>
    </div>
  );
};

export default Race;
