"use client";

import { useState } from "react";
import { razas } from "../../utils/Race";
import { clases } from "../../utils/Classs";
import { Errors } from "@/app/errors/Errors";

import Name from "./Name";
import Sex from "./Sex";
import Race from "./Race";
import Class from "./Class";
import Background from "./Background";
import Attributes from "./Attributes";
import Life from "./Life";
import History from "./History";

import Button from "../common/Button";
import Heroe from "./heroe/Heroe";
import ErrorMessage from "../common/ErrorMessage";

import RainEffect from "../RainEffects/RainEffect";
import Chicken from "../Chicken/Chicken";

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
  const [created, setCreated] = useState(false);

  const handleCreateHero = () => {
    console.log("Estado del personaje:", character);
    const errorMessage = Errors(character, razas, clases);

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setError("");
    setShowSummary(true);
    setCreated(true);
  };

  const handleReset = () => {
    setCharacter({
      name: "",
      sex: null,
      race: null,
      subrace: null,
      class: null,
      subclass: null,
      background: null,
      attributes: {},
    });
    setShowSummary(false);
    setError("");
    setCreated(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[var(--color5)] rounded-xl w-[1000px] h-auto border-[var(--bordercreate)] border-2 m-20">
        <Chicken />

        {created ? (
          <div className="flex flex-col items-center p-5">
            <h2 className="text-xl font-bold">¡Personaje creado!</h2>
            <Button onClick={handleReset}>Crear otro personaje</Button>
          </div>
        ) : (
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
        )}
      </div>

      {showSummary && <Heroe character={character} />}
      {error && <ErrorMessage message={error} onClose={() => setError("")} />}
      <RainEffect />
    </div>
  );
};

export default Allcreate;
