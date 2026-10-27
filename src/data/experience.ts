export type Experience = {
  company: string;
  role: string;
  period: string;
  stack?: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Stampede Design",
    role: "Fullstack Developer",
    period: "October 2024 – Present",
    stack: ["AngularJS", "Laravel", "Payload CMS", "Next.js"],
    highlights: [
      "Develop client applications across frontend and backend.",
      "Build dashboards for client projects using Payload CMS and Next.js.",
      "Work with user researchers to clarify requirements and contribute to database architecture decisions.",
      "Partner with designers to assess technical feasibility and improve code reuse and readability.",
    ],
  },
  {
    company: "Invoke Solution",
    role: "Software Developer",
    period: "July 2023 – October 2024",
    stack: ["React", "Laravel", "MongoDB", "PostgreSQL", "Next.js", "Node.js"],
    highlights: [
      "Built REST APIs for an internal product designed to streamline manual user acceptance testing.",
      "Developed a GraphQL API for advertising reports, integrating data from a third-party API.",
      "Delivered frontend features across client projects in collaboration with project managers, backend developers, and UI/UX designers.",
    ],
  },
  {
    company: "UST Global",
    role: "Semiconductor Product Validation",
    period: "December 2021 – July 2023",
    stack: ["Python", "Bash"],
    highlights: [
      "Enabled and tested server platforms, diagnosing hardware, software, and firmware issues during product development.",
      "Developed scripts to speed up product validation processes and workflows.",
      "Created test plans, prioritized issues, and coordinated hardware for upcoming testing.",
    ],
  },
  {
    company: "UST Global",
    role: "IGNITE MySTEP Candidate",
    period: "May 2021 – November 2021",
    stack: ["Java", "Git", "Python", "C++", "MySQL", "Linux"],
    highlights: [
      "Studied object-oriented programming and software development fundamentals.",
      "Built training projects, including a Raspberry Pi gas-level indicator.",
    ],
  },
];
