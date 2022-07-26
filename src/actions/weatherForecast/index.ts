import { ActionCreatorsMapObject, Dispatch } from "redux";

export const weatherActionsTypes = {
    getWeatherForecastLoading: "GET_WEATHER_FORECAST_LOADING",
    getWeatherForecastSuccessful: "GET_WEATHER_FORECAST_SUCCESSFUL",
    getWeatherForecastError: "GET_WEATHER_FORECAST_ERROR",
};

export interface WeatherForecastActionCreator extends ActionCreatorsMapObject {
    getWeatherForecast: () => (dispatch: Dispatch) => any;
}

export const weatherForecastActionCreator: WeatherForecastActionCreator = {
    getWeatherForecast() {
        return async (dispatch: Dispatch) => {
            dispatch({type: weatherActionsTypes.getWeatherForecastLoading});
        }
    },
}
