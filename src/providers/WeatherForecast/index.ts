import { CountryCoordinates, Forecast } from "../../models";

export interface WeatherForecastProvider {
    getCurrentWeather(countryCoordinates: CountryCoordinates): Promise<Forecast>;
}
