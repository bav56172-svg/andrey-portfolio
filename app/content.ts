import content from "./portfolio-content.json";

export type ProjectTone = "live" | "progress";

export interface NumberedContentItem {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioProject {
  title: string;
  category: string;
  task: string;
  solution: string;
  contribution: string;
  stack: string;
  status: string;
  tone: ProjectTone;
  repository: string | null;
}

export interface PortfolioContent {
  links: {
    telegram: string;
    github: string;
  };
  services: NumberedContentItem[];
  projects: PortfolioProject[];
  processSteps: NumberedContentItem[];
}

export const portfolioContent = content as PortfolioContent;
