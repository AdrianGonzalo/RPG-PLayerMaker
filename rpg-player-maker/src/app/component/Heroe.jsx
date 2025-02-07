const Heroe = ({ character }) => {
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
            <p>Constitucion {character.attributes.Constitución}</p>
            <p>Inteligencia {character.attributes.Inteligencia}</p>
            <p>Sabiduria {character.attributes.Sabiduría}</p>
            <p>Carisma {character.attributes.Carisma}</p>
          </div>
          <div className="bg-black w-[200px] h-[200px] p-16 m-6 ">Imagen</div>
          <div className="flex flex-col justify-center">
            <p>9 Vida</p>
            <p>30 Velocidad</p>
            <p>60 Vision oscuridad</p>
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
