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
        <div className="flex justify-center items-center bg-[var(--background)]">
          <div className="bg-[var(--color2)] m-20 rounded-xl w-[1000px] h-[1300px]">
            <div className="flex flex-col items-center p-10 gap-10 ">
              <p className="text-3xl">
                ¿Tienes dudas sobre como crear tu personaje?
              </p>
              <p>
                No te preocupes, nuestro escudero de confianza Timmy te
                explicara todo lo que necesites saber para crear tu personaje
                paso a paso.
              </p>
              <div className="flex justify-around gap-10">
                <div>
                  {/* <div>
                    <p className="text-2xl mb-2">• Nombre de tu heroe</p>
                    <p>
                      En esta parte podras poner el nombre que mas represente a
                      tu heroe.
                    </p>
                  </div>
                  <br></br>
                  <div>
                    <p className="text-2xl mb-2">• Elige tu Sexo</p>
                    <p>
                      En esta seccion podras elegir el sexo de tu personaje.
                    </p>
                  </div>
                  <br></br> */}
                  <div>
                    <p className="text-2xl mb-2">• Elige tu Raza</p>
                    <p>
                      En este apartado podras elegir entre una multitud de
                      razas, de las cuales, elfo, enano y gnomo tienen otra
                      eleccion mas para elegir, la subraza.
                    </p>
                    <p>
                      En cuanto selecciones la raza y subraza si la seleccionada
                      tiene, podreis ver los bonificadores con los que cuenta,
                      los pasos, vision en la oscuridad...
                    </p>
                    <p>Elige la que mas se adecue a tu heroe. </p>
                  </div>
                  <br></br>
                  <div>
                    <p className="text-2xl mb-2">• Elige tu Clase</p>
                    <p>
                      En esta eleccion podras elegir entre una multitud de
                      clases, de las cuales, todas tendran su respectiva
                      subclase.
                    </p>
                    <p>
                      En cuanto selecciones la clase y subclase, podreis ver
                      toda la informacion necesaria, dado de daño, habilidad
                      primaria, competencia con armas....
                    </p>
                    <p>
                      Cada clase y subclase otorgan características distintas,
                      por lo que elige la que mas se adecue a tu heroe.
                    </p>
                  </div>
                  <br></br>
                  <div>
                    <p className="text-2xl mb-2">• Elige tu Trasfondo</p>
                    <p>
                      En una partida de rol es importante tener un pasado y
                      justamente el trasfondo te ayuda a ello.
                    </p>
                    <p>
                      Tendras una pequeña y general definicion del trasfondo
                      escogido para que complementes la historia de tu
                      personaje.
                    </p>
                    <p>
                      Dependiendo el trasfondo elegido obtedras unas habilidades
                      o otras.
                    </p>
                    <p>
                      Piensa en el pasado de tu personaje y elige la que mas se
                      adecue a el.
                    </p>
                  </div>
                  <br></br>
                  <div>
                    <p className="text-2xl mb-2">• Crea tus atributos</p>
                    <p>
                      La parte mas importante de tu personaje, los atributos,
                      para saber que atributos tendra tu personaje se tiran 4
                      dados d6 (6 caras) y de esas 4 tiradas se descarta la mas
                      baja y se suman las demas tiradas dejando un total de x,
                      asi para cada atributo.
                    </p>
                    <p>
                      Debido a que es puro azar y esto en las normas no esta,
                      hemos decidido añadir un boton para resear las tiradas
                      siempre y cuando no se haya completado la cuarta.
                    </p>
                    <p>Por lo demas, buena suerte :)</p>
                  </div>
                  <br></br>
                  <div>
                    <p className="text-2xl mb-2">
                      • Cuanta Vida tendra tu personaje
                    </p>
                    <p>
                      Despues de elegir todo y saber tus atributos te queda
                      saber cuanta vida tendra tu personaje y para suerte de ti,
                      jugador, no sera al azar, sino que sera una simple suma
                      entre el maximo numero de tu dado de golpe y tu
                      constitución.
                    </p>
                  </div>
                  <br></br>
                  <p>
                    Despues de toda esta chapa ya estaras listo para afrontar tu
                    camino a las tierras intermedias, mucha suerte y que nuestro
                    señor te acompañe.
                  </p>
                </div>
                <div className="w-[500px] h-[300px] bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4">
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
