declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.jpeg" {
  const value: any;
  export default value;
}
declare module "*.jpg" {
  const value: any;
  export default value;
}

interface ProjectData {
  slug: string;
  imgSrc?: string;
  title: string;
  description: string;
  html: string;
}

interface HomepageData {
  projects: ProjectData[];
}

type PageContextGeneral = typeof import('./content/general.json');

interface PageContext<TData> {
  general: PageContextGeneral;
  data: TData;
}
