// HeroePDFDownload.jsx
import { PDFDownloadLink } from "@react-pdf/renderer";
import CharacterPDF from "../../pdf/CharacterPDF";

const HeroePDFDownload = ({
  character,
  raceBonuses,
  subraceBonuses,
  attributesWithBonuses,
  totalHP,
  selectedClass,
  selectedSubclass,
}) => {
  return (
    <div className="mt-10">
      <PDFDownloadLink
        document={
          <CharacterPDF
            character={{
              ...character,
              raceBonuses,
              subraceBonuses,
              life: totalHP,
              attributesWithBonuses,
              classHitDie: selectedClass?.hitDie,
              classPrimaryAbility: selectedClass?.primaryAbility,
              classWeapons: selectedClass?.weapons,
              classSavingThrows: selectedClass?.savingThrows?.join(", "),
              classFeatures: selectedClass?.features?.join(", "),
              selectedSubclass,
            }}
          />
        }
        fileName="Ficha de Personaje.pdf"
      >
        {({ loading }) => (
          <button className="mb-10 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
            {loading ? "Generando PDF..." : "Descargar Ficha en PDF"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default HeroePDFDownload;
