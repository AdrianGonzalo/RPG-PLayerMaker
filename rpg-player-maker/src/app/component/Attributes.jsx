// import { useState } from "react";

// const Attributes = () => {
//   const [roll, setRoll] = useState([]); // Número de tiradas
//   const [discarded, setDiscarded] = useState(null); // Número descartado

//   const rollDice = () => {
//     // Función para tirar el dado
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     const newRolls = [...roll, randomNumber];

//     if (newRolls.length === 4) {
//       const sortedRolls = [...newRolls].sort((a, b) => a - b);
//       setDiscarded(sortedRolls[0]);
//       setRoll(newRolls); // Mantén todas las tiradas originales
//     } else {
//       setRoll(newRolls);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center w-[800px]">
//       <p className="text-4xl mb-8 w-full text-center underline decoration-2 underline-offset-4">
//         Crea tus atributos, tira los dados...
//       </p>
//       <div className="flex w-full justify-around">
//         <div className="text-center">
//           <p className="text-3xl mb-10">Tus Atributos</p>
//           <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10 w-[200px]">
//             <p className="text-2xl">Fuerza</p>
//           </div>
//           <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
//             <p className="text-2xl">Destreza</p>
//           </div>
//           <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
//             <p className="text-2xl">Constitución</p>
//           </div>
//           <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
//             <p className="text-2xl">Inteligencia</p>
//           </div>
//           <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
//             <p className="text-2xl">Sabiduria</p>
//           </div>
//           <div className="bg-[var(--color2)] rounded-lg p-2 text-center mb-10">
//             <p className="text-2xl">Carisma</p>
//           </div>
//         </div>

//         <div className="text-center">
//           <p className="text-3xl mb-10">Tirada de Fuerza</p>
//           <div
//             className="relative inline-block cursor-pointer"
//             onClick={rollDice}
//           >
//             <p className="text-7xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//               {roll.length < 4 ? roll[roll.length - 1] || "" : "✓"}
//             </p>
//             <div className="w-[115px] h-[115px] bg-[#6167AA] border-slate-900 border-4 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//             <img src="/d6.svg" alt="d6 vector" className="mb-4" />
//           </div>
//           <p className="text-2xl mb-4">Primera Tirada: {roll[0] || "-"}</p>
//           <p className="text-2xl mb-4">Segunda Tirada: {roll[1] || "-"}</p>
//           <p className="text-2xl mb-4">Tercera Tirada: {roll[2] || "-"}</p>
//           <p className="text-2xl mb-4">Cuarta Tirada: {roll[3] || "-"}</p>
//           <p className="text-2xl mb-4">Descarte: {discarded || "-"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Attributes;

import { useState } from "react";

const Attributes = () => {
  const [roll, setRoll] = useState([]); // Número de tiradas actuales
  const [discarded, setDiscarded] = useState(null); // Número descartado
  const [totals, setTotals] = useState({
    Fuerza: null,
    Destreza: null,
    Constitución: null,
    Inteligencia: null,
    Sabiduría: null,
    Carisma: null,
  });
  const [currentAttribute, setCurrentAttribute] = useState("Fuerza"); // Atributo actual

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
      // Primero, mostramos la cuarta tirada
      setRoll(newRolls);

      // Esperamos un momento antes de procesar el descarte y el cambio de atributo
      setTimeout(() => {
        const sortedRolls = [...newRolls].sort((a, b) => a - b);
        const lowest = sortedRolls[0];
        const sumOfHighest = sortedRolls.slice(1).reduce((a, b) => a + b, 0);

        setDiscarded(lowest);

        setTotals((prevTotals) => ({
          ...prevTotals,
          [currentAttribute]: sumOfHighest,
        }));

        // Esperamos otro momento antes de cambiar de atributo
        setTimeout(() => {
          const nextIndex = attributes.indexOf(currentAttribute) + 1;
          setCurrentAttribute(attributes[nextIndex] || ""); // Vacío si no hay más atributos

          // Reiniciamos los valores para la siguiente ronda
          setRoll([]);
          setDiscarded(null);
        }, 1000); // Espera antes de cambiar de atributo
      }, 1000); // Espera antes de procesar la cuarta tirada
    } else {
      setRoll(newRolls);
    }
  };

  const resetAttribute = () => {
    // Reiniciar tiradas para el atributo actual
    setRoll([]);
    setDiscarded(null);
    setTotals((prevTotals) => ({
      ...prevTotals,
      [currentAttribute]: null,
    }));
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
              <p className="text-xl">Total {totals[attr] || "-"}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-3xl mb-10">
            Tirada de {currentAttribute || "Completado"}
          </p>

          {currentAttribute ? (
            <>
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
              <p className="text-2xl mb-6">Primera Tirada: {roll[0] || "-"}</p>
              <p className="text-2xl mb-6">Segunda Tirada: {roll[1] || "-"}</p>
              <p className="text-2xl mb-6">Tercera Tirada: {roll[2] || "-"}</p>
              <p className="text-2xl mb-6">Cuarta Tirada: {roll[3] || "-"}</p>
              <p className="text-2xl mb-10">
                Descarte:{" "}
                <span className="text-red-500">{discarded || "-"}</span>
              </p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                onClick={resetAttribute}
              >
                Reiniciar Tirada
              </button>
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
