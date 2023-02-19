export interface Country {
  name: {
    official: string,
    nativeName: {
      key: {
        official: string
      }
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: Array<string>;
  tld: Array<string>;
  currencies: {
    key: {
      name: string;
    };
  };
  languages: Array<string>,
  borders: Array<string>;
  flags: {
    png: string;
  };
}
