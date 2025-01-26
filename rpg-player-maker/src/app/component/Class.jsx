import { useState } from "react";

const Class = () => {
  const [selectedClass, setSelectedClass] = useState("null");

  const handleSelectClass = (clase) => {
    setSelectedClass(clase);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5">Elige tu Clase</p>
      <div className="grid grid-cols-3 gap-2 mb-10">
        <button
          onClick={() => handleSelectClass("BÁRBARO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "BÁRBARO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          BÁRBARO
        </button>

        <button
          onClick={() => handleSelectClass("BARDO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "BARDO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          BARDO
        </button>

        <button
          onClick={() => handleSelectClass("CLÉRIGO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "CLÉRIGO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          CLÉRIGO
        </button>

        <button
          onClick={() => handleSelectClass("DRUIDA")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "DRUIDA"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          DRUIDA
        </button>

        <button
          onClick={() => handleSelectClass("GUERRERO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "GUERRERO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          GUERRERO
        </button>

        <button
          onClick={() => handleSelectClass("MONJE")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "MONJE"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          MONJE
        </button>

        <button
          onClick={() => handleSelectClass("PALADÍN")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "PALADÍN"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          PALADÍN
        </button>

        <button
          onClick={() => handleSelectClass("EXPLORADOR")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "EXPLORADOR"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          EXPLORADOR
        </button>

        <button
          onClick={() => handleSelectClass("PÍCARO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "PÍCARO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          PÍCARO
        </button>

        <button
          onClick={() => handleSelectClass("HECHIZERO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "HECHIZERO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          HECHIZERO
        </button>

        <button
          onClick={() => handleSelectClass("BRUJO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "BRUJO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          BRUJO
        </button>

        <button
          onClick={() => handleSelectClass("MAGO")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            selectedClass === "MAGO"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          MAGO
        </button>
      </div>
    </div>
  );
};

export default Class;
