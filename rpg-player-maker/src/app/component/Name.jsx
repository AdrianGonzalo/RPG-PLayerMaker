const Name = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5">Nombre de tu Héroe</p>
      <input
        type="text"
        placeholder="Escribe el nombre de tu héroe legendario..."
        className="w-[450px] bg-[var(--background)] border-[var(--bordercreate)] border-2 rounded-lg p-1 text-center mb-10"
      />
    </div>
  );
};

export default Name;
