// HeroeHistory.jsx
import { useEffect, useState } from "react";

const HeroeHistory = ({ character, onBonusesHistory }) => {
  const [isOpenHistory, setIsOpenHistory] = useState(false);

  const toggleVisibilityHistory = () => {
    setIsOpenHistory(!isOpenHistory);
  };

  useEffect(() => {
    onBonusesHistory(character.history);
  }, [character.history, onBonusesHistory]);

  return (
    <div>
      {character.history && (
        <div className=" mt-6 p-6 border-4 border-slate-600 w-[1000px] h-auto">
          <div className="flex items-center justify-between text-4xl text-[var(--color4)]">
            <div className="flex justify-center text-center w-full gap-4">
              Historia del Personaje
              <div
                onClick={toggleVisibilityHistory}
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                {isOpenHistory ? "▼" : "▲"}
              </div>
            </div>
          </div>
          {isOpenHistory && (
            <>
              <p className="text-2xl text-justify mt-6">{character.history}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroeHistory;
