import React from "react";
import { connect } from "react-redux";
import { weatherForecastActionCreator } from "./actions/weatherForecast";
import "./App.css";
import {
    CountryCoordinates,
    CountryLocation,
    CountryNames,
    WeatherForecastData,
} from "./models";
import { State } from "./store";

export interface StateProps {
    isWeatherForecastLoading: boolean;
    weatherForecastData: WeatherForecastData | null
}

export interface DispatchProps {
    getWeatherForecast: (countryCoordinates: CountryCoordinates, countryName: CountryNames) => (dispatch: any) => any;
}

const countryLocation: CountryLocation = {
    vancouver: {
        lat: "49.246292",
        lon: "-123.116226"
    },
    toronto: {
        lat: "43.651070",
        lon: "-79.347015"
    },
    ottawa: {
        lat: "45.424721",
        lon: "-75.695000"
    },
};

export class App extends React.Component<StateProps & DispatchProps> {
  
    public componentDidMount() {
        const {
        isWeatherForecastLoading,
        weatherForecastData,
        getWeatherForecast,
        } = this.props;

        if(!isWeatherForecastLoading && !weatherForecastData) {
            getWeatherForecast(countryLocation[CountryNames.VANCOUVER], CountryNames.VANCOUVER);
        }
    }

  public render() {
    return (
        <div className="App">
        
        </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
    isWeatherForecastLoading: state.weatherForecast.isWeatherForecastLoading,
    weatherForecastData: state.weatherForecast.weatherForecastData,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    getWeatherForecast: (countryCoordinates: CountryCoordinates, countryName: CountryNames) => dispatch(weatherForecastActionCreator.getWeatherForecast(countryCoordinates, countryName)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
