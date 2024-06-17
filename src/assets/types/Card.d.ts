export type TProject = {
  project: {
    id: string;
    title: string;
    text?: string;
    date: string;
    tags?: string[];
    details: {
      order: string[];
      [key: string]: string;
    };
  };
};
