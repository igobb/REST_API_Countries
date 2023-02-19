export interface Countries {
    name: {
        official: string,
    },
    population: number,
    region: string,
    capital: Array<string>,
    flags: {
        png: string
    }
}