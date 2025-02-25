// HeroeClassDetails.jsx
import { useState, useEffect } from "react";

import { clases } from "../../../utils/Classs";

const HeroeClassDetails = ({ character, onBonusesUpdateClass }) => {
  const [isOpenClass, setIsOpenClass] = useState(false);
  const [classBonuses, setClassBonuses] = useState({});
  const [subclassBonuses, setSubclasBonuses] = useState({});

  const toggleVisibilityClass = () => {
    setIsOpenClass(!isOpenClass);
  };

  const selectedClass = clases[character.class] || {};
  const selectedSubclass = selectedClass.subclasses?.[character.subclass] || {};

  useEffect(() => {
    const classBonus = {
      hitDie: selectedClass.hitDie,
      primaryAbility: selectedClass.primaryAbility,
      weapons: selectedClass.weapons,
      savingThrows: selectedClass.savingThrows,
      features: selectedClass.features,
    };

    const subclassBonus = {
      features: selectedSubclass.features,
    };

    setClassBonuses(classBonus);
    setSubclasBonuses(subclassBonus);

    console.log("Clase Bonificadores:", classBonus);
    console.log("Subclase Bonificadores:", subclassBonus);

    onBonusesUpdateClass(classBonus, subclassBonus);
  }, [character.class, character.subclass, onBonusesUpdateClass]);

  return (
    <div>
      <div className=" border-4 border-slate-600 w-[1000px] text-center">
        <div className="mt-4 mb-4 text-4xl text-[var(--color4)] flex justify-center items-center gap-4">
          Clase: {character.class}
          {character.subclass ? ` [ ${character.subclass} ]` : ""}
          <div
            onClick={toggleVisibilityClass}
            style={{ cursor: "pointer", fontSize: "18px" }}
          >
            {isOpenClass ? "▼" : "▲"}
          </div>
        </div>

        {isOpenClass && (
          <>
            {selectedClass.name && (
              <div className=" p-4 text-lg">
                <div className="mb-6">
                  <p className="text-2xl mb-4 text-[var(--color7)]">
                    • Bonificadores de Clase
                  </p>
                  <ul className="text-2xl">
                    <li className="flex justify-center gap-4 mb-4">
                      <p>Dado de golpe: </p>
                      <span>{selectedClass.hitDie}</span>
                    </li>
                    <li className="flex justify-center gap-4 mb-4">
                      <p>Habilidad primaria: </p>
                      <span>{selectedClass.primaryAbility}</span>
                    </li>
                    <li className="flex justify-center gap-4 mb-4">
                      <p>Armas: </p>
                      <span>{selectedClass.weapons}</span>
                    </li>
                    <li className="flex justify-center gap-4 mb-4">
                      <p>Tiradas de salvación: </p>
                      <span>{selectedClass.savingThrows?.join(", ")}</span>
                    </li>
                    <li className="flex justify-center gap-4 mb-4">
                      <p>Rasgos: </p>
                      <span>{selectedClass.features?.join(", ")}</span>
                    </li>
                  </ul>
                </div>

                {selectedSubclass.name && (
                  <div className="mt-4 p-4 text-lg">
                    <p className="text-2xl mb-4 text-[var(--color7)]">
                      • Bonificadores de Subclase
                    </p>
                    <ul className="text-2xl">
                      <li>Rasgos: {selectedSubclass.features?.join(", ")}</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HeroeClassDetails;
