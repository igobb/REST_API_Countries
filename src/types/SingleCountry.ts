export interface SingleCountry {
    officialName: string,
    nativeName: {
        key: {
            official: string
        }
    }
    population: number,
    region: string,
    subregion: string,
    capital: Array<string>,
    tld: Array<string>
    currencyObject: {
        key: {
            name: string,
        }
    }
    languages: Array<string>,
    flag: string

}