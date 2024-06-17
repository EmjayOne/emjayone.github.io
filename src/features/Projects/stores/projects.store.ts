import type { TProject } from "~/assets/types/Card";
import * as absolut from "~/data/Projects/absolut.json";
import * as bcua_pes from "~/data/Projects/bcua-pes.json";
import * as bst from "~/data/Projects/bst.json";
import * as se_psd04 from "~/data/Projects/se-psd04.json";

export const useProjectsStore = defineStore("projects", () => {
  const projects: TProject[] = [
    JSON.parse(JSON.stringify(se_psd04.default)),
    JSON.parse(JSON.stringify(bst.default)),
    JSON.parse(JSON.stringify(bcua_pes.default)),
    JSON.parse(JSON.stringify(absolut.default)),
  ];

  const getProjectById = (id: string) => {
    return projects.find((item) => item.project.id === id);
  };

  return {
    projects,
    getProjectById,
  };
});
