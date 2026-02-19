export type CharacterSet = {
  name: string;
  characters: readonly string[];
};

export const CHARACTER_SETS: CharacterSet[] = [
  {
    name: "Routeurs",
    characters: [
      "Florent",
      "Juliette",
      "Dimitri",
      "Pierre-Antoine",
      "Camille",
      "Manon",
      "Adrien",
      "Audrey",
      "Marcel",
      "Cedric",
      "Pierre",
      "Isaline",
      "Maxime",
      "Adelie",
      "Alexandre",
      "Yann",
      "Koya",
      "Elisabeth",
    ] as const,
  },
  {
    name: "Montsouris",
    characters: [
      "Anna",
      "Audrey",
      "Benbouaza",
      "Bernateau",
      "Carla",
      "Catherine",
      "Chris",
      "Claire",
      "Elise",
      "Florent",
      "Jean-Michel",
      "Laetitia",
      "Leila",
      "Lucile",
      "Marie",
      "Mathilde",
      "Michele",
      "Mongin",
      "Nathalie",
      "Pauline",
      "Potyrcha",
      "Quitterie",
      "Vic",
      "Victor",
    ] as const,
  },
];
