// import { background as backgrounds } from "../../utils/Background";

// const Background = ({ character, setCharacter }) => {
//   const handleBackground = (backgroundKey) => {
//     setCharacter({ ...character, background: backgrounds[backgroundKey] });
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <p className="text-4xl mb-5 underline decoration-2 underline-offset-4">
//         Elige tu Trasfondo
//       </p>
//       <div className="grid grid-cols-3 gap-2 mb-8">
//         {Object.keys(backgrounds).map((backgroundKey) => {
//           const backgroundObj = backgrounds[backgroundKey];
//           return (
//             <button
//               key={backgroundKey}
//               onClick={() => handleBackground(backgroundKey)}
//               className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
//                 character.background &&
//                 character.background.name === backgroundObj.name
//                   ? "bg-blue-500 text-[var(--color5)]"
//                   : "bg-[var(--color2)]"
//               }`}
//             >
//               {backgroundObj.name}
//             </button>
//           );
//         })}
//       </div>

//       {character.background && (
//         <div className="mt-5 mb-6 w-[620px] text-center text-xl">
//           <p className="text-4xl mb-4 text-center">Detalles del Trasfondo</p>
//           <div className="bg-[var(--color6)] rounded-xl p-4">
//             <p>{character.background.description}</p>
//             <div className="mt-3 flex justify-center gap-4">
//               <span>• Habilidades:</span>
//               {character.background.features.map((feature, index) => (
//                 <span key={index}>{feature}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Background;

import { useFetch } from "@/app/hooks/useFetch";

const Background = ({ character, setCharacter }) => {
  const {
    data: backgrounds,
    loading,
    error,
  } = useFetch("/api/Routes/background");

  const handleBackground = (backgroundKey) => {
    const selectedBackground = backgrounds.find(
      (bg) => bg._id === backgroundKey
    );
    setCharacter({ ...character, background: selectedBackground });
  };

  if (loading) return <p>Cargando trasfondos...</p>;
  if (error) return <p>Error al carlgar los trasfondos: {error}</p>;

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5 underline decoration-2 underline-offset-4">
        Elige tu Trasfondo
      </p>
      <div className="grid grid-cols-3 gap-2 mb-8">
        {backgrounds?.map((background) => (
          <button
            key={background._id}
            onClick={() => handleBackground(background._id)}
            className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
              character.background &&
              character.background._id === background._id
                ? "bg-blue-500 text-[var(--color5)]"
                : "bg-[var(--color2)]"
            }`}
          >
            {background.nombre}
          </button>
        ))}
      </div>

      {character.background && (
        <div className="mt-5 mb-6 w-[620px] text-center text-xl">
          <p className="text-4xl mb-4 text-center">Detalles del Trasfondo</p>
          <div className="bg-[var(--color6)] rounded-xl p-4">
            <p>{character.background.descripcion}</p>
            <div className="mt-3 flex justify-center gap-4">
              <span>• Habilidades:</span>
              {character.background.features.map((feature, index) => (
                <span key={index}>{feature}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Background;
