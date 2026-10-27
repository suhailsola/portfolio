export type Project = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  href: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: "Chatbox Playground",
    description:
      "A full-stack chat app with real-time WebSocket rooms and a separate Claude-powered AI chat. No live demo is available yet.",
    href: "https://github.com/suhailsola/chatbox-playground",
    category: "Fullstack · React · TypeScript",
  },
  /*
  {
    title: "Daily spending calculator",
    description: "A JavaScript calculator concept for tracking daily spending.",
    image: "/assets/calculator.jpg",
    imageAlt: "Preview of the daily spending calculator",
    href: "https://htmlpreview.github.io/?https://github.com/suhailsola/set-2023-day-7/blob/main/Assesment/index.html",
    category: "JavaScript",
  },
  {
    title: "Dictionary",
    description: "A simple dictionary for looking up unfamiliar words.",
    image: "/assets/dict.png",
    imageAlt: "Preview of the dictionary project",
    href: "https://htmlpreview.github.io/?https://github.com/suhailsola/set-2023-day-9/blob/main/Assesment/Dictionary/index.html",
    category: "Web app",
  },
  {
    title: "Pokemon Game (Beta)",
    description:
      "An early Pokémon-themed board-game experiment inspired by chess and Othello.",
    image: "/assets/pokemon.jpg",
    imageAlt: "Artwork for the Pokemon game experiment",
    href: "https://htmlpreview.github.io/?https://github.com/suhailsola/set-2023-day-9/blob/main/Assesment/index.html",
    category: "Game",
  },
  */
];
