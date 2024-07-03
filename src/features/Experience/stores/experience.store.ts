import type { TProject } from "~/assets/types/Card";
import * as accessibility from "~/data/Experience/accessibility.json";
import * as api from "~/data/Experience/api.json";
import * as backendRoadmap from "~/data/Experience/backendRoadmap.json";
import * as cyberSecurityRoadmap from "~/data/Experience/cyberSecurityRoadmap.json";
import * as database from "~/data/Experience/database.json";
import * as deployment from "~/data/Experience/deployment.json";
import * as frontendArchitecturalPatterns from "~/data/Experience/frontendArchitecturalPatterns.json";
import * as frontendRoadmap from "~/data/Experience/frontendRoadmap.json";
import * as html from "~/data/Experience/html.json";
import * as internet from "~/data/Experience/internet.json";
import * as kafka from "~/data/Experience/kafka.json";
import * as responsiveDesign from "~/data/Experience/responsiveDesign.json";

export const useExperiencesStore = defineStore("experiences", () => {
  const experiences: TProject[] = [
    JSON.parse(JSON.stringify(internet.default)),
    JSON.parse(JSON.stringify(frontendRoadmap.default)),
    JSON.parse(JSON.stringify(html.default)),
    JSON.parse(JSON.stringify(accessibility.default)),
    JSON.parse(JSON.stringify(responsiveDesign.default)),
    JSON.parse(JSON.stringify(frontendArchitecturalPatterns.default)),
    JSON.parse(JSON.stringify(deployment.default)),
    JSON.parse(JSON.stringify(backendRoadmap.default)),
    JSON.parse(JSON.stringify(api.default)),
    JSON.parse(JSON.stringify(database.default)),
    JSON.parse(JSON.stringify(kafka.default)),
    JSON.parse(JSON.stringify(cyberSecurityRoadmap.default)),
  ];

  const getExperienceById = (id: string) => {
    return experiences.find((item) => item.project.id === id);
  };

  return {
    experiences,
    getExperienceById,
  };
});
