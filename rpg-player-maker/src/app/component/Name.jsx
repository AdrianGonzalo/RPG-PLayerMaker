const Name = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5 underline decoration-2 underline-offset-4">
        Nombre de tu Héroe
      </p>
      <input
        type="text"
        placeholder="Escribe el nombre de tu héroe legendario..."
        className="w-[550px] bg-[var(--background)] border-[var(--bordercreate)] border-2 rounded-lg p-1 text-center mb-10 text-2xl"
      />
    </div>
  );
};

export default Name;
