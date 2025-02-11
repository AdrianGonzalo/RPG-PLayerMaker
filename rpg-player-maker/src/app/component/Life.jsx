import { clases } from "../utils/Classs";

const Life = ({ character }) => {
  const selectedClass = clases[character.clase];

  const hitDieMax = selectedClass
    ? parseInt(selectedClass.hitDie.replace("d", ""))
    : 0;

  const constitutionScore = character.attributes?.["Constitución"] || 10;
  const constitutionModifier = Math.floor((constitutionScore - 10) / 2);

  // Calcular los puntos de vida
  const totalHP = hitDieMax + constitutionModifier;

  return (
    <div>
      <p className="text-4xl mb-8 w-full text-center underline decoration-2 underline-offset-4">
        ¿Cuánta vida tendrá tu personaje?
      </p>
      <div className="text-center bg-[var(--color2)] px-8 py-2 rounded-lg">
        <p className="text-2xl">
          Máximo del dado de golpe ({hitDieMax}) + Modificador de Constitución (
          {constitutionModifier})
        </p>
        <p className="text-2xl">
          {hitDieMax} + {constitutionModifier} = {totalHP} HP
        </p>
      </div>
    </div>
  );
};

export default Life;
