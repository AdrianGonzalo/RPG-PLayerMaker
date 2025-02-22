import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f5f5dc",
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "right",
    marginBottom: 10,
    fontSize: 14,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    lineHeight: 2,
  },
  centeredText: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginVertical: 10,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    padding: 10,
  },
  placeholderImage: {
    width: 120,
    height: 160,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: "center",
  },
  attributeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  attributeValue: {
    fontSize: 12,
    textAlign: "left",
    width: "35%",
    lineHeight: 2,
  },
  attributeName: {
    fontSize: 12,
    textAlign: "right",
    width: "65%",
    lineHeight: 2,
  },
  footer: {
    marginTop: "auto",
    textAlign: "center",
    fontSize: 10,
    borderTopWidth: 1,
    borderColor: "#000",
    paddingTop: 10,
  },
});

const CharacterPDF = ({ character }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* <Image src="/Images/watermark.png" style={styles.image} /> */}

      <Text style={styles.title}>Ficha de Personaje</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.text}>
            Nombre: {character.name || "No especificado"}
          </Text>
          <Text style={styles.text}>
            Sexo: {character.sex || "No especificado"}
          </Text>
          <Text style={styles.text}>
            Raza: {character.race || "No especificada"}
          </Text>
          <Text style={styles.text}>
            Subraza: {character.subrace || "Ninguna"}
          </Text>
          <Text style={styles.text}>
            Clase: {character.class || "No especificada"}
          </Text>
          <Text style={styles.text}>
            Clase: {character.subclass || "No especificada"}
          </Text>
          <Text style={styles.text}>Vida: {character.life || "Ninguna"}</Text>
          <Text style={styles.text}>
            Velocidad: {character.speed || "Ninguna"}
          </Text>
          <Text style={styles.text}>
            Visión en la Oscuridad: {character.darkVision || "Ninguna"}
          </Text>
        </View>

        <View style={styles.column}>
          <View style={styles.placeholderImage} />
        </View>

        <View style={styles.column}>
          <Text style={styles.subtitle}>Atributos</Text>
          {Object.entries(character.attributesWithBonuses || {}).map(
            ([attr, { base, bonus, total }]) => (
              <View key={attr} style={styles.attributeRow}>
                <Text style={styles.attributeValue}>
                  {total} ({base}
                  {bonus !== 0 && ` +${bonus}`})
                </Text>
                <Text style={styles.attributeName}>{attr}</Text>
              </View>
            )
          )}
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.column}>
        <Text style={styles.sectionTitle}>Bonificador de Raza:</Text>
        {Object.entries(character.raceBonuses || {}).map(([attr, value]) => (
          <Text
            key={attr}
            style={styles.centeredText}
          >{`${attr}: +${value}`}</Text>
        ))}

        {character.subraceBonuses && (
          <>
            <Text style={styles.sectionTitle}>Bonificadores de Subraza:</Text>
            {Object.entries(character.subraceBonuses).map(([attr, value]) => (
              <Text
                key={attr}
                style={styles.centeredText}
              >{`${attr}: +${value}`}</Text>
            ))}
          </>
        )}
      </View>

      <View style={styles.line} />

      <View style={styles.section}>
        <View style={{ marginBottom: 4 }}>
          <Text style={styles.sectionTitle}>Bonificador de Clase</Text>
          <Text style={styles.centeredText}>{`Dado de Golpe: ${
            character.classHitDie || "No especificado"
          }`}</Text>
          <Text style={styles.centeredText}>{`Habilidad Primaria: ${
            character.classPrimaryAbility || "No especificado"
          }`}</Text>
          <Text style={styles.centeredText}>{`Armas: ${
            character.classWeapons || "No especificado"
          }`}</Text>
          <Text style={styles.centeredText}>{`Tiradas de Salvación: ${
            character.classSavingThrows || "No especificado"
          }`}</Text>
          <Text style={styles.centeredText}>{`Rasgos: ${
            character.classFeatures || "No especificado"
          }`}</Text>
        </View>

        <View style={{ marginBottom: 5 }}>
          <Text style={styles.sectionTitle}>Bonificador de Subclase</Text>
          {character.selectedSubclass?.name ? (
            <Text style={styles.centeredText}>
              {`Rasgos: ${
                character.selectedSubclass.features?.length > 0
                  ? character.selectedSubclass.features.join(", ")
                  : "No especificado"
              }`}
            </Text>
          ) : (
            <Text style={styles.centeredText}>No especificado</Text>
          )}
        </View>
      </View>

      <View style={styles.centeredText}>
        {character.background?.description && (
          <>
            <View style={styles.line} />
            <Text style={styles.sectionTitle}>Historia del Trasfondo</Text>
            <Text style={styles.text}>{character.background.description}</Text>
          </>
        )}

        {character.background?.features?.length > 0 && (
          <>
            {character.background.features?.length > 0 && (
              <Text
                style={styles.text}
              >{`Rasgos: ${character.background.features.join(", ")}`}</Text>
            )}
          </>
        )}
      </View>

      {character.history && (
        <>
          <View style={styles.line} />
          <Text style={styles.sectionTitle}>Historia del Personaje</Text>
          <Text style={styles.text}>{character.history}</Text>
        </>
      )}

      <View style={styles.footer}>
        <Text>From Create RPG Player</Text>
        <Text>By AdrianDev</Text>
      </View>
    </Page>
  </Document>
);

export default CharacterPDF;
