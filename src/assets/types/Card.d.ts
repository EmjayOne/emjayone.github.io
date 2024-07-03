export type TProject = {
  project: {
    id: string;
    title: string;
    text?: string;
    date: string;
    tags?: string[];
    details: TProjectDetails | TExperienceDetails;
  };
};

export type TProjectDetails = {
  desc: string[];
  task?: string[];
  link?: string;
  [key: string]: string;
};

export type TExperienceDetails = {
  content: TExperienceContent[];
  source?: TExperienceContentLinkList[];
  link?: string;
  [key: string]: any;
};

export type TExperienceContent = {
  title?: string;
  subtitle?: string;
  summary?: string;
  video?: string;
  p?: (string | TExperienceContentStringList)[];
  li?: TExperienceContentLinkList[];
  svg?: string;
  img?: string;
};

export type TExperienceContentLinkList = {
  text: string;
  href: string;
};

export type TExperienceContentStringList = {
  ul?: string[];
  ol?: string[];
};
