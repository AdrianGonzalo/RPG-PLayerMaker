const Race = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5">Elige tu Raza</p>
      <div className="grid grid-cols-3 gap-2 mb-10">
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          ELFO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          TIEFLING
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          HUMANO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          SEMIORCO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          ENANO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          SEMIELFO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          MEDIANO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          GNOMO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          DRAGONBORN
        </button>
      </div>
    </div>
  );
};

export default Race;
