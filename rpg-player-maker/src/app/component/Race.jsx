import { razas } from "../utils/Race";

const Race = ({ character, setCharacter }) => {
  const handleSelectRace = (race) => {
    setCharacter({ ...character, race, subrace: null }); // Resetea subraza al seleccionar nueva raza
  };

  const handleSelectSubrace = (subrace) => {
    setCharacter({ ...character, subrace });
  };

  const selectedRace = razas[character.race];
  const selectedSubrace = character.subrace
    ? selectedRace.subrazas[character.subrace]
    : null;

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
                character.race === raceKey
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
            {Object.keys(selectedRace.subrazas).map((subraceKey) => {
              const subrace = selectedRace.subrazas[subraceKey];
              return (
                <button
                  key={subraceKey}
                  onClick={() => handleSelectSubrace(subraceKey)}
                  className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
                    character.subrace === subraceKey
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
