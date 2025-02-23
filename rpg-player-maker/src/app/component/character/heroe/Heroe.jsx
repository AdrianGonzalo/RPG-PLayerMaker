// import { useState, useRef } from "react";

// import { clases } from "../../../utils/Classs";
// import { razas } from "../../../utils/Race";

// import { PDFDownloadLink } from "@react-pdf/renderer";
// import CharacterPDF from "../../pdf/CharacterPDF";

// import HeroeImage from "./HeroeImage";
// import HeroeRaceDetails from "./HeroeRaceDetails";

// const Heroe = ({ character }) => {
//   // const [isOpenRace, setIsOpenRace] = useState(false);
//   const [isOpenClass, setIsOpenClass] = useState(false);
//   const [isOpenBackground, setIsOpenBackground] = useState(false);

//   // const toggleVisibilityRace = () => {
//   //   setIsOpenRace(!isOpenRace);
//   // };

//   const toggleVisibilityClass = () => {
//     setIsOpenClass(!isOpenClass);
//   };

//   const toggleVisibilityBackground = () => {
//     setIsOpenBackground(!isOpenBackground);
//   };

//   const characterRef = useRef(null);

//   const selectedClass = clases[character.class] || {};
//   const selectedSubclass = selectedClass.subclasses?.[character.subclass] || {};
//   const selectedRace = razas[character.race] || {};
//   const selectedSubrace = selectedRace.subrazas?.[character.subrace] || {};

//   const hitDieMax = selectedClass.hitDie
//     ? parseInt(selectedClass.hitDie.replace("d", ""))
//     : 0;
//   const constitutionModifier = Math.floor(
//     ((character.attributes?.["Constitución"] || 10) - 10) / 2
//   );
//   const totalHP = hitDieMax + constitutionModifier;

//   const raceBonuses = selectedRace.bonificadores || {};
//   const subraceBonuses = selectedSubrace.bonificadores || {};
//   const classBonuses = selectedClass.bonificadores || {};
//   const subclassBonuses = selectedSubclass.bonificadores || {};

//   const attributeMap = {
//     Fuerza: "fuerza",
//     Destreza: "destreza",
//     Constitución: "constitucion",
//     Inteligencia: "inteligencia",
//     Sabiduría: "sabiduria",
//     Carisma: "carisma",
//   };

//   const attributesWithBonuses = {};
//   Object.keys(attributeMap).forEach((attr) => {
//     const baseValue = character.attributes?.[attr] || 10;
//     const mappedKey = attributeMap[attr];
//     const totalBonus =
//       (raceBonuses[mappedKey] || 0) +
//       (subraceBonuses[mappedKey] || 0) +
//       (classBonuses[mappedKey] || 0) +
//       (subclassBonuses[mappedKey] || 0);

//     attributesWithBonuses[attr] = {
//       base: baseValue,
//       bonus: totalBonus,
//       total: baseValue + totalBonus,
//     };
//   });

//   return (
//     <div className="flex justify-center items-center flex-col text-2xl">
//       <div
//         ref={characterRef}
//         className="bg-[var(--color5)] rounded-xl w-[1000px] h-auto border-[var(--bordercreate)] border-2 m-20 text-center p-6"
//       >
//         <p className="text-[70px] mb-10 mt-6 text-[var(--color1)]">
//           {character.name}
//         </p>

//         <p className="mb-6 text-3xl">Sexo: {character.sex}</p>

//         {/* Contenedor flex para centrar la imagen */}
//         <div className="flex justify-center items-center gap-10 mb-6">
//           {/* Columna Izquierda (Atributos) */}
//           <div className="flex flex-col justify-center text-right w-[150px]">
//             {Object.keys(attributeMap).map((attr) => {
//               const baseValue = character.attributes?.[attr] || 10;
//               const mappedKey = attributeMap[attr];
//               const totalBonus =
//                 (raceBonuses[mappedKey] || 0) +
//                 (subraceBonuses[mappedKey] || 0) +
//                 (classBonuses[mappedKey] || 0) +
//                 (subclassBonuses[mappedKey] || 0);
//               return (
//                 <p key={attr}>
//                   {attr} {baseValue}
//                   {totalBonus > 0 && (
//                     <span className="text-green-500"> +{totalBonus}</span>
//                   )}
//                 </p>
//               );
//             })}
//           </div>

//           {/* Imagen en el centro
//           <div className="flex justify-center items-center">
//             <div className="bg-black w-[200px] h-[200px] flex-shrink-0 flex items-center justify-center text-white text-lg font-bold">
//               Imagen
//             </div>
//           </div> */}

//           <HeroeImage character={character} />

//           {/* Columna Derecha (Estadísticas) */}
//           <div className="flex flex-col justify-center w-[150px] text-center">
//             <p>{totalHP} Vida</p>
//             <p>{character.speed} Velocidad</p>
//             <p className="whitespace-nowrap">
//               {character.darkVision} Visión en la oscuridad
//             </p>
//           </div>
//         </div>

//         {/* <div className="mt-6 p-4 border-4 border-slate-600 w-full mb-4">
//           <div className="text-4xl text-[var(--color4)] flex justify-center items-center gap-4">
//             Raza: {character.race}
//             {character.subrace ? ` [ ${character.subrace} ]` : ""}
//             <div
//               onClick={toggleVisibilityRace}
//               style={{ cursor: "pointer", fontSize: "18px" }}
//             >
//               {isOpenRace ? "▼" : "▲"}
//             </div>
//           </div>

//           {isOpenRace && (
//             <>
//               {[raceBonuses, subraceBonuses].map(
//                 (bonuses, idx) =>
//                   bonuses &&
//                   Object.keys(bonuses).length > 0 && (
//                     <div key={idx} className="mt-6 mb-4">
//                       <p className="text-2xl text-[var(--color7)]">
//                         {idx === 0
//                           ? "• Bonificadores de Raza:"
//                           : "• Bonificadores de Subraza:"}
//                       </p>
//                       <ul className="text-xl">
//                         {Object.entries(bonuses).map(([key, value]) => (
//                           <li key={key}>
//                             {key.charAt(0).toUpperCase() + key.slice(1)}: +
//                             {value}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )
//               )}
//             </>
//           )}
//         </div> */}

//         <HeroeRaceDetails
//           character={character}
//           onBonusesUpdate={handleRaceBonusesUpdate}
//         />

//         <div className=" border-4 border-slate-600 w-full">
//           <div className="mt-4 mb-4 text-4xl text-[var(--color4)] flex justify-center items-center gap-4">
//             Clase: {character.class}
//             {character.subclass ? ` [ ${character.subclass} ]` : ""}
//             <div
//               onClick={toggleVisibilityClass}
//               style={{ cursor: "pointer", fontSize: "18px" }}
//             >
//               {isOpenClass ? "▼" : "▲"}
//             </div>
//           </div>

//           {isOpenClass && (
//             <>
//               {selectedClass.name && (
//                 <div className=" p-4 text-lg">
//                   <div className="mb-6">
//                     <p className="text-2xl mb-4 text-[var(--color7)]">
//                       • Bonificadores de Clase
//                     </p>
//                     <ul className="text-2xl">
//                       <div className="flex justify-center gap-4 mb-4">
//                         <p>Dado de golpe: </p>
//                         <li>{selectedClass.hitDie}</li>
//                       </div>
//                       <div className="flex  justify-center gap-4 mb-4">
//                         <p>Habilidad primaria: </p>
//                         <li>{selectedClass.primaryAbility}</li>
//                       </div>
//                       <div className="flex justify-center gap-4 mb-4">
//                         <p>Armas: </p>
//                         <li>{selectedClass.weapons}</li>
//                       </div>
//                       <div className="flex  justify-center gap-4 mb-4">
//                         <p>Tiradas de salvación: </p>
//                         <li>{selectedClass.savingThrows?.join(", ")}</li>
//                       </div>
//                       <div className="flex justify-center gap-4 mb-4">
//                         <p>Rasgos: </p>
//                         <li>{selectedClass.features?.join(", ")}</li>
//                       </div>
//                     </ul>
//                   </div>

//                   {selectedSubclass.name && (
//                     <div className="mt-4 p-4 text-lg">
//                       <p className="text-2xl mb-4 text-[var(--color7)]">
//                         • Bonificadores de Subclase
//                       </p>
//                       <ul className="text-2xl">
//                         <li>Rasgos: {selectedSubclass.features?.join(", ")}</li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </>
//           )}
//         </div>

//         {character.background && (
//           <div className="mt-4  text-lg border-4 border-slate-600 w-full">
//             <div className="mt-4 mb-4 text-4xl text-[var(--color4)] flex justify-center items-center gap-4 ">
//               Trasfondo: {character.background.name}
//               <div
//                 onClick={toggleVisibilityBackground}
//                 style={{ cursor: "pointer", fontSize: "18px" }}
//               >
//                 {isOpenBackground ? "▼" : "▲"}
//               </div>
//             </div>

//             {isOpenBackground && (
//               <>
//                 <p className="text-2xl">{character.background.description}</p>
//                 <p className="text-2xl mt-4 mb-2 text-[var(--color7)]">
//                   • Habilidades:
//                 </p>
//                 <ul className="flex list-disc list-inside text-2xl justify-center gap-2 mb-4">
//                   {character.background.features.map((feature, index) => (
//                     <ul className="ml-4 mr-4" key={index}>
//                       {feature}
//                     </ul>
//                   ))}
//                 </ul>
//               </>
//             )}
//           </div>
//         )}

//         {character.history && (
//           <div className="mt-6 p-4 border-4 border-slate-600 w-full">
//             <p className="text-4xl text-[var(--color4)] text-center mb-4">
//               Historia del Personaje
//             </p>
//             <p className="text-2xl text-justify">{character.history}</p>
//           </div>
//         )}

//         <div className="mt-10">
//           <PDFDownloadLink
//             document={
//               <CharacterPDF
//                 character={{
//                   ...character,
//                   raceBonuses,
//                   subraceBonuses,
//                   life: totalHP,
//                   attributesWithBonuses, // Atributos con bonificadores
//                   classHitDie: selectedClass?.hitDie,
//                   classPrimaryAbility: selectedClass?.primaryAbility,
//                   classWeapons: selectedClass?.weapons,
//                   classSavingThrows: selectedClass?.savingThrows?.join(", "),
//                   classFeatures: selectedClass?.features?.join(", "),
//                   selectedSubclass,
//                 }}
//               />
//             }
//             fileName="Ficha de Personaje.pdf"
//           >
//             {({ loading }) => (
//               <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
//                 {loading ? "Generando PDF..." : "Descargar Ficha en PDF"}
//               </button>
//             )}
//           </PDFDownloadLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heroe;

import { useState } from "react";

import HeroeRaceDetails from "./HeroeRaceDetails";
import HeroeClassDetails from "./HeroeClassDetails";

const Heroe = ({ character }) => {
  //Code the Race
  const [raceBonuses, setRaceBonuses] = useState({});
  const [subrace, setSubrazeBonuses] = useState({});

  const handleRaceBonusesUpdate = (race, subrace) => {
    setRaceBonuses(race);
    setSubrazeBonuses(subrace);
  };

  //Code the Class
  const [classBonuses, setClassBonuses] = useState({});
  const [subclassBonuses, setSubclasBonuses] = useState({});

  const handleClassBonusesUpdate = (classs, subclass) => {
    setClassBonuses(classs);
    setSubclasBonuses(subclass);
  };

  return (
    <div className="flex justify-center items-center flex-col text-2xl">
      <HeroeRaceDetails
        character={character}
        onBonusesUpdateRace={handleRaceBonusesUpdate}
      />

      <HeroeClassDetails
        character={character}
        onBonusesUpdateClass={handleClassBonusesUpdate}
      />
    </div>
  );
};

export default Heroe;
