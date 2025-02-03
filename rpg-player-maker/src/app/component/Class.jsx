import { clases } from "../utils/Classs";

const Class = ({ character, setCharacter }) => {
  // Esta función selecciona la clase
  const handleSelectClass = (clase) => {
    setCharacter({ ...character, clase, subclass: null }); // Reinicia la subclase cuando se selecciona una nueva clase
  };

  // Esta función selecciona la subclase
  const handleSelectSubclass = (subclassKey) => {
    const selectedSubclass = selectedClass.subclasses[subclassKey]; // Accede a la subclase usando la clave
    setCharacter({ ...character, subclass: selectedSubclass.name }); // Almacena el nombre de la subclase seleccionada
  };

  // Obtenemos los detalles de la clase seleccionada
  const selectedClass = clases[character.clase];
  // Si hay una subclase seleccionada, obtenemos sus detalles
  const selectedSubclass = character.subclass
    ? selectedClass?.subclasses[
        Object.keys(selectedClass.subclasses).find(
          (subclassKey) =>
            selectedClass.subclasses[subclassKey].name === character.subclass
        )
      ]
    : null;

  // Función auxiliar para manejar valores que pueden no estar definidos
  const safeJoin = (value) => {
    if (Array.isArray(value) && value.length > 0) {
      return value.join(", ");
    } else if (typeof value === "string" && value.trim() !== "") {
      return value; // Si es un string no vacío, lo mostramos tal cual
    }
    return "No disponible"; // Si no es un array o un string válido
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-5 underline decoration-2 underline-offset-4">
        Elige tu Clase
      </p>

      {/* Mostrar las clases disponibles */}
      <div className="grid grid-cols-3 gap-2 mb-10">
        {Object.keys(clases).map((classKey) => {
          const clase = clases[classKey];
          return (
            <button
              key={classKey}
              onClick={() => handleSelectClass(classKey)}
              className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
                character.clase === classKey
                  ? "bg-blue-500 text-[var(--color5)]"
                  : "bg-[var(--color2)]"
              }`}
            >
              {clase.name}
            </button>
          );
        })}
      </div>

      {/* Mostrar detalles de la clase seleccionada */}
      {selectedClass && (
        <div className="mt-5 mb-6 w-[620px] text-center text-xl">
          <p className="text-4xl mb-4 text-center">Detalles de la Clase</p>
          <div className="bg-[var(--color6)] rounded-xl p-4">
            <p>
              <strong>Dado de Daño:</strong> {selectedClass.hitDie}
            </p>
            <p>
              <strong>Habilidad Primaria:</strong>{" "}
              {selectedClass.primaryAbility}
            </p>
            <p>
              <strong>Competencia de Armas:</strong>{" "}
              {safeJoin(selectedClass.weapons)}
            </p>
            <p>
              <strong>Tiros de Salvación:</strong>{" "}
              {safeJoin(selectedClass.savingThrows)}
            </p>
            <p>
              <strong>Características:</strong>{" "}
              {safeJoin(selectedClass.features)}
            </p>
          </div>
        </div>
      )}

      {/* Mostrar subclases si existen */}
      {selectedClass?.subclasses && (
        <div className="mt-5 mb-6 w-[620px] text-center text-xl">
          <p className="text-3xl mb-4 text-center">Elige tu Subclase</p>
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(selectedClass.subclasses).map((subclassKey) => {
              const subclass = selectedClass.subclasses[subclassKey];
              return (
                <button
                  key={subclassKey}
                  onClick={() => handleSelectSubclass(subclassKey)}
                  className={`w-[200px] bg-[var(--color2)] text-xl p-1 rounded-lg ${
                    character.subclass === subclass.name
                      ? "bg-blue-500 text-[var(--color5)]"
                      : "bg-[var(--color2)]"
                  }`}
                >
                  {subclass.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Mostrar detalles de la subclase seleccionada */}
      {selectedSubclass && (
        <div className="mt-5 mb-6 w-[620px] text-center text-xl">
          <p className="text-4xl mb-4 text-center">Detalles de la Subclase</p>
          <div className="bg-[var(--color6)] rounded-xl p-4">
            <p>
              <strong>Características:</strong>{" "}
              {safeJoin(selectedSubclass.features)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Class;
