export type TProject = {
  project: {
    id: string;
    title: string;
    text?: string;
    date: string;
    tags?: string[];
    details: TProjectDetails | TExpertiseDetails;
  };
};

export type TProjectDetails = {
  desc: string[];
  task?: string[];
  link?: string;
  [key: string]: string;
};

export type TExpertiseDetails = {
  content: TExpertiseContent[];
  source?: TExpertiseContentLinkList[];
  link?: string;
  [key: string]: any;
};

export type TExpertiseContent = {
  title?: string;
  subtitle?: string;
  summary?: string;
  video?: string;
  p?: (string | TExpertiseContentStringList)[];
  li?: TExpertiseContentLinkList[];
  svg?: string;
  img?: string;
};

export type TExpertiseContentLinkList = {
  text: string;
  href: string;
};

export type TExpertiseContentStringList = {
  ul?: string[];
  ol?: string[];
};
