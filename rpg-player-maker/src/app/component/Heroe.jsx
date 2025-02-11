import { clases } from "../utils/Classs";

const Heroe = ({ character }) => {
  const selectedClass = clases[character.clase];
  const hitDieMax = selectedClass
    ? parseInt(selectedClass.hitDie.replace("d", ""))
    : 0;
  const constitutionScore = character.attributes?.["Constitución"] || 10;
  const constitutionModifier = Math.floor((constitutionScore - 10) / 2);
  const totalHP = hitDieMax + constitutionModifier;

  return (
    <div className="flex justify-center items-center flex-col text-2xl">
      <div className="bg-[var(--color5)] rounded-xl w-[1000px] h-auto border-[var(--bordercreate)] border-2 m-20 text-center p-6">
        <p className="text-[70px] mb-10 mt-6 text-[var(--color3)]">
          {character.name}
        </p>
        <p className="mb-10">
          {character.race}[{character.subrace}]
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <p>Fuerza {character.attributes.Fuerza}</p>
            <p>Destreza {character.attributes.Destreza}</p>
            <p>Constitución {character.attributes.Constitución}</p>
            <p>Inteligencia {character.attributes.Inteligencia}</p>
            <p>Sabiduría {character.attributes.Sabiduría}</p>
            <p>Carisma {character.attributes.Carisma}</p>
          </div>
          <div className="bg-black w-[200px] h-[200px] p-16 m-6 ">Imagen</div>
          <div className="flex flex-col justify-center">
            <p>{totalHP} Vida</p>
            <p>{character.speed} Velocidad</p>
            <p>{character.darkVision} Visión en la oscuridad</p>
          </div>
        </div>
        <p className="mb-4">Sexo: {character.sex}</p>
        <p className="mb-4">
          Clase: {character.clase}{" "}
          {character.subclass ? `[${character.subclass}]` : ""}
        </p>
        <p className="mb-4">
          Trasfondo:{" "}
          {character.background ? character.background.name : "No seleccionado"}
        </p>
      </div>
    </div>
  );
};

export default Heroe;
