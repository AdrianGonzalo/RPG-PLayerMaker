import jsPDF from "jspdf";

export const generatePDF = (character, fileName = "personaje.pdf") => {
  if (!character) return;

  const pdf = new jsPDF();

  // Título
  pdf.setFontSize(16);
  pdf.text(`Ficha de Personaje`, 105, 20, { align: "center" });

  pdf.setFontSize(12);
  let y = 40;
  const lineHeight = 10;

  // Información básica
  pdf.text(`Nombre: ${character.name}`, 10, y);
  pdf.text(`Sexo: ${character.sex}`, 10, (y += lineHeight));

  // Raza y subraza
  pdf.text("Raza:", 10, (y += lineHeight));
  pdf.text(`  ${character.race}`, 20, (y += lineHeight));
  if (character.subrace) {
    pdf.text(`  Subraza: ${character.subrace}`, 20, (y += lineHeight));
  }

  // Bonificadores de raza y subraza
  if (character.raceBonuses && Object.keys(character.raceBonuses).length > 0) {
    pdf.text("Bonificadores de Raza:", 10, (y += lineHeight));
    Object.entries(character.raceBonuses).forEach(([key, value]) => {
      pdf.text(`  ${key}: +${value}`, 20, (y += lineHeight));
    });
  }

  if (
    character.subraceBonuses &&
    Object.keys(character.subraceBonuses).length > 0
  ) {
    pdf.text("Bonificadores de Subraza:", 10, (y += lineHeight));
    Object.entries(character.subraceBonuses).forEach(([key, value]) => {
      pdf.text(`  ${key}: +${value}`, 20, (y += lineHeight));
    });
  }

  // Clase y subclase
  pdf.text("Clase:", 10, (y += lineHeight + 5));
  pdf.text(`  ${character.class}`, 20, (y += lineHeight));
  if (character.subclass) {
    pdf.text(`  Subclase: ${character.subclass}`, 20, (y += lineHeight));
  }

  // Bonificadores de clase y subclase
  if (character.selectedClass) {
    pdf.text("Bonificadores de Clase:", 10, (y += lineHeight));

    if (character.selectedClass.hitDie) {
      pdf.text(
        `  Dado de golpe: ${character.selectedClass.hitDie}`,
        20,
        (y += lineHeight)
      );
    }
    if (character.selectedClass.primaryAbility) {
      pdf.text(
        `  Habilidad primaria: ${character.selectedClass.primaryAbility}`,
        20,
        (y += lineHeight)
      );
    }
    if (character.selectedClass.weapons) {
      pdf.text(
        `  Armas: ${character.selectedClass.weapons}`,
        20,
        (y += lineHeight)
      );
    }
    if (character.selectedClass.savingThrows?.length > 0) {
      pdf.text(
        `  Tiradas de salvación: ${character.selectedClass.savingThrows.join(
          ", "
        )}`,
        20,
        (y += lineHeight)
      );
    }
    if (character.selectedClass.features?.length > 0) {
      pdf.text(
        `  Rasgos: ${character.selectedClass.features.join(", ")}`,
        20,
        (y += lineHeight)
      );
    }
  }

  if (
    character.selectedSubclass &&
    character.selectedSubclass.features?.length > 0
  ) {
    pdf.text("Bonificadores de Subclase:", 10, (y += lineHeight));
    pdf.text(
      `  Rasgos: ${character.selectedSubclass.features.join(", ")}`,
      20,
      (y += lineHeight)
    );
  }

  // Atributos (columna derecha)
  pdf.text("Atributos:", 120, 40);
  let yRight = 50;
  const attributes = character.attributes || {};
  Object.entries(attributes).forEach(([attr, value]) => {
    pdf.text(`${attr}: ${value}`, 120, yRight);
    yRight += lineHeight;
  });

  // Trasfondo
  let yBackground = Math.max(y, yRight) + 20;
  if (character.background) {
    pdf.text(`Trasfondo: ${character.background.name}`, 10, yBackground);
    pdf.text(`Historia:`, 10, yBackground + 10);
    pdf.text(
      character.background.description || "Sin descripción",
      15,
      yBackground + 20,
      { maxWidth: 180 }
    );
  }

  pdf.save(fileName);
};
