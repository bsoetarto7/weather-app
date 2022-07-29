import { ActionCreatorsMapObject, Dispatch } from "redux";
import { CountryCoordinates, CountryNames, Forecast } from "../../models";
import { ApiWeatherForecastProvider } from "../../providers";

export const weatherActionsTypes = {
    getWeatherForecastLoading: "GET_WEATHER_FORECAST_LOADING",
    getWeatherForecastSuccessful: "GET_WEATHER_FORECAST_SUCCESSFUL",
    getWeatherForecastError: "GET_WEATHER_FORECAST_ERROR",
};

export interface WeatherForecastActionCreator extends ActionCreatorsMapObject {
    getWeatherForecast: (countryCoordinates: CountryCoordinates, countryName: CountryNames) => (dispatch: Dispatch) => any;
}

export const weatherForecastActionCreator: WeatherForecastActionCreator = {
    getWeatherForecast(countryCoordinates: CountryCoordinates, countryName: CountryNames) {
        return async (dispatch: Dispatch) => {
            dispatch({type: weatherActionsTypes.getWeatherForecastLoading});

            const apiWeatherForecastProvider = new ApiWeatherForecastProvider(`https://api.openweathermap.org/data/2.5`, process.env.REACT_APP_WEATHER_API_KEY || "");
            try {
                const forecastData: Forecast = await apiWeatherForecastProvider.getCurrentWeather(countryCoordinates);
                dispatch({type: weatherActionsTypes.getWeatherForecastSuccessful, key: countryName, weatherForecastData: forecastData})
            } catch(e) {
                console.log(e);
            }
        }
    },
}
