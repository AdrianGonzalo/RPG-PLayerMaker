import { useState } from "react";

const Attributes = () => {
  const [roll, setRoll] = useState([]); // Número de tiradas
  const [discarded, setDiscarded] = useState(null); // Número descartado

  const rollDice = () => {
    // Función para tirar el dado
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const newRolls = [...roll, randomNumber];

    if (newRolls.length === 4) {
      const sortedRolls = [...newRolls].sort((a, b) => a - b);
      setDiscarded(sortedRolls[0]);
      setRoll(newRolls); // Mantén todas las tiradas originales
    } else {
      setRoll(newRolls);
    }
  };

  return (
    <div className="flex flex-col items-center w-[800px]">
      <p className="text-4xl mb-8 w-full text-center underline decoration-2 underline-offset-4">
        Crea tus atributos, tira los dados...
      </p>
      <div className="flex w-full justify-around">
        <div className="text-center">
          <p className="text-3xl mb-10">Tus Atributos</p>
          <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10 w-[200px]">
            <p className="text-2xl">Fuerza</p>
          </div>
          <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
            <p className="text-2xl">Destreza</p>
          </div>
          <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
            <p className="text-2xl">Constitución</p>
          </div>
          <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
            <p className="text-2xl">Inteligencia</p>
          </div>
          <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
            <p className="text-2xl">Sabiduria</p>
          </div>
          <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
            <p className="text-2xl">Carisma</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-3xl mb-10">Tirada de Fuerza</p>
          <div
            className="relative inline-block cursor-pointer"
            onClick={rollDice}
          >
            <p className="text-7xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              {roll.length < 4 ? roll[roll.length - 1] || "" : "✓"}
            </p>
            <div className="w-[115px] h-[115px] bg-[#6167AA] border-slate-900 border-4 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img src="/d6.svg" alt="d6 vector" className="mb-4" />
          </div>
          <p className="text-2xl mb-4">Primera Tirada: {roll[0] || "X"}</p>
          <p className="text-2xl mb-4">Segunda Tirada: {roll[1] || "X"}</p>
          <p className="text-2xl mb-4">Tercera Tirada: {roll[2] || "X"}</p>
          <p className="text-2xl mb-4">Cuarta Tirada: {roll[3] || "X"}</p>
          <p className="text-2xl mb-4">Descarte: {discarded || "X"}</p>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
