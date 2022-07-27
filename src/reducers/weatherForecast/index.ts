import { weatherActionsTypes } from "../../actions/weatherForecast";
import { WeatherForecast } from "../../models";


export const initialWeatherForecastState: WeatherForecast = {
    isWeatherForecastLoading: false,
    weatherForecastData: null,
}

export const weatherForecastReducer = (state = initialWeatherForecastState, actions: any) => {
    switch(actions.type) {
        case weatherActionsTypes.getWeatherForecastLoading:
            return {
                ...state,
                isWeatherForecastLoading: true,
            };
        case weatherActionsTypes.getWeatherForecastSuccessful:
            return {
                ...state,
                isWeatherForecastLoading: false,
                weatherForecastData: {
                    [actions.key]: actions.weatherForecastData,
                },
            };
        case weatherActionsTypes.getWeatherForecastError:
            return {
                ...state,
                isWeatherForecastLoading: false,
            };
        default:
            return state;
    }
}