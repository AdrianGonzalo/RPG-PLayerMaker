"use client";

import { useState } from "react";

const Attributes = ({ character, setCharacter }) => {
  const [roll, setRoll] = useState([]);
  const [discarded, setDiscarded] = useState(null);
  const [currentAttribute, setCurrentAttribute] = useState("Fuerza");

  const attributes = [
    "Fuerza",
    "Destreza",
    "Constitución",
    "Inteligencia",
    "Sabiduría",
    "Carisma",
  ];

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const newRolls = [...roll, randomNumber];

    if (newRolls.length === 4) {
      setRoll(newRolls);

      setTimeout(() => {
        const sortedRolls = [...newRolls].sort((a, b) => a - b);
        const lowest = sortedRolls[0];
        const sumOfHighest = sortedRolls.slice(1).reduce((a, b) => a + b, 0);

        setDiscarded(lowest);

        setCharacter((prevCharacter) => ({
          ...prevCharacter,
          attributes: {
            ...prevCharacter.attributes,
            [currentAttribute]: sumOfHighest,
          },
        }));

        setTimeout(() => {
          const nextIndex = attributes.indexOf(currentAttribute) + 1;
          setCurrentAttribute(attributes[nextIndex] || "Completado");
          setRoll([]);
          setDiscarded(null);
        }, 1000);
      }, 1000);
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
          {attributes.map((attr) => (
            <div
              key={attr}
              className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10 w-[200px]"
            >
              <p className="text-2xl">{attr}</p>
              <p className="text-xl">
                Total {character.attributes[attr] || "-"}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-3xl mb-10">
            Tirada de{" "}
            {currentAttribute !== "Completado"
              ? currentAttribute
              : "¡Completado!"}
          </p>

          {currentAttribute !== "Completado" ? (
            <>
              <div
                className="relative inline-block cursor-pointer"
                onClick={rollDice}
              >
                <p className="text-7xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  {roll.length < 4 ? roll[roll.length - 1] || "" : "✓"}
                </p>
                <div className="w-[115px] h-[115px] bg-[#6167AA] border-slate-900 border-4 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                <img src="/d6.svg" alt="d6 vector" className="mb-10" />
              </div>
              <p className="text-2xl mb-10">Primera Tirada: {roll[0] || "-"}</p>
              <p className="text-2xl mb-10">Segunda Tirada: {roll[1] || "-"}</p>
              <p className="text-2xl mb-10">Tercera Tirada: {roll[2] || "-"}</p>
              <p className="text-2xl mb-10">Cuarta Tirada: {roll[3] || "-"}</p>
              <p className="text-2xl mb-10">
                Descarte:{" "}
                <span className="text-red-500">{discarded || "-"}</span>
              </p>
            </>
          ) : (
            <p className="text-2xl">¡Has completado todas las tiradas!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attributes;
