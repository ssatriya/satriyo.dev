import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Muhammad Yusuf Donny Satriyo",
  DESCRIPTION: "Fullstack Developer specializing in React, Next.js, and backend technologies.",
  EMAIL: "ssatriya@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 6,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to my portfolio and blog.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/ssatriya",
  },
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/ssatriyaaa",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/ssatriya/",
  },
];
