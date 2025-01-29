import { useState } from "react";
import { razas } from "../utils/Race";

const Race = () => {
  const [selectedRace, setSelectedRace] = useState("null"); // estado color
  const [selectedSubrace, setSelectedSubrace] = useState("null"); // estado subraza

  const handleSelectRace = (race) => {
    setSelectedRace(race);
  };

  const handleSelectSubrace = (subrace) => {
    setSelectedSubrace(subrace);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5 underline decoration-2 underline-offset-4">
        Elige tu Raza
      </p>
      <div className="grid grid-cols-3 gap-2 mb-10">
        {Object.keys(razas).map((raceKey) => {
          const race = razas[raceKey];
          return (
            <button
              key={raceKey}
              onClick={() => handleSelectRace(raceKey)}
              className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
                selectedRace === raceKey
                  ? "bg-blue-500 text-[var(--color5)]"
                  : "bg-[var(--color2)]"
              }`}
            >
              {race.nombre}
            </button>
          );
        })}
      </div>

      {selectedRace !== "null" && razas[selectedRace].subrazas && (
        <div className="mt-5 mb-6">
          <p className="text-3xl mb-4 text-center">Elige tu Subraza</p>
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(razas[selectedRace].subrazas).map((subraceKey) => {
              const subrace = razas[selectedRace].subrazas[subraceKey];
              return (
                <button
                  key={subraceKey}
                  onClick={() => handleSelectSubrace(subraceKey)}
                  className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
                    selectedSubrace === subraceKey
                      ? "bg-blue-500 text-[var(--color5)]"
                      : "bg-[var(--color2)]"
                  }`}
                >
                  {subrace.nombre}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Race;
