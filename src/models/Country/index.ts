export enum CountryNames {
    VANCOUVER = "vancouver",
    TORONTO = "toronto",
    OTTAWA = "ottawa",
}

export type CountryLocation = {
    [key in CountryNames]: CountryCoordinates;
};

export interface CountryCoordinates {
    lat: string;
    lon: string;
}