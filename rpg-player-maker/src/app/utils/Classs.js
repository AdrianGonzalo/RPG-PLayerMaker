const classs = [
  {
    //Bárbaro
    name: "Bárbaro",
    hitDie: "d12",
    primaryAbility: "Fuerza",
    weapons: "Armas simples y marciales",
    savingThrows: ["Fuerza", "Constitución"],
    features: ["Rabia", "Defensa sin armadura"],
    subclasses: [
      {
        name: "Camino del Berserker",
        features: ["Frenesí", "Mente imperturbable"],
      },
      {
        name: "Camino del Guerrero Totémico",
        features: ["Espíritu Totémico", "Aspecto de la bestia"],
      },
      {
        name: "Camino del Ancestral",
        features: ["Guardianes espirituales", "Guía ancestral"],
      },
    ],
  },
  {
    //Bardo
    name: "Bardo",
    hitDie: "d8",
    primaryAbility: "Carisma",
    weapons:
      "Armas simples, ballesta de mano, espada larga, estoque, espada corta",
    savingThrows: ["Destreza", "Carisma"],
    features: ["Inspiración bárdica", "Lanzamiento de conjuros"],
    subclasses: [
      {
        name: "Colegio de la Espada",
        features: ["Estilo de combate", "Floritura de espada"],
      },
      {
        name: "Colegio del Saber",
        features: ["Conocimiento adicional", "Cortar palabras"],
      },
      {
        name: "Colegio del Glamour",
        features: ["Presencia majestuosa", "Manto de inspiración"],
      },
      {
        name: "Colegio de los Espíritus",
        features: ["Rituales espirituales", "Hablar con los muertos"],
      },
    ],
  },
  {
    //Clérigo
    name: "Clérigo",
    hitDie: "d8",
    primaryAbility: "Sabiduría",
    weapons: "Armas simples",
    savingThrows: ["Sabiduría", "Carisma"],
    features: ["Magia divina", "Canalizar divinidad"],
    subclasses: [
      {
        name: "Dominio de la Vida",
        features: ["Discípulo de la vida", "Sanación divina"],
      },
      {
        name: "Dominio de la Tempestad",
        features: ["Furia de la tormenta", "Ira del trueno"],
      },
      {
        name: "Dominio de la Muerte",
        features: ["Toque de la tumba", "Aura de la muerte"],
      },
      {
        name: "Dominio de la Guerra",
        features: ["Golpe guiado", "Arsenal divino"],
      },
      {
        name: "Dominio del Engaño",
        features: ["Ilusión divina", "Sombras bendecidas"],
      },
    ],
  },
  {
    //Druida
    name: "Druida",
    hitDie: "d8",
    primaryAbility: "Sabiduría",
    weapons: "Armas simples, guadañas, hondas, bastones y lanzas",
    savingThrows: ["Inteligencia", "Sabiduría"],
    features: ["Forma salvaje", "Lanzamiento de conjuros"],
    subclasses: [
      {
        name: "Círculo de la Tierra",
        features: ["Magia del círculo", "Recuperación natural"],
      },
      {
        name: "Círculo de la Luna",
        features: ["Forma salvaje mejorada", "Forma lunar"],
      },
      {
        name: "Círculo de los Sueños",
        features: ["Bendiciones feéricas", "Paso onírico"],
      },
    ],
  },
  {
    //Explorador
    name: "Explorador",
    hitDie: "d10",
    primaryAbility: "Destreza y Sabiduría",
    weapons: "Todas las armas simples y marciales",
    savingThrows: ["Fuerza", "Destreza"],
    features: ["Enemigo predilecto", "Explorador natural"],
    subclasses: [
      {
        name: "Cazador",
        features: ["Golpe poderoso", "Reflejos sobrenaturales"],
      },
      {
        name: "Maestro de bestias",
        features: ["Vínculo con la bestia", "Comando animal"],
      },
    ],
  },
  {
    //Guerrero
    name: "Guerrero",
    hitDie: "d10",
    primaryAbility: "Fuerza o Destreza",
    weapons: "Todas las armas simples y marciales",
    savingThrows: ["Fuerza", "Constitución"],
    features: ["Ataque adicional", "Estilo de combate"],
    subclasses: [
      {
        name: "Maestro de batalla",
        features: ["Maniobras", "Dados de superioridad"],
      },
      {
        name: "Campeón",
        features: ["Golpe crítico mejorado", "Atleta excepcional"],
      },
    ],
  },
  {
    //Monje
    name: "Monje",
    hitDie: "d8",
    primaryAbility: "Destreza y Sabiduría",
    weapons: "Armas simples y espadas cortas",
    savingThrows: ["Fuerza", "Destreza"],
    features: ["Artes marciales", "Defensa sin armadura"],
    subclasses: [
      {
        name: "Camino de la Mano Abierta",
        features: ["Palma de fuerza", "Maestría en ki"],
      },
      {
        name: "Camino de la Sombra",
        features: ["Sigilo absoluto", "Teletransporte de sombra"],
      },
    ],
  },
  {
    //Paladín
    name: "Paladín",
    hitDie: "d10",
    primaryAbility: "Fuerza y Carisma",
    weapons: "Todas las armas simples y marciales",
    savingThrows: ["Sabiduría", "Carisma"],
    features: ["Imposición de manos", "Castigo divino"],
    subclasses: [
      {
        name: "Juramento de Devoción",
        features: ["Aura de protección", "Luz sagrada"],
      },
      {
        name: "Juramento de Venganza",
        features: ["Sentencia del vengador", "Ataque implacable"],
      },
    ],
  },
  {
    //Brujo
    name: "Brujo",
    hitDie: "d8",
    primaryAbility: "Carisma",
    weapons: "Armas simples",
    savingThrows: ["Sabiduría", "Carisma"],
    features: ["Pacto mágico", "Invocaciones élficas"],
    subclasses: [
      {
        name: "Patrón Archifey",
        features: ["Encantamiento faérico", "Sombra ilusoria"],
      },
      {
        name: "Patrón Infernal",
        features: ["Resistencia infernal", "Poder del diablo"],
      },
    ],
  },
  {
    name: "Mago",
    hitDie: "d6",
    primaryAbility: "Inteligencia",
    weapons: "Dagas, dardos, hondas, bastones y ballestas ligeras",
    savingThrows: ["Inteligencia", "Sabiduría"],
    features: ["Lanzamiento de conjuros", "Recuperación arcana"],
    subclasses: [
      {
        name: "Escuela de Evocación",
        features: ["Moldear conjuros", "Explosión potenciada"],
      },
    ],
  },
];
