import jsPDF from "jspdf";

const imagePath = "/Images/watermark.png";

export const generatePDF = (character, fileName = "personaje.pdf") => {
  if (!character) return;

  const pdf = new jsPDF();
  const pageHeight = pdf.internal.pageSize.height;
  const pageWidth = pdf.internal.pageSize.width; // Definir el ancho de la página
  const margin = 10;
  const lineHeight = 10;
  let y = 20;

  const addNewPage = () => {
    pdf.addPage();
    y = margin;
  };

  const checkPageLimit = () => {
    if (y + lineHeight >= pageHeight - margin) {
      addNewPage();
    }
  };

  // Fondo
  pdf.setFillColor(245, 245, 220); // Color beige (RGB: 245, 245, 220)
  pdf.rect(0, 0, pageWidth, pageHeight, "F"); // Rectángulo que cubre toda la página

  // Añadir imagen al centro de la página
  const imageWidth = 120; // Ajusta el tamaño de la imagen
  const imageHeight = 120; // Ajusta el tamaño de la imagen
  const centerX = (pageWidth - imageWidth) / 2; // Calcular posición X para centrar
  const centerY = (pageHeight - imageHeight) / 2 - 75; // Subir la imagen más, ajustando la posición Y

  pdf.addImage(imagePath, "PNG", centerX, centerY, imageWidth, imageHeight); // Añadir imagen

  // Título principal
  pdf.setFontSize(16);
  pdf.text(`Ficha de Personaje`, 105, y, { align: "center" });
  y += 20;

  pdf.setFontSize(12);

  // Atributos
  pdf.text(`Nombre: ${character.name || "No especificado"}`, margin, y);
  const atributosWidth = pdf.getTextWidth("Atributos");
  const xAtributos = pageWidth - margin - atributosWidth; // Restamos el ancho de "Atributos" para alinearlo a la derecha

  pdf.text("Atributos", xAtributos, y);
  y += lineHeight;
  pdf.text(`Sexo: ${character.sex || "No especificado"}`, margin, y);

  // Atributos alineados a la derecha con mismo margen superior que el nombre
  let yRight = y;
  Object.entries(character.attributes || {}).forEach(([attr, value]) => {
    // Calcula el ancho del texto
    const textWidth = pdf.getTextWidth(`${attr}: ${value}`);
    const xRight = pageWidth - margin - textWidth; // Restamos el ancho del texto del margen para alinear a la derecha

    pdf.text(`${attr}: ${value}`, xRight, yRight);
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

  // Línea negra más ancha encima de los bonificadores de Raza y Subraza
  const lineY = y; // Guardamos la posición actual para la línea
  pdf.setLineWidth(1.5); // Aumenta el grosor de la línea
  pdf.setDrawColor(0, 0, 0); // Color negro para la línea
  pdf.line(margin, lineY, pageWidth - margin, lineY); // Dibuja la línea desde el margen izquierdo hasta el margen derecho
  y += 10; // Aumenta el margen inferior (espacio debajo de la línea)

  // Bonificadores de Raza y Subraza centrado
  pdf.setFontSize(12); // Establecer tamaño de fuente a 12
  pdf.text("Bonificadores de Raza y Subraza", pageWidth / 2, y, {
    align: "center",
  });
  y += lineHeight;

  const raceBonuses = Object.entries(character.raceBonuses || {});
  const subraceBonuses = Object.entries(character.subraceBonuses || {});

  let yBonuses = y;

  // Bonificaciones de raza
  pdf.text("Bonificador de Raza:", pageWidth / 2, yBonuses, {
    align: "center",
  });
  yBonuses += lineHeight;
  raceBonuses.forEach(([attr, value]) => {
    pdf.text(`${attr}: +${value}`, pageWidth / 2, yBonuses, {
      align: "center",
    });
    yBonuses += lineHeight;
    checkPageLimit();
  });

  // Bonificaciones de subraza con título
  if (subraceBonuses.length > 0) {
    pdf.text("Bonificadores de Subraza:", pageWidth / 2, yBonuses, {
      align: "center",
    });
    yBonuses += lineHeight;
    subraceBonuses.forEach(([attr, value]) => {
      pdf.text(`${attr}: +${value}`, pageWidth / 2, yBonuses, {
        align: "center",
      });
      yBonuses += lineHeight;
      checkPageLimit();
    });
  }

  // Bonificadores de Clase y Subclase centrado
  const rightColumnX = pageWidth / 2; // Alineado al centro
  pdf.setFontSize(12); // Establecer tamaño de fuente a 12
  pdf.text("Bonificadores de Clase y Subclase", rightColumnX, yBonuses, {
    align: "center",
  });
  yBonuses += lineHeight;

  // Información sobre la clase centrado
  pdf.text("Bonificador de Clase:", rightColumnX, yBonuses, {
    align: "center",
  });
  yBonuses += lineHeight;
  pdf.text(
    `Dado de Golpe: ${character.classHitDie || "No especificado"}`,
    rightColumnX,
    yBonuses,
    { align: "center" }
  );
  yBonuses += lineHeight;
  pdf.text(
    `Habilidad Primaria: ${character.classPrimaryAbility || "No especificado"}`,
    rightColumnX,
    yBonuses,
    { align: "center" }
  );
  yBonuses += lineHeight;
  pdf.text(
    `Armas: ${character.classWeapons || "No especificado"}`,
    rightColumnX,
    yBonuses,
    { align: "center" }
  );
  yBonuses += lineHeight;
  pdf.text(
    `Tiradas de Salvación: ${character.classSavingThrows || "No especificado"}`,
    rightColumnX,
    yBonuses,
    { align: "center" }
  );
  yBonuses += lineHeight;
  pdf.text(
    `Rasgos: ${character.classFeatures || "No especificado"}`,
    rightColumnX,
    yBonuses,
    { align: "center" }
  );
  yBonuses += lineHeight;

  checkPageLimit();

  // Historia del trasfondo centrado
  if (character.background?.description) {
    pdf.text(`Historia del Trasfondo:`, pageWidth / 2, yBonuses, {
      align: "center",
    });
    const backgroundLines = pdf.splitTextToSize(
      character.background.description,
      180
    );
    backgroundLines.forEach((line) => {
      pdf.text(line, pageWidth / 2, (yBonuses += lineHeight), {
        align: "center",
      });
      checkPageLimit();
    });
  }

  // Habilidades del trasfondo centrado
  if (
    character.background?.features &&
    character.background.features.length > 0
  ) {
    pdf.text("Habilidades del Trasfondo:", pageWidth / 2, yBonuses, {
      align: "center",
    });
    yBonuses += lineHeight;

    // Mostrar cada habilidad centrado
    character.background.features.forEach((feature, index) => {
      pdf.text(`• ${feature}`, pageWidth / 2, yBonuses, { align: "center" });
      yBonuses += lineHeight;
      checkPageLimit();
    });
  }

  // Historia del personaje centrado
  if (character.history) {
    pdf.text("Historia del Personaje:", pageWidth / 2, yBonuses, {
      align: "center",
    });
    const historyLines = pdf.splitTextToSize(character.history, 180);
    historyLines.forEach((line) => {
      pdf.text(line, pageWidth / 2, (yBonuses += lineHeight), {
        align: "center",
      });
      checkPageLimit();
    });
  }

  pdf.save(fileName);
};
