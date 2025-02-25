// HeroeRaceDetails.jsx
import { useState, useEffect } from "react";

import { razas } from "../../../utils/Race";

const HeroeRaceDetails = ({ character, onBonusesUpdateRace }) => {
  const [isOpenRace, setIsOpenRace] = useState(false);
  const [raceBonuses, setRaceBonuses] = useState({});
  const [subraceBonuses, setSubrazeBonuses] = useState({});

  const toggleVisibilityRace = () => {
    setIsOpenRace(!isOpenRace);
  };

  useEffect(() => {
    const selectedRace = razas[character.race] || {};
    const selectedSubrace = selectedRace.subrazas?.[character.subrace] || {};

    const raceBonus = selectedRace.bonificadores || {};
    const subraceBonus = selectedSubrace.bonificadores || {};

    setRaceBonuses(raceBonus);
    setSubrazeBonuses(subraceBonus);

    onBonusesUpdateRace(raceBonus, subraceBonus);
  }, [character.race, character.subrace, onBonusesUpdateRace]);

  return (
    <div>
      <div className="mt-6 p-4 border-4 border-slate-600 mb-4 w-[1000px] text-center">
        <div className="text-4xl text-[var(--color4)] flex justify-center items-center gap-4">
          Raza: {character.race}
          {character.subrace ? ` [ ${character.subrace} ]` : ""}
          <div
            onClick={toggleVisibilityRace}
            style={{ cursor: "pointer", fontSize: "18px" }}
          >
            {isOpenRace ? "▼" : "▲"}
          </div>
        </div>

        {isOpenRace && (
          <>
            {[raceBonuses, subraceBonuses].map(
              (bonuses, idx) =>
                bonuses &&
                Object.keys(bonuses).length > 0 && (
                  <div key={idx} className="mt-6 mb-4">
                    <p className="text-2xl text-[var(--color7)]">
                      {idx === 0
                        ? "• Bonificadores de Raza:"
                        : "• Bonificadores de Subraza:"}
                    </p>
                    <ul className="text-xl">
                      {Object.entries(bonuses).map(([key, value]) => (
                        <li key={key}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}: +{value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HeroeRaceDetails;
