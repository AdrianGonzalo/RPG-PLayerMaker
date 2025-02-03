const Sex = ({ character, setCharacter }) => {
  const handleSelectSex = (sex) => {
    setCharacter({ ...character, sex });
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5 underline decoration-2 underline-offset-4">
        Elige tu Sexo
      </p>
      <div className="flex gap-2 mb-10">
        <button
          onClick={() => handleSelectSex("HOMBRE")}
          className={`w-[200px] text-xl p-1 rounded-lg ${
            character.sex === "HOMBRE"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          HOMBRE
        </button>
        <button
          onClick={() => handleSelectSex("MUJER")}
          className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
            character.sex === "MUJER"
              ? "bg-blue-500 text-[var(--color5)]" // está seleccionado
              : "bg-[var(--color2)]" // no está seleccionado
          }`}
        >
          MUJER
        </button>
      </div>
    </div>
  );
};

export default Sex;
