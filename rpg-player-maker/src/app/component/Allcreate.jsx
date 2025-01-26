"use client";

import Name from "./Name";
import Sex from "./Sex";
import Race from "./Race";
import Class from "./Class";
import Background from "./Background";
import Attributes from "./Attributes";

import Button from "./Button";

const Allcreate = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[var(--color5)] rounded-xl w-[1000px] h-auto border-[var(--bordercreate)] border-2 m-20">
        <div className="flex flex-col items-center m-5">
          <Name />
          <Sex />
          <Race />
          <Class />
          <Background />
          <Attributes />

          <Button>Forja tu Heroe</Button>
        </div>
      </div>
    </div>
  );
};

export default Allcreate;
