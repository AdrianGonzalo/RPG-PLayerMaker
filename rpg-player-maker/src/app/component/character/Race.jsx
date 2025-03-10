// import { razas } from "../../utils/Race";

// const Race = ({ character, setCharacter }) => {
//   const handleSelectRace = (race) => {
//     const selectedRace = razas[race];
//     setCharacter({
//       ...character,
//       race,
//       subrace: null,
//       speed: selectedRace ? selectedRace.pasos : 0,
//       darkVision: selectedRace ? selectedRace.visionEnLaOscuridad : 0,
//       raceBonuses: selectedRace ? selectedRace.bonificadores : {},
//       subraceBonuses: {},
//     });
//   };

//   const handleSelectSubrace = (subrace) => {
//     const selectedRace = razas[character.race];
//     const selectedSubrace = selectedRace?.subrazas[subrace];

//     setCharacter({
//       ...character,
//       subrace,
//       speed: selectedSubrace ? selectedSubrace.pasos : selectedRace.pasos,
//       darkVision: selectedSubrace
//         ? selectedSubrace.visionEnLaOscuridad
//         : selectedRace.visionEnLaOscuridad,
//       subraceBonuses: selectedSubrace ? selectedSubrace.bonificadores : {},
//     });
//   };

//   const selectedRace = razas[character.race];
//   const selectedSubrace = character.subrace
//     ? selectedRace.subrazas[character.subrace]
//     : null;

//   return (
//     <div className="flex flex-col items-center">
//       <p className="text-4xl mb-5 underline decoration-2 underline-offset-4">
//         Elige tu Raza
//       </p>
//       <div className="grid grid-cols-3 gap-2 mb-10">
//         {Object.keys(razas).map((raceKey) => {
//           const race = razas[raceKey];
//           return (
//             <button
//               key={raceKey}
//               onClick={() => handleSelectRace(raceKey)}
//               className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
//                 character.race === raceKey
//                   ? "bg-blue-500 text-[var(--color5)]"
//                   : "bg-[var(--color2)]"
//               }`}
//             >
//               {race.nombre}
//             </button>
//           );
//         })}
//       </div>

//       {/* Información de la Raza Seleccionada */}
//       {selectedRace && (
//         <div className="mt-5 mb-6 w-[620px] text-center text-xl">
//           <p className="text-4xl mb-4 text-center">Detalles de la Raza</p>
//           <div className="bg-[var(--color6)] rounded-xl p-4">
//             <p>
//               <strong>Bonificadores:</strong>{" "}
//               {JSON.stringify(selectedRace.bonificadores)}
//             </p>
//             <p>
//               <strong>Pasos:</strong> {selectedRace.pasos}
//             </p>
//             <p>
//               <strong>Visión en la oscuridad:</strong>{" "}
//               {selectedRace.visionEnLaOscuridad} pies
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Subrazas, si la raza seleccionada tiene subrazas */}
//       {selectedRace?.subrazas && (
//         <div className="mt-5 mb-6 w-[620px] text-center text-xl">
//           <p className="text-3xl mb-4 text-center">Elige tu Subraza</p>
//           <div className="grid grid-cols-3 gap-2">
//             {Object.keys(selectedRace.subrazas).map((subraceKey) => {
//               const subrace = selectedRace.subrazas[subraceKey];
//               return (
//                 <button
//                   key={subraceKey}
//                   onClick={() => handleSelectSubrace(subraceKey)}
//                   className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
//                     character.subrace === subraceKey
//                       ? "bg-blue-500 text-[var(--color5)]"
//                       : "bg-[var(--color2)]"
//                   }`}
//                 >
//                   {subrace.nombre}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Información de la Subraza Seleccionada */}
//       {selectedSubrace && (
//         <div className="mt-5 mb-6 w-[620px] text-center text-xl">
//           <p className="text-4xl mb-4 text-center">Detalles de la Subraza</p>
//           <div className="bg-[var(--color6)] rounded-xl p-4">
//             <p>
//               <strong>• Bonificadores:</strong>{" "}
//               {JSON.stringify(selectedSubrace.bonificadores)}
//             </p>
//             <p>
//               <strong>• Pasos:</strong> {selectedSubrace.pasos}
//             </p>
//             <p>
//               <strong>• Visión en la oscuridad:</strong>{" "}
//               {selectedSubrace.visionEnLaOscuridad} pies
//             </p>
//             {selectedSubrace.magia && (
//               <p>
//                 <strong>• Magia:</strong> {selectedSubrace.magia.join(", ")}
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Race;

import { useFetch } from "@/app/hooks/useFetch";

const Race = ({ character, setCharacter }) => {
  const { data: races, loading, error } = useFetch("/api/Routes/races");

  const handleSelectRace = (raceKey) => {
    const selectedRace = races.find((ra) => ra._id === raceKey);
    setCharacter({
      ...character,
      race: selectedRace ? selectedRace._id : null,
      subrace: null,
      speed: selectedRace ? selectedRace.pasos : 0,
      darkVision: selectedRace ? selectedRace.visionEnLaOscuridad : 0,
      raceBonuses: selectedRace ? selectedRace.bonificadores : {},
      subraceBonuses: {},
    });
  };
  const handleSelectSubrace = (subraceKey) => {
    const selectedRace = races.find((ra) => ra._id === character.race);
    const selectedSubrace = selectedRace?.subrazas
      ? selectedRace.subrazas[subraceKey] || null
      : null;

    setCharacter({
      ...character,
      subrace: subraceKey,
      speed: selectedSubrace ? selectedSubrace.pasos : selectedRace.pasos,
      darkVision: selectedSubrace
        ? selectedSubrace.visionEnLaOscuridad
        : selectedRace.visionEnLaOscuridad,
      subraceBonuses: selectedSubrace ? selectedSubrace.bonificadores : {},
    });
  };

  const selectedRace = races.find((ra) => ra._id === character.race);
  const selectedSubrace = selectedRace?.subrazas
    ? Object.entries(selectedRace.subrazas).find(
        ([key, sub]) => key === character.subrace
      )?.[1]
    : null;

  if (loading) return <p>Cargando razas...</p>;
  if (error) return <p>Error al cargar las razas: {error}</p>;

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5 underline decoration-2 underline-offset-4">
        Elige tu Raza
      </p>
      <div className="grid grid-cols-3 gap-2 mb-10">
        {races.map((race) => {
          return (
            <button
              key={race._id}
              onClick={() => handleSelectRace(race._id)}
              className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
                character.race === race._id
                  ? "bg-blue-500 text-[var(--color5)]"
                  : "bg-[var(--color2)]"
              }`}
            >
              {race.nombre}
            </button>
          );
        })}
      </div>

      {/* Información de la Raza Seleccionada */}
      {selectedRace && (
        <div className="mt-5 mb-6 w-[620px] text-center text-xl">
          <p className="text-4xl mb-4 text-center">Detalles de la Raza</p>
          <div className="bg-[var(--color6)] rounded-xl p-4">
            <p>
              <strong>Bonificadores:</strong>{" "}
              {JSON.stringify(selectedRace.bonificadores)}
            </p>
            <p>
              <strong>Pasos:</strong> {selectedRace.pasos}
            </p>
            <p>
              <strong>Visión en la oscuridad:</strong>{" "}
              {selectedRace.visionEnLaOscuridad} pies
            </p>
          </div>
        </div>
      )}

      {/* Subrazas, si la raza seleccionada tiene subrazas */}
      {selectedRace?.subrazas && (
        <div className="mt-5 mb-6 w-[620px] text-center text-xl">
          <p className="text-3xl mb-4 text-center">Elige tu Subraza</p>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(selectedRace.subrazas).map(([key, subrace]) => (
              <button
                key={key}
                onClick={() => handleSelectSubrace(key)}
                className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
                  character.subrace === key
                    ? "bg-blue-500 text-[var(--color5)]"
                    : "bg-[var(--color2)]"
                }`}
              >
                {subrace.nombre}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Información de la Subraza Seleccionada */}
      {selectedSubrace && (
        <div className="mt-5 mb-6 w-[620px] text-center text-xl">
          <p className="text-4xl mb-4 text-center">Detalles de la Subraza</p>
          <div className="bg-[var(--color6)] rounded-xl p-4">
            <p>
              <strong>• Bonificadores:</strong>{" "}
              {JSON.stringify(selectedSubrace.bonificadores)}
            </p>
            <p>
              <strong>• Pasos:</strong> {selectedSubrace.pasos}
            </p>
            <p>
              <strong>• Visión en la oscuridad:</strong>{" "}
              {selectedSubrace.visionEnLaOscuridad} pies
            </p>
            {selectedSubrace.magia && (
              <p>
                <strong>• Magia:</strong> {selectedSubrace.magia.join(", ")}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Race;
