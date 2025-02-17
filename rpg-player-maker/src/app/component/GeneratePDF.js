import jsPDF from "jspdf";

export const generatePDF = (character, fileName = "personaje.pdf") => {
  if (!character) return;

  const pdf = new jsPDF();
  const pageHeight = pdf.internal.pageSize.height;
  let y = 20;
  const lineHeight = 10;
  const margin = 10;
  const rightColumnX = 120;

  const addNewPage = () => {
    pdf.addPage();
    y = margin;
  };

  const checkPageLimit = () => {
    if (y + lineHeight >= pageHeight - margin) {
      addNewPage();
    }
  };

  // Título principal
  pdf.setFontSize(16);
  pdf.text(`Ficha de Personaje`, 105, y, { align: "center" });
  y += 20;

  pdf.setFontSize(12);

  // Nombre y sexo
  pdf.text(`Nombre: ${character.name || "No especificado"}`, margin, y);
  pdf.text("Atributos:", rightColumnX, y);
  y += lineHeight;
  pdf.text(`Sexo: ${character.sex || "No especificado"}`, margin, y);

  // Atributos alineados a la derecha con mismo margen superior que el nombre
  let yRight = y;
  Object.entries(character.attributes || {}).forEach(([attr, value]) => {
    pdf.text(`${attr}: ${value}`, rightColumnX, yRight);
    yRight += lineHeight;
    checkPageLimit();
  });

  y += lineHeight;

  // Raza y subraza
  pdf.text(`Raza: ${character.race || "No especificada"}`, margin, y);
  y += lineHeight;
  pdf.text(`Subraza: ${character.subrace || "Ninguna"}`, margin, y);
  y += lineHeight;

  // Clase y subclase debajo de subraza
  pdf.text(`Clase: ${character.class || "No especificada"}`, margin, y);
  y += lineHeight;
  pdf.text(`Subclase: ${character.subclass || "Ninguna"}`, margin, y);
  y += lineHeight;

  // Trasfondo
  if (character.background?.name) {
    pdf.text(`Trasfondo: ${character.background.name}`, margin, y);
    y += lineHeight;
  }

  y += 5;
  checkPageLimit();

  // Bonificadores en dos columnas
  pdf.text("Bonificadores de Raza y Subraza", margin, y);
  pdf.text("Bonificadores de Clase y Subclase", rightColumnX, y);
  y += lineHeight;
  pdf.text("Bonificador de Raza:", margin, y);
  pdf.text("Bonificador de Clase:", rightColumnX, y);
  y += lineHeight;

  const raceBonuses = Object.entries(character.raceBonuses || {});
  const subraceBonuses = Object.entries(character.subraceBonuses || {});
  const classBonuses = Object.entries(character.classBonuses || {});

  let yLeft = y;
  let yRightBonuses = y;

  // Bonificaciones de raza
  raceBonuses.forEach(([attr, value]) => {
    pdf.text(`${attr}: +${value}`, margin + 10, yLeft);
    yLeft += lineHeight;
    checkPageLimit();
  });

  // Bonificaciones de subraza con título
  if (subraceBonuses.length > 0) {
    pdf.text("Bonificadores de Subraza:", margin, yLeft);
    yLeft += lineHeight;
    subraceBonuses.forEach(([attr, value]) => {
      pdf.text(`${attr}: +${value}`, margin + 10, yLeft);
      yLeft += lineHeight;
      checkPageLimit();
    });
  }

  // Bonificaciones de clase
  classBonuses.forEach(([attr, value]) => {
    pdf.text(`${attr}: +${value}`, rightColumnX + 10, yRightBonuses);
    yRightBonuses += lineHeight;
    checkPageLimit();
  });

  y = Math.max(yLeft, yRightBonuses) + 10;
  checkPageLimit();

  // Historia del trasfondo
  if (character.background?.description) {
    pdf.text(`Historia del Trasfondo:`, margin, y);
    const backgroundLines = pdf.splitTextToSize(
      character.background.description,
      180
    );
    pdf.text(backgroundLines, margin + 10, (y += lineHeight));
    y += backgroundLines.length * lineHeight;
    checkPageLimit();
  }

  // Historia del personaje
  if (character.history) {
    pdf.text("Historia del Personaje:", margin, y);
    const historyLines = pdf.splitTextToSize(character.history, 180);
    historyLines.forEach((line) => {
      pdf.text(line, margin + 10, (y += lineHeight));
      checkPageLimit();
    });
  }

  pdf.save(fileName);
};
