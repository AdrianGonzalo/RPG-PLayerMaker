const History = ({ character, setCharacter }) => {
  const handleChange = (e) => {
    setCharacter({ ...character, history: e.target.value });
  };

  return (
    <div>
      <div>
        <h2 className="text-4xl mb-8 mt-6 w-full text-center underline decoration-2 underline-offset-4">
          Escribe tu historia
        </h2>
        <textarea
          className="mb-6 w-[800px] rounded-xl bg-[var(--color6)] p-4 text-left placeholder:text-center text-xl"
          placeholder="Empieza a dar aquí tus primeros pasos... (si quieres)"
          value={character.history || ""}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default History;
