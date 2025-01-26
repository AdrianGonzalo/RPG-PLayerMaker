"use client";

import Button from "./Button";

import { useState } from "react";

const Window = () => {
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="flex justify-center items-center bg-[var(--background)]">
          <div className="bg-[var(--color2)] m-20 rounded-xl w-[1000px] h-auto">
            <div className="flex flex-col items-center m-5">
              <p className="text-5xl flex justify-center mt-4">
                Bienvenidos aventureros
              </p>

              <br></br>

              <p className="text-2xl">
                En esta aplicación podréis crear a vuestro aventurero favorito
                eligiendo raza, subraza, clase, subclase y trasfondo. También la
                aplicación os irá guiando con las ventajas o desventajas que
                tiene cada raza, clase... El aventurero por ahora será lv 1, en
                un futuro se le podrán subir niveles. Disfrutad y gracias por
                confiar en mi &lt;3 :)
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
