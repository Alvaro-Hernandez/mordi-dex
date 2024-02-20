export interface Data {
  info: Info[];
  results: Result[];
}

export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: null;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
