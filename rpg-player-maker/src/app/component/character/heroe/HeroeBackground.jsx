// HeroeBackground.jsx
import { useEffect, useState } from "react";

const HeroeBackground = ({ character, onBonusesBackground }) => {
  const [isOpenBackground, setIsOpenBackground] = useState(false);

  const toggleVisibilityBackground = () => {
    setIsOpenBackground(!isOpenBackground);
  };

  useEffect(() => {
    if (character.background) {
      onBonusesBackground(character.background);
    }
  }, [character.background, onBonusesBackground]);

  return (
    <div>
      {character.background && (
        <div className="mt-4 text-lg border-4 border-slate-600 w-[1000px]">
          <div className="mt-4 mb-4 text-4xl text-[var(--color4)] flex justify-center items-center gap-4 ">
            Trasfondo: {character.background.nombre}
            <div
              onClick={toggleVisibilityBackground}
              style={{ cursor: "pointer", fontSize: "18px" }}
            >
              {isOpenBackground ? "▼" : "▲"}
            </div>
          </div>

          {isOpenBackground && (
            <>
              <p className="text-2xl text-center">
                {character.background.descripcion}
              </p>
              <div className="flex items-center justify-center my-6">
                <p className="text-2xl  text-[var(--color7)]">• Habilidades:</p>
                <ul className="flex text-2xl justify-center ">
                  {character.background.features.map((feature, index) => (
                    <ul className="ml-4 mr-4" key={index}>
                      {feature}
                    </ul>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroeBackground;
