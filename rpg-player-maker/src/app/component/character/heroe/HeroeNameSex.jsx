import { useState, useEffect } from "react";

const HeroeNameSex = ({ character, onNameSexUpdate }) => {
  const [name, setName] = useState({});
  const [sex, setSex] = useState({});

  useEffect(() => {
    onNameSexUpdate(name, sex);
  }, [character.name, character.sex, onNameSexUpdate]);

  return (
    <div>
      <p className="text-[70px] mb-10 mt-6 text-[var(--color1)] flex justify-center">
        {character.name}{" "}
      </p>
      <p className="mb-6 text-3xl flex justify-center">Sexo: {character.sex}</p>
    </div>
  );
};

export default HeroeNameSex;
