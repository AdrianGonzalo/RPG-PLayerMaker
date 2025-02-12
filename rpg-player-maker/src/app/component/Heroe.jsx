import { clases } from "../utils/Classs";
import { razas } from "../utils/Race";

const Heroe = ({ character }) => {
  const selectedClass = clases[character.class] || {};
  const selectedSubclass = selectedClass.subclasses?.[character.subclass] || {};
  const selectedRace = razas[character.race] || {};
  const selectedSubrace = selectedRace.subrazas?.[character.subrace] || {};

  const hitDieMax = selectedClass.hitDie
    ? parseInt(selectedClass.hitDie.replace("d", ""))
    : 0;
  const constitutionModifier = Math.floor(
    ((character.attributes?.["Constitución"] || 10) - 10) / 2
  );
  const totalHP = hitDieMax + constitutionModifier;

  const raceBonuses = selectedRace.bonificadores || {};
  const subraceBonuses = selectedSubrace.bonificadores || {};
  const classBonuses = selectedClass.bonificadores || {};
  const subclassBonuses = selectedSubclass.bonificadores || {};

  const attributeMap = {
    Fuerza: "fuerza",
    Destreza: "destreza",
    Constitución: "constitucion",
    Inteligencia: "inteligencia",
    Sabiduría: "sabiduria",
    Carisma: "carisma",
  };

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
            {Object.keys(attributeMap).map((attr) => {
              const baseValue = character.attributes?.[attr] || 10;
              const mappedKey = attributeMap[attr];
              const totalBonus =
                (raceBonuses[mappedKey] || 0) +
                (subraceBonuses[mappedKey] || 0) +
                (classBonuses[mappedKey] || 0) +
                (subclassBonuses[mappedKey] || 0);
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
          Clase: {character.class}
          {character.subclass ? ` [${character.subclass}]` : ""}
        </p>

        {character.background && (
          <div className="mt-4 bg-[var(--color6)] rounded-xl p-4 text-lg">
            <p className="mb-4 font-bold">
              Trasfondo: {character.background.name || "No seleccionado"}
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
          <div className="mt-6 p-4 bg-[var(--color4)] rounded-xl">
            <p className="text-3xl mb-4">Bonificadores de Raza y Subraza</p>
            {[raceBonuses, subraceBonuses].map(
              (bonuses, idx) =>
                bonuses &&
                Object.keys(bonuses).length > 0 && (
                  <div key={idx} className="mb-4">
                    <p className="text-xl font-bold">
                      {idx === 0
                        ? "Bonificadores de Raza:"
                        : "Bonificadores de Subraza:"}
                    </p>
                    <ul>
                      {Object.entries(bonuses).map(([key, value]) => (
                        <li key={key}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}: +{value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>

          {selectedClass.name && (
            <div className="mt-4 bg-[var(--color6)] rounded-xl p-4 text-lg">
              <p className="text-xl font-bold">Características de Clase:</p>
              <ul>
                <li>
                  <strong>Dado de golpe:</strong> {selectedClass.hitDie}
                </li>
                <li>
                  <strong>Habilidad primaria:</strong>{" "}
                  {selectedClass.primaryAbility}
                </li>
                <li>
                  <strong>Armas:</strong> {selectedClass.weapons}
                </li>
                <li>
                  <strong>Tiradas de salvación:</strong>{" "}
                  {selectedClass.savingThrows?.join(", ")}
                </li>
                <li>
                  <strong>Rasgos:</strong> {selectedClass.features?.join(", ")}
                </li>
              </ul>
              {selectedSubclass.name && (
                <div className="mt-4 bg-[var(--color6)] rounded-xl p-4 text-lg">
                  <p className="text-xl font-bold">
                    Características de Subclase: {selectedSubclass.name}
                  </p>
                  <ul>
                    <li>
                      <strong>Rasgos:</strong>{" "}
                      {selectedSubclass.features?.join(", ")}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Heroe;
