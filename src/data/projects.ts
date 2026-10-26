export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: "Daily spending calculator",
    description:
      "A small calculator concept for keeping track of daily spending.",
    image: "/assets/calculator.jpg",
    imageAlt: "Preview of the daily spending calculator",
    href: "https://htmlpreview.github.io/?https://github.com/suhailsola/set-2023-day-7/blob/main/Assesment/index.html",
    category: "JavaScript",
  },
  {
    title: "Dictionary",
    description: "A lightweight reference for unfamiliar words and jargon.",
    image: "/assets/dict.png",
    imageAlt: "Preview of the dictionary project",
    href: "https://htmlpreview.github.io/?https://github.com/suhailsola/set-2023-day-9/blob/main/Assesment/Dictionary/index.html",
    category: "Web app",
  },
  {
    title: "Pokemon Game (Beta)",
    description:
      "An early game experiment inspired by board games like chess and Othello.",
    image: "/assets/pokemon.jpg",
    imageAlt: "Artwork for the Pokemon game experiment",
    href: "https://htmlpreview.github.io/?https://github.com/suhailsola/set-2023-day-9/blob/main/Assesment/index.html",
    category: "Game",
  },
];
