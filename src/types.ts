export type Page = 'home' | 'services' | 'about' | 'contact';

export interface ServiceLine {
  id: string;
  num: string;
  title: string;
  shortDescription: string;
  description: string;
  notIncluded: string[];
}

export interface CoreValue {
  title: string;
  description: string;
}
