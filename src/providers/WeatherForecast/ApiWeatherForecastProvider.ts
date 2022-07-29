import { WeatherForecastProvider } from ".";
import { CountryCoordinates, Forecast } from "../../models";

export class ApiWeatherForecastProvider implements WeatherForecastProvider {
    private openWeatherApiUrl: string;

    private openWeatherApiKey: string;

    constructor(openWeatherApiUrl: string, openWeatherApiKey: string) {
        this.openWeatherApiUrl = openWeatherApiUrl;
        this.openWeatherApiKey = openWeatherApiKey;
    }

    public getCurrentWeather = async (countryCoordinates: CountryCoordinates): Promise<Forecast> => {
        const options = {
            method: "GET",
        };

        const {
            lat,
            lon,
        } = countryCoordinates;

        const response = await fetch(
            `${this.openWeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${this.openWeatherApiKey}`,
            options,
        );

        let json;

        try {
            json = await response.json();
        } catch (e) {
            throw new Error("Unable to retrieve weather data");
        }

        if (response.status !== 200) {
            return Promise.reject(new Error("Unable to retrieve weather data"));
        }

        const forecastData: Forecast = {
            ...json,
        };

        return forecastData;
    };
}

export default ApiWeatherForecastProvider;
