// HeroeStats.jsx
import { useState, useEffect } from "react";

import HeroeImage from "./HeroeImage";

const HeroeStats = ({
  character,
  selectedClass,
  selectedRace,
  selectedSubrace,
  selectedSubclass,
}) => {
  const hitDieMax = selectedClass.hitDie
    ? parseInt(selectedClass.hitDie.replace("d", ""))
    : 0;
  const constitutionModifier = Math.floor(
    ((character.attributes?.["Constitución"] || 10) - 10) / 2
  );
  const totalHP = hitDieMax + constitutionModifier;

  const raceBonuses = selectedRace || {};
  const subraceBonuses = selectedSubrace || {};
  const classBonuses = selectedClass || {};
  const subclassBonuses = selectedSubclass || {};

  const attributeMap = {
    Fuerza: "fuerza",
    Destreza: "destreza",
    Constitución: "constitucion",
    Inteligencia: "inteligencia",
    Sabiduría: "sabiduria",
    Carisma: "carisma",
  };

  const attributesWithBonuses = {};
  Object.keys(attributeMap).forEach((attr) => {
    const baseValue = character.attributes?.[attr] || 10;
    const mappedKey = attributeMap[attr];
    const totalBonus =
      (raceBonuses[mappedKey] || 0) +
      (subraceBonuses[mappedKey] || 0) +
      (classBonuses[mappedKey] || 0) +
      (subclassBonuses[mappedKey] || 0);

    attributesWithBonuses[attr] = {
      base: baseValue,
      bonus: totalBonus,
      total: baseValue + totalBonus,
    };
  });
  return (
    <div>
      <div className="flex justify-center items-center gap-10 mb-6">
        {/* Columna Izquierda (Atributos) */}
        <div className="flex flex-col justify-center text-right w-[150px]">
          {Object.keys(attributeMap).map((attr) => {
            const { base, bonus } = attributesWithBonuses[attr];
            return (
              <p key={attr}>
                {attr} {base}
                {bonus > 0 && <span className="text-green-500"> +{bonus}</span>}
              </p>
            );
          })}
        </div>

        <HeroeImage />

        {/* Columna Derecha (Estadísticas) */}
        <div className="flex flex-col justify-center w-[150px] text-center">
          <p>{totalHP} Vida</p>
          <p>{character.speed} Velocidad</p>
          <p className="whitespace-nowrap">
            {character.darkVision} Visión en la oscuridad
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroeStats;
