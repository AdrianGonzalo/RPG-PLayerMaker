import { useEffect, useState } from "react";
import { clases } from "../utils/Classs";
import { razas } from "../utils/Race";

const Heroe = ({ character }) => {
  const selectedClass = clases[character.class] || {};
  const selectedSubclass = selectedClass.subclasses?.[character.subclass] || {};

  const hitDieMax = selectedClass.hitDie
    ? parseInt(selectedClass.hitDie.replace("d", ""))
    : 0;
  const constitutionScore = character.attributes?.["Constitución"] || 10;
  const constitutionModifier = Math.floor((constitutionScore - 10) / 2);
  const totalHP = hitDieMax + constitutionModifier;

  // Obtener bonificadores de raza y subraza
  const selectedRace = razas[character.race] || {};
  const selectedSubrace = selectedRace.subrazas?.[character.subrace] || {};

  const raceBonuses = selectedRace.bonificadores || {};
  const subraceBonuses = selectedSubrace.bonificadores || {};

  // Obtener bonificadores de clase y subclase
  const classBonuses = selectedClass.bonificadores || {};
  const subclassBonuses = selectedSubclass.bonificadores || {};

  // Mapeo para nombres correctos
  const attributeMap = {
    Fuerza: "fuerza",
    Destreza: "destreza",
    Constitución: "constitucion",
    Inteligencia: "inteligencia",
    Sabiduría: "sabiduria",
    Carisma: "carisma",
  };

  const attributeKeys = Object.keys(attributeMap);

  useEffect(() => {
    if (character.class) {
      const selectedClass = clases[character.class];
      setClassBonuses(selectedClass?.bonuses || {});
    } else {
      setClassBonuses({});
    }

    if (character.class && character.subclass) {
      const selectedSubclass =
        clases[character.class]?.subclasses?.[character.subclass];
      setSubclassBonuses(selectedSubclass?.bonuses || {});
    } else {
      setSubclassBonuses({});
    }
  }, [character.class, character.subclass]);

  return (
    <div className="flex justify-center items-center flex-col text-2xl">
      <div className="bg-[var(--color5)] rounded-xl w-[1000px] h-auto border-[var(--bordercreate)] border-2 m-20 text-center p-6">
        <p className="text-[70px] mb-10 mt-6 text-[var(--color3)]">
          {character.name}
        </p>
        <p className="mb-10">
          {character.race}
          {character.subrace ? ` [${character.subrace}]` : ""}
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            {attributeKeys.map((attr) => {
              const baseValue = character.attributes?.[attr] || 10;
              const mappedKey = attributeMap[attr];
              const raceBonus = raceBonuses[mappedKey] || 0;
              const subraceBonus = subraceBonuses[mappedKey] || 0;
              const classBonus = classBonuses[mappedKey] || 0;
              const subclassBonus = subclassBonuses[mappedKey] || 0;
              const totalBonus =
                raceBonus + subraceBonus + classBonus + subclassBonus;
              const totalValue = baseValue + totalBonus;

              return (
                <p key={attr}>
                  {attr} {baseValue}
                  {totalBonus > 0 && (
                    <span className="text-green-500"> +{totalBonus}</span>
                  )}
                </p>
              );
            })}
          </div>
          <div className="bg-black w-[200px] h-[200px] p-16 m-6">Imagen</div>
          <div className="flex flex-col justify-center">
            <p>{totalHP} Vida</p>
            <p>{character.speed} Velocidad</p>
            <p>{character.darkVision} Visión en la oscuridad</p>
          </div>
        </div>
        <p className="mb-4">Sexo: {character.sex}</p>
        <p className="mb-4">
          Clase: {character.class}{" "}
          {character.subclass ? `[${character.subclass}]` : ""}
        </p>

        {/* Mostrar descripción y habilidades del trasfondo */}
        {character.background && (
          <div className="mt-4 bg-[var(--color6)] rounded-xl p-4 text-lg">
            <p className="mb-4 font-bold">
              Trasfondo:{" "}
              {character.background
                ? character.background.name
                : "No seleccionado"}
            </p>
            <p className="font-bold text-xl mb-2">Descripción:</p>
            <p>{character.background.description}</p>
            <p className="font-bold text-xl mt-4 mb-2">Habilidades:</p>
            <ul className="list-disc list-inside">
              {character.background.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-center gap-6">
          {/* Sección de Bonificadores de Raza y Subraza */}
          <div className="mt-6 p-4 bg-[var(--color4)] rounded-xl">
            <p className="text-3xl mb-4">Bonificadores de Raza y Subraza</p>
            {Object.entries(raceBonuses).length > 0 && (
              <div className="mb-4">
                <p className="text-xl font-bold">Bonificadores de Raza:</p>
                <ul>
                  {Object.entries(raceBonuses).map(([key, value]) => (
                    <li key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}: +{value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {Object.entries(subraceBonuses).length > 0 && (
              <div>
                <p className="text-xl font-bold">Bonificadores de Subraza:</p>
                <ul>
                  {Object.entries(subraceBonuses).map(([key, value]) => (
                    <li key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}: +{value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* Sección de Bonificadores de Clase y Subclase */}
          <div className="mt-6 p-4 bg-[var(--color4)] rounded-xl">
            <p className="text-3xl mb-4">Bonificadores de Clase y Subclase</p>
            {Object.entries(classBonuses).length > 0 && (
              <div className="mb-4">
                <p className="text-xl font-bold">Bonificadores de Clase:</p>
                <ul>
                  {Object.entries(classBonuses).map(([key, value]) => (
                    <li key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}: +{value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {Object.entries(subclassBonuses).length > 0 && (
              <div>
                <p className="text-xl font-bold">Bonificadores de Subclase:</p>
                <ul>
                  {Object.entries(subclassBonuses).map(([key, value]) => (
                    <li key={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}: +{value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroe;
