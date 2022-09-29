export type CompanyType = {
  name: string;
  website: string;
  logo: string;
}

export type ItemType = {
  id: string;
  urls: { ad: string };
  descr: string;
  skills: string;
  title: string;
  company: CompanyType;
}