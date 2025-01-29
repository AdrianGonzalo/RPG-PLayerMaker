const razas = {
  elfo: {
    bonificadores: { destreza: 2 },
    pasos: 30,
    visionEnLaOscuridad: 60,
    subrazas: {
      drow: {
        bonificadores: { carisma: 1 },
        magia: ["Oscuridad", "Danza de las sombras"],
        pasos: 30,
        visionEnLaOscuridad: 60,
      },

      elfoBosque: {
        bonificadores: { sabiduria: 1 },
        pasos: 35,
        visionEnLaOscuridad: 60,
      },

      elfoAlto: {
        bonificadores: { inteligencia: 1 },
        magia: ["Truco"],
        pasos: 30,
        visionEnLaOscuridad: 60,
      },

      elfoGris: {
        bonificadores: { sabiduria: 1 },
        pasos: 30,
        visionEnLaOscuridad: 60,
      },
    },
  },

  humano: {
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
    bonificadores: { inteligencia: 2, constitucion: 1 },
    pasos: 30,
    visionEnLaOscuridad: 60,
  },

  semiOrco: {
    bonificadores: { fuerza: 2, constitucion: 1 },
    pasos: 30,
    visionEnLaOscuridad: 60,
  },

  enano: {
    bonificadores: { fuerza: 2, constitucion: 2 },
    pasos: 25,
    visionEnLaOscuridad: 60,
    subrazas: {
      enanoMontaña: {
        bonificadores: { fuerza: 1 },
        pasos: 25,
        visionEnLaOscuridad: 60,
      },

      enanoColina: {
        bonificadores: { constitucion: 1 },
        pasos: 25,
        visionEnLaOscuridad: 60,
      },
    },
  },

  semiElfo: {
    bonificadores: { fuerza: 1, destreza: 1, inteligencia: 1 },
    pasos: 30,
    visionEnLaOscuridad: 60,
  },

  mediano: {
    bonificadores: { destreza: 2 },
    pasos: 25,
    visionEnLaOscuridad: 0,
  },

  gnomo: {
    bonificadores: { inteligencia: 2, constitucion: 1 },
    pasos: 25,
    visionEnLaOscuridad: 60,
    subrazas: {
      gnomoBosque: {
        bonificadores: { sabiduria: 1 },
        pasos: 25,
        visionEnLaOscuridad: 60,
      },

      gnomoRoca: {
        bonificadores: { constitucion: 1 },
        pasos: 25,
        visionEnLaOscuridad: 60,
      },
    },
  },

  dragonborn: {
    bonificadores: { fuerza: 2, carisma: 1 },
    pasos: 30,
    visionEnLaOscuridad: 0,
  },
};
