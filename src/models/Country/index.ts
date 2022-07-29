export enum CountryNames {
    VANCOUVER = "vancouver",
    TORONTO = "toronto",
    OTTAWA = "ottawa",
}

export interface CountryCoordinates {
    lat: string;
    lon: string;
}

export type CountryLocation = {
    [key in CountryNames]: CountryCoordinates;
};
