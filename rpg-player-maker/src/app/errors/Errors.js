export const Errors = (character, razas, clases) => {
  if (!character.name || character.name.trim() === "") {
    return "Debes ingresar un nombre válido.";
  }

  if (!character.sex) {
    return "Debes seleccionar un sexo.";
  }

  if (!character.race) {
    return "Debes seleccionar una raza.";
  }

  if (character.race && razas[character.race]?.subrazas && !character.subrace) {
    return "Debes seleccionar una subraza.";
  }

  if (!character.class || typeof character.class !== "string") {
    return "Debes seleccionar una clase.";
  }

  if (
    character.class &&
    clases[character.class]?.subclasses &&
    Object.keys(clases[character.class].subclasses).length > 0 &&
    !character.subclass
  ) {
    return "Debes seleccionar una subclase.";
  }

  if (!character.background) {
    return "Debes seleccionar un trasfondo.";
  }

  if (Object.keys(character.attributes).length !== 6) {
    return "Debes asignar valores a los 6 atributos.";
  }

  return ""; // Sin errores
};
