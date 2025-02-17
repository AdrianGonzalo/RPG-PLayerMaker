"use client";

import { razas } from "../utils/Race";
import { clases } from "../utils/Classs";
import { Errors } from "../utils/Errors";

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
import History from "./History";

import ErrorMessage from "./ErrorMessage";

import RainEffect from "./RainEffects/RainEffect";
import Chicken from "./Chicken/Chicken";

const Allcreate = () => {
  const [character, setCharacter] = useState({
    name: "",
    sex: null,
    race: null,
    subrace: null,
    class: null,
    subclass: null,
    background: null,
    attributes: {},
  });

  const [showSummary, setShowSummary] = useState(false);
  const [error, setError] = useState("");

  const handleCreateHero = () => {
    console.log("Estado del personaje:", character);
    const errorMessage = Errors(character, razas, clases);

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError("");
    setShowSummary(true);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[var(--color5)] rounded-xl w-[1000px] h-auto border-[var(--bordercreate)] border-2 m-20">
          <Chicken />
          <div className="flex flex-col items-center m-5 space-y-6">
            <Name character={character} setCharacter={setCharacter} />
            <Sex character={character} setCharacter={setCharacter} />
            <Race character={character} setCharacter={setCharacter} />
            <Class character={character} setCharacter={setCharacter} />
            <Background character={character} setCharacter={setCharacter} />
            <Attributes character={character} setCharacter={setCharacter} />
            <Life character={character} setCharacter={setCharacter} />
            <History character={character} setCharacter={setCharacter} />
            <Button onClick={handleCreateHero}>Forja tu Héroe</Button>
          </div>
        </div>
        {showSummary && <Heroe character={character} />}
        {error && <ErrorMessage message={error} onClose={() => setError("")} />}

        <RainEffect />
      </div>
    </>
  );
};

export default Allcreate;
