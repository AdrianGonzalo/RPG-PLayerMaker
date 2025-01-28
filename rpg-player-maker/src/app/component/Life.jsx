const Life = () => {
  return (
    <div>
      <p className="text-4xl mb-8 w-full text-center underline decoration-2 underline-offset-4">
        Cuanta Vida tendra tu personaje?
      </p>
      <div className="text-center bg-[var(--color2)] px-8 py-2 rounded-lg">
        <p className="text-2xl">
          Máximo del dado de golpe + modificador de Constitución
        </p>
        <p className="text-2xl"> X + Y = Z hp</p>
      </div>
    </div>
  );
};

export default Life;
