// HeroeHistory.jsx
import { useEffect } from "react";

const HeroeHistory = ({ character, onBonusesHistory }) => {
  useEffect(() => {
    onBonusesHistory(character.history);
  }, [character.history, onBonusesHistory]);

  return (
    <div>
      {character.history && (
        <div className="mt-6 p-4 border-4 border-slate-600 w-full">
          <p className="text-4xl text-[var(--color4)] text-center mb-4">
            Historia del Personaje
          </p>
          <p className="text-2xl text-justify">{character.history}</p>
        </div>
      )}
    </div>
  );
};

export default HeroeHistory;
