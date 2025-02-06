"use client";

import { useState } from "react";

const Helpbutton = () => {
  const [visible, setVisible] = useState(false); // Inicializa el estado como false

  const handlehelpbutton = () => {
    setVisible(!visible);
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 flex justify-center items-center bg-[var(--background)] z-40">
          <div className="bg-[var(--color2)] m-20 rounded-xl w-[1000px] h-auto border-double border-[10px] border-[var(--color6)]">
            <div className="flex flex-col items-center p-10 gap-10 text-[17px]">
              <p className="text-3xl underline decoration-2 underline-offset-4 text-[var(--color4)]">
                ¿Tienes dudas sobre como crear tu personaje?
              </p>
              <p className="text-xl">
                No te preocupes, nuestro escudero de confianza Timmy te
                explicara todo lo que necesites saber para crear tu personaje
                paso a paso.
              </p>
              <div className="flex justify-around gap-10">
                <div>
                  <div>
                    <p className="text-2xl mb-2 text-[var(--color4)]">
                      • Que es una raza?
                    </p>
                    <p>
                      Una raza define la herencia biológica y cultural de un
                      personaje, otorgándole rasgos especiales, atributos,
                      idioma y habilidades únicas que influyen en su historia y
                      jugabilidad.
                    </p>
                    <p>
                      En este apartado podras elegir entre una multitud de
                      razas, de las cuales, elfo, enano y gnomo tienen otra
                      eleccion mas para elegir, la subraza.
                    </p>
                    <p>
                      Cada raza y subraza tiene unas habilidades propias unicas,
                      y a medida que eliges puedes verlas para comparar y elegir
                      la que mas se ajusta a tu heroe.
                    </p>
                  </div>
                  <br></br>
                  <div>
                    <p className="text-2xl mb-2 text-[var(--color4)]">
                      • Que es una clase?
                    </p>
                    <p>
                      Una clase representa la profesión y estilo de combate de
                      un personaje, determinando sus habilidades , equipo, magia
                      y progresion a lo largo del juego.
                    </p>
                    <p>
                      En esta eleccion podras elegir entre una multitud de
                      clases, de las cuales, todas tendran su respectiva
                      subclase.
                    </p>
                    <p>
                      Cada clase y subclase tiene unas habilidades propias
                      unicas, y a medida que eliges puedes verlas para comparar
                      y elegir la que mas se ajusta a tu heroe.
                    </p>
                  </div>
                  <br></br>
                  <div>
                    <p className="text-2xl mb-2 text-[var(--color4)]">
                      • Ques es el trasfondo?
                    </p>
                    <p>
                      El Trasfondo es la historia y origen de un personaje antes
                      de comenzar tu aventura.
                    </p>
                    <p>
                      Define sus habilidades, motivaciones... ayudando a darle
                      profundidad y contexto dentro del juego.
                    </p>
                  </div>
                  <br></br>
                  <div>
                    <p className="text-2xl mb-2 text-[var(--color4)]">
                      • Como crear tus atributos?
                    </p>
                    <p>
                      Los atributos son la parte mas importante de tu personaje,
                      definirlos es muy sencillo, hay que tirar un d6 cuatro
                      veces, la tirada mas baja se descarta, y la suma de las
                      otras tres tiradas hacen el atributo, asi hasta
                      completarlos todos.
                    </p>
                    <p>
                      Debido a que es puro azar y esto en las normas no esta,
                      hemos decidido añadir un boton para resear las tiradas
                      siempre y cuando no se haya completado la cuarta.
                    </p>
                  </div>
                  <br></br>
                  <div>
                    <p className="text-2xl mb-2 text-[var(--color4)]">
                      • Cuanta Vida tendra tu personaje ?
                    </p>
                    <p>
                      Para saber la vida que tendra tu personaje, para suerte de
                      ti, jugador, no sera al azar, sino que se trata de una
                      suma entre tu maximo del dado de daño y tu constitución.
                    </p>
                  </div>
                  <br></br>
                </div>
                <div className="w-[500px] h-[300px] bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handlehelpbutton}
          className="h-[80px] w-[80px]  rounded-full border-yellow-300 border-double border-4 flex items-center justify-center"
        >
          <p className="text-[80px] text-yellow-400">?</p>
        </button>
      </div>
    </>
  );
};

export default Helpbutton;
