export type TProject = {
  project: {
    id: string;
    title: string;
    text?: string;
    date: string;
    tags?: string[];
    details: {
      desc: string[];
      link?: string;
      [key: string]: string;
    };
  };
};
