import { weatherActionsTypes } from "../../actions/weatherForecast";
import { WeatherForecast } from "../../models/WeatherForecast";

export const initialWeatherForecastState: WeatherForecast = {
    isWeatherForecastLoading: false
}

export const weatherForecastReducer = (state = initialWeatherForecastState, actions: any) => {
    switch(actions.type) {
        case weatherActionsTypes.getWeatherForecastLoading:
            return {
                ...state,
                isWeatherForecastLoading: true,
            };
        default:
            return state;
    }
}