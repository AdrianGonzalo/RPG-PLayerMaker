const Sex = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5">Elige tu Sexo</p>
      <div className="flex gap-2 mb-10">
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          HOMBRE
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          MUJER
        </button>
      </div>
    </div>
  );
};

export default Sex;
