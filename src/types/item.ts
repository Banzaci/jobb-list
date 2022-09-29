export type CompanyType = {
  id: string;
  name: string;
  title: string;
  website: string;
  desc: string;
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