export const razas = {
  elfo: {
    nombre: "Elfo",
    bonificadores: { destreza: 2 },
    pasos: 30,
    visionEnLaOscuridad: 60,
    subrazas: {
      drow: {
        nombre: "Drow",
        bonificadores: { carisma: 1 },
        magia: ["Oscuridad", "Danza de las sombras"],
        pasos: 30,
        visionEnLaOscuridad: 60,
      },

      elfoBosque: {
        nombre: "Elfo del bosque",
        bonificadores: { sabiduria: 1 },
        pasos: 35,
        visionEnLaOscuridad: 60,
      },

      elfoAlto: {
        nombre: "Elfo Alto",
        bonificadores: { inteligencia: 1 },
        magia: ["Truco"],
        pasos: 30,
        visionEnLaOscuridad: 60,
      },

      eladrin: {
        nombre: "Elfo Gris",
        bonificadores: { sabiduria: 1 },
        pasos: 30,
        visionEnLaOscuridad: 60,
      },
    },
  },

  humano: {
    nombre: "Humano",
    bonificadores: {
      fuerza: 1,
      destreza: 1,
      constitucion: 1,
      inteligencia: 1,
      sabiduria: 1,
      carisma: 1,
    },
    pasos: 30,
    visionEnLaOscuridad: 0,
  },

  tiefling: {
    nombre: "Tiefling",
    bonificadores: { inteligencia: 2, constitucion: 1 },
    pasos: 30,
    visionEnLaOscuridad: 60,
  },

  semiOrco: {
    nombre: "Semi-orco",
    bonificadores: { fuerza: 2, constitucion: 1 },
    pasos: 30,
    visionEnLaOscuridad: 60,
  },

  enano: {
    nombre: "Enano",
    bonificadores: { fuerza: 2, constitucion: 2 },
    pasos: 25,
    visionEnLaOscuridad: 60,
    subrazas: {
      enanoMontaña: {
        nombre: "Enano de Montaña",
        bonificadores: { fuerza: 1 },
        pasos: 25,
        visionEnLaOscuridad: 60,
      },

      enanoColina: {
        nombre: "Enano de Colina",
        bonificadores: { constitucion: 1 },
        pasos: 25,
        visionEnLaOscuridad: 60,
      },
    },
  },

  semiElfo: {
    nombre: "Semi-elfo",
    bonificadores: { fuerza: 1, destreza: 1, inteligencia: 1 },
    pasos: 30,
    visionEnLaOscuridad: 60,
  },

  mediano: {
    nombre: "Mediano",
    bonificadores: { destreza: 2 },
    pasos: 25,
    visionEnLaOscuridad: 0,
  },

  gnomo: {
    nombre: "Gnomo",
    bonificadores: { inteligencia: 2, constitucion: 1 },
    pasos: 25,
    visionEnLaOscuridad: 0,
    subrazas: {
      gnomoBosque: {
        nombre: "Gnomo del Bosque",
        bonificadores: { sabiduria: 1 },
        pasos: 25,
        visionEnLaOscuridad: 60,
      },

      gnomoRoca: {
        nombre: "Gnomo de Roca",
        bonificadores: { constitucion: 1 },
        pasos: 25,
        visionEnLaOscuridad: 0,
      },
    },
  },

  dragonborn: {
    nombre: "Dragonborn",
    bonificadores: { fuerza: 2, carisma: 1 },
    pasos: 30,
    visionEnLaOscuridad: 0,
  },
};
