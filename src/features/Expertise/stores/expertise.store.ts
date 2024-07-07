import type { TProject } from "~/assets/types/Card";
import * as accessibility from "~/data/Expertise/accessibility.json";
import * as api from "~/data/Expertise/api.json";
import * as backendRoadmap from "~/data/Expertise/backendRoadmap.json";
import * as cyberSecurityRoadmap from "~/data/Expertise/cyberSecurityRoadmap.json";
import * as database from "~/data/Expertise/database.json";
import * as deployment from "~/data/Expertise/deployment.json";
import * as frontendArchitecturalPatterns from "~/data/Expertise/frontendArchitecturalPatterns.json";
import * as frontendRoadmap from "~/data/Expertise/frontendRoadmap.json";
import * as html from "~/data/Expertise/html.json";
import * as internet from "~/data/Expertise/internet.json";
import * as kafka from "~/data/Expertise/kafka.json";
import * as responsiveDesign from "~/data/Expertise/responsiveDesign.json";

export const useExpertiseStore = defineStore("expertise", () => {
  const expertise: TProject[] = [
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

  const getExpertiseById = (id: string) => {
    return expertise.find((item) => item.project.id === id);
  };

  return {
    expertise,
    getExpertiseById,
  };
});
