"use client";

import Button from "./Button";

import { useState } from "react";

const Window = ({ onAccept }) => {
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    setVisible(false);
    onAccept();
  };

  return (
    <>
      {visible && (
        <div className="flex justify-center items-center bg-[var(--background)]">
          <div className="bg-[var(--color2)] m-20 rounded-xl w-[1000px] h-auto">
            <div className="flex flex-col items-center m-5 p-2">
              <p className="text-5xl flex justify-center mt-4">
                Bienvenidos aventureros
              </p>
              <br></br>
              <p className="text-2xl text-center">
                En esta aplicación podréis crear a vuestro aventurero favorito
                eligiendo nombre, sexo, raza, subraza, clase, subclase,
                trasfondo, atributos y vida. También la aplicación os irá
                guiando con las ventajas que tiene cada raza, clase... El
                aventurero será lv 1 y siguiendo las normas de D&D 5e.
              </p>
              <br></br>
              <p className="text-2xl text-center mt-4">
                Gracias por confiar en mi{" "}
                <span className="text-red-500">&lt;3</span> :)
              </p>
              <Button onClick={handleButtonClick}>Forjar a tu Heroe</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Window;
