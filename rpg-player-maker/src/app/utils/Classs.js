export const clases = {
  barbaro: {
    name: "Bárbaro",
    hitDie: "d12",
    primaryAbility: "Fuerza",
    weapons: "Armas simples y marciales",
    savingThrows: ["Fuerza", "Constitución"],
    features: ["Rabia", "Defensa sin armadura"],
    subclasses: {
      berserker: {
        name: "Camino del Berserker",
        features: ["Frenesí", "Mente imperturbable"],
      },
      totemico: {
        name: "Camino del Guerrero Totémico",
        features: ["Espíritu Totémico", "Aspecto de la bestia"],
      },
      ancestral: {
        name: "Camino del Ancestral",
        features: ["Guardianes espirituales", "Guía ancestral"],
      },
    },
  },
  bardo: {
    name: "Bardo",
    hitDie: "d8",
    primaryAbility: "Carisma",
    weapons:
      "Armas simples, ballesta de mano, espada larga, estoque, espada corta",
    savingThrows: ["Destreza", "Carisma"],
    features: ["Inspiración bárdica", "Lanzamiento de conjuros"],
    subclasses: {
      espada: {
        name: "Colegio de la Espada",
        features: ["Estilo de combate", "Floritura de espada"],
      },
      saber: {
        name: "Colegio del Saber",
        features: ["Conocimiento adicional", "Cortar palabras"],
      },
      glamour: {
        name: "Colegio del Glamour",
        features: ["Presencia majestuosa", "Manto de inspiración"],
      },
      espiritu: {
        name: "Colegio de los Espíritus",
        features: ["Rituales espirituales", "Hablar con los muertos"],
      },
    },
  },
  clerigo: {
    name: "Clérigo",
    hitDie: "d8",
    primaryAbility: "Sabiduría",
    weapons: "Armas simples",
    savingThrows: ["Sabiduría", "Carisma"],
    features: ["Magia divina", "Canalizar divinidad"],
    subclasses: {
      vida: {
        name: "Dominio de la Vida",
        features: ["Discípulo de la vida", "Sanación divina"],
      },
      tempestad: {
        name: "Dominio de la Tempestad",
        features: ["Furia de la tormenta", "Ira del trueno"],
      },
      muerte: {
        name: "Dominio de la Muerte",
        features: ["Toque de la tumba", "Aura de la muerte"],
      },
      guerra: {
        name: "Dominio de la Guerra",
        features: ["Golpe guiado", "Arsenal divino"],
      },
      engano: {
        name: "Dominio del Engaño",
        features: ["Ilusión divina", "Sombras bendecidas"],
      },
    },
  },
  druida: {
    name: "Druida",
    hitDie: "d8",
    primaryAbility: "Sabiduría",
    weapons: "Armas simples, guadañas, hondas, bastones y lanzas",
    savingThrows: ["Inteligencia", "Sabiduría"],
    features: ["Forma salvaje", "Lanzamiento de conjuros"],
    subclasses: {
      tierra: {
        name: "Círculo de la Tierra",
        features: ["Magia del círculo", "Recuperación natural"],
      },
      luna: {
        name: "Círculo de la Luna",
        features: ["Forma salvaje mejorada", "Forma lunar"],
      },
      suenos: {
        name: "Círculo de los Sueños",
        features: ["Bendiciones feéricas", "Paso onírico"],
      },
    },
  },
  explorador: {
    name: "Explorador",
    hitDie: "d10",
    primaryAbility: "Destreza y Sabiduría",
    weapons: "Todas las armas simples y marciales",
    savingThrows: ["Fuerza", "Destreza"],
    features: ["Enemigo predilecto", "Explorador natural"],
    subclasses: {
      cazador: {
        name: "Cazador",
        features: ["Golpe poderoso", "Reflejos sobrenaturales"],
      },
      bestias: {
        name: "Maestro de bestias",
        features: ["Vínculo con la bestia", "Comando animal"],
      },
    },
  },
  guerrero: {
    name: "Guerrero",
    hitDie: "d10",
    primaryAbility: "Fuerza o Destreza",
    weapons: "Todas las armas simples y marciales",
    savingThrows: ["Fuerza", "Constitución"],
    features: ["Ataque adicional", "Estilo de combate"],
    subclasses: {
      batalla: {
        name: "Maestro de batalla",
        features: ["Maniobras", "Dados de superioridad"],
      },
      campeon: {
        name: "Campeón",
        features: ["Golpe crítico mejorado", "Atleta excepcional"],
      },
    },
  },
  monje: {
    name: "Monje",
    hitDie: "d8",
    primaryAbility: "Destreza y Sabiduría",
    weapons: "Armas simples y espadas cortas",
    savingThrows: ["Fuerza", "Destreza"],
    features: ["Artes marciales", "Defensa sin armadura"],
    subclasses: {
      mano: {
        name: "Camino de la Mano Abierta",
        features: ["Palma de fuerza", "Maestría en ki"],
      },
      sombra: {
        name: "Camino de la Sombra",
        features: ["Sigilo absoluto", "Teletransporte de sombra"],
      },
    },
  },
  paladin: {
    name: "Paladín",
    hitDie: "d10",
    primaryAbility: "Fuerza y Carisma",
    weapons: "Todas las armas simples y marciales",
    savingThrows: ["Sabiduría", "Carisma"],
    features: ["Imposición de manos", "Castigo divino"],
    subclasses: {
      devocion: {
        name: "Juramento de Devoción",
        features: ["Aura de protección", "Luz sagrada"],
      },
      venganza: {
        name: "Juramento de Venganza",
        features: ["Sentencia del vengador", "Ataque implacable"],
      },
    },
  },
  brujo: {
    name: "Brujo",
    hitDie: "d8",
    primaryAbility: "Carisma",
    weapons: "Armas simples",
    savingThrows: ["Sabiduría", "Carisma"],
    features: ["Pacto mágico", "Invocaciones élficas"],
    subclasses: {
      archifey: {
        name: "Patrón Archifey",
        features: ["Encantamiento faérico", "Sombra ilusoria"],
      },
      infernal: {
        name: "Patrón Infernal",
        features: ["Resistencia infernal", "Poder del diablo"],
      },
    },
  },
  mago: {
    name: "Mago",
    hitDie: "d6",
    primaryAbility: "Inteligencia",
    weapons: "Dagas, dardos, hondas, bastones y ballestas ligeras",
    savingThrows: ["Inteligencia", "Sabiduría"],
    features: ["Lanzamiento de conjuros", "Recuperación arcana"],
    subclasses: {
      evocacion: {
        name: "Escuela de Evocación",
        features: ["Moldear conjuros", "Explosión potenciada"],
      },
    },
  },
  hechicero: {
    name: "Hechicero",
    hitDie: "d6",
    primaryAbility: "Carisma",
    weapons: "Dagas, dardos, hondas, bastones y ballestas ligeras",
    savingThrows: ["Constitución", "Carisma"],
    features: ["Magia salvaje", "Recuperación arcana"],
    subclasses: {
      draconico: {
        name: "Linaje dracónico",
        features: ["Resistencia dracónica", "Aliento dracónico"],
      },
      magia: {
        name: "Hechicería de la magia salvaje",
        features: ["Surge de magia salvaje", "Magia incontrolable"],
      },
    },
  },
  picaro: {
    name: "Pícaro",
    hitDie: "d8",
    primaryAbility: "Destreza",
    weapons: "Armas simples, ballesta de mano, espadas cortas, dagas, y arcos",
    savingThrows: ["Destreza", "Inteligencia"],
    features: ["Trucos", "Evasión"],
    subclasses: {
      ladron: {
        name: "Ladrón",
        features: ["Robo sigiloso", "Ataque furtivo"],
      },
      asesino: {
        name: "Asesino",
        features: ["Golpe mortal", "Imitación del engaño"],
      },
      arcano: {
        name: "Explorador Arcano",
        features: ["Tácticas letales", "Rapidez"],
      },
    },
  },
};
