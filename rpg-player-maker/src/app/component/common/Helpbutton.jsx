"use client";

import { useState } from "react";
import Image from "next/image";

const Helpbutton = () => {
  const [visible, setVisible] = useState(false);
  const handlehelpbutton = () => {
    setVisible(!visible);
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 flex justify-center items-center bg-[var(--background)] z-40">
          <div className="relative bg-[var(--color2)] m-10 rounded-xl w-[950px] h-auto border-double border-[10px] border-[var(--color6)]">
            <div className="p-10">
              <p className="text-3xl underline decoration-2 underline-offset-4 text-[var(--color4)] text-center mb-6">
                ¿Tienes dudas sobre como crear tu personaje?
              </p>
              <div>
                <p className="text-2xl mb-2 text-[var(--color4)]">
                  • ¿ Qué es una raza ?
                </p>
                <div className="pl-5">
                  <p>
                    Una raza define la herencia biológica y cultural de un
                    personaje, otorgándole rasgos especiales, atributos y
                    habilidades únicas que influyen en su historia y
                    jugabilidad.
                  </p>
                  <p>
                    En este apartado podrás elegir entre una multitud de razas,
                    de las cuales, elfo, enano y gnomo tienen otra elección más
                    para elegir, la subraza.
                  </p>
                  <p>
                    Cada raza y subraza tienen habilidades únicas, y a medida
                    que eliges puedes verlas para comparar y elegir la que más
                    se ajusta a tu héroe.
                  </p>
                </div>
                <br />
                <div className="mb-6">
                  <p className="text-2xl mb-2 text-[var(--color4)]">
                    • ¿ Qué es una clase ?
                  </p>
                  <div className="pl-5">
                    <p>
                      Una clase representa la profesión y estilo de combate de
                      un personaje, determinando sus habilidades, equipo, magia
                      y progresión a lo largo del juego.
                    </p>
                    <p>
                      En esta elección podrás elegir entre una multitud de
                      clases, con sus respectivas subclases.
                    </p>
                    <p>
                      Cada clase y subclase tienen habilidades únicas, así que
                      asegúrate de elegir lo que mejor te convenga.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-2xl mb-2 text-[var(--color4)]">
                  • ¿ Qué es el trasfondo ?
                </p>
                <div className="pl-5">
                  <p>
                    El trasfondo es la historia y origen de un personaje antes
                    de comenzar tu aventura.
                  </p>
                  <p>
                    Define sus habilidades, ayudando a darle profundidad y
                    contexto dentro del juego.
                  </p>
                </div>
              </div>
              <br />
              <div>
                <p className="text-2xl mb-2 text-[var(--color4)]">
                  • ¿ Cómo crear tus atributos ?
                </p>
                <div className="pl-5">
                  <p>
                    Los atributos son la parte más importante de tu personaje,
                    definirlos es muy sencillo, hay que tirar un d6 cuatro
                    veces, la tirada más baja se descarta, y la suma de las
                    otras tres tiradas hacen el atributo, así hasta completarlos
                    todos.
                  </p>
                </div>
              </div>
              <br />
              <div>
                <p className="text-2xl mb-2 text-[var(--color4)]">
                  • ¿ Cuánta vida tendrá tu personaje ?
                </p>
                <div className="pl-5">
                  <p>
                    Para saber la vida que tendrá tu personaje, para suerte de
                    ti, soldado, no será al azar, sino que se trata de una suma
                    entre tu máximo del dado de daño y tu constitución.
                  </p>
                </div>
              </div>
              <br />
              <p className="mb-2 pl-5">
                Después de toda esta chapa estarás preparado para dar pie a los
                Reinos Olvidados.
              </p>
              <p className="pl-5">Mucha suerte soldado, la necesitarás...</p>
            </div>
          </div>
        </div>
      )}

      {/* Botón de ayuda */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handlehelpbutton}
          className="h-[80px] w-[80px] rounded-full border-yellow-300 border-double border-4 flex items-center justify-center"
        >
          <p className="text-[80px] text-yellow-400">?</p>
        </button>
      </div>
    </>
  );
};

export default Helpbutton;
