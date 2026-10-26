export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Stampede Design",
    role: "Fullstack Developer",
    period: "October 2024 – Present",
    highlights: [
      "Develop healthcare applications for clients using AngularJS and Laravel.",
      "Build dashboards with Payload CMS and Next.js.",
      "Collaborate with user research to understand requirements and contribute to database architecture decisions.",
      "Work with designers to assess feasibility and improve code reusability and readability.",
    ],
  },
  {
    company: "Invoke Solution",
    role: "Software Developer",
    period: "July 2023 – October 2024",
    highlights: [
      "Built REST APIs for an internal product designed to streamline manual user acceptance testing.",
      "Developed a GraphQL API for an advertising reports feature, integrating a third-party API.",
      "Delivered frontend work across client projects in collaboration with project managers, backend developers, and UI/UX designers.",
    ],
  },
  {
    company: "UST Global",
    role: "Semiconductor Product Validation",
    period: "December 2021 – July 2023",
    highlights: [
      "Enabled and tested server platforms, debugging hardware, software, and firmware issues to support product development.",
      "Developed scripts to accelerate product validation processes and workflows.",
      "Created test plans, prioritized issues, and coordinated hardware for future testing.",
    ],
  },
  {
    company: "UST Global",
    role: "IGNITE MySTEP Candidate",
    period: "May 2021 – November 2021",
    highlights: [
      "Built foundations in object-oriented programming with Java, Git, Python, C++, MySQL, and Linux.",
      "Completed mini-projects, including a gas-level indicator using Raspberry Pi.",
    ],
  },
];
