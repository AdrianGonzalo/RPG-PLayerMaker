"use client";

import { useState } from "react";
import Name from "./Name";
import Sex from "./Sex";
import Race from "./Race";
import Class from "./Class";
import Background from "./Background";
import Attributes from "./Attributes";
import Life from "./Life";
import Button from "./Button";
import Heroe from "./Heroe";

const Allcreate = () => {
  const [character, setCharacter] = useState({
    name: "",
    sex: null,
    race: null,
    subrace: null,
    class: null,
    background: null,
    attributes: {},
    life: 0,
  });
  const [showSummary, setShowSummary] = useState(false);

  const handleCreateHero = () => {
    setShowSummary(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[var(--color5)] rounded-xl w-[1000px] h-auto border-[var(--bordercreate)] border-2 m-20">
        <div className="flex flex-col items-center m-5 space-y-6">
          <Name character={character} setCharacter={setCharacter} />
          <Sex character={character} setCharacter={setCharacter} />
          <Race character={character} setCharacter={setCharacter} />
          <Class character={character} setCharacter={setCharacter} />
          <Background character={character} setCharacter={setCharacter} />
          <Attributes character={character} setCharacter={setCharacter} />
          <Life character={character} setCharacter={setCharacter} />

          <Button onClick={handleCreateHero}>Forja tu Heroe</Button>
        </div>
      </div>
      {showSummary && <Heroe character={character} />}
    </div>
  );
};

export default Allcreate;
