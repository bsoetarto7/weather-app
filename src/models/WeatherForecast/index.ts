import { CountryCoordinates, CountryNames } from "../Country";

export interface ForecastCity {
    coord: CountryCoordinates;
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
}

export interface ForecastClouds {
    all: string;
}

export interface ForecastMain {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
}

export interface ForecastSystem {
    pod: string;
}

export interface ForecastWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface ForecastWind {
    deg: number;
    gust: number;
    speed: number;
}

export interface ForecastList {
    clouds: ForecastClouds;
    dt: number;
    dt_txt: string;
    main: ForecastMain;
    pop: number;
    sys: ForecastSystem;
    visibility: number;
    weather: ForecastWeather[];
    wind: ForecastWind;
}

export interface Forecast {
    cod: string;
    message: number;
    cnt: number;
    city: ForecastCity;
    list: ForecastList[];
}

export type WeatherForecastData = {
    [key in CountryNames]: Forecast;
}

export interface WeatherForecast {
    isWeatherForecastLoading: boolean;
    weatherForecastData: WeatherForecastData | undefined;
    errorMessage: string;
}
