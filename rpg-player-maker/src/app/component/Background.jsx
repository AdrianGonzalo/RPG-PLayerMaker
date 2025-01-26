const Background = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5">Elige tu Trasfondo</p>
      <div className="grid grid-cols-3 gap-2 mb-10">
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          ACÓLITO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          CRIMINAL
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          SOLDADO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          ERUDITO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          MARINERO
        </button>
        <button className="w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg">
          HÉROE DEL PUEBLO
        </button>
      </div>
    </div>
  );
};

export default Background;
