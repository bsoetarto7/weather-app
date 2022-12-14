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
import { State as StoreState } from "./store";
import { CountrySelector, WeatherDahsboard } from "./components";

export interface StateProps {
    isWeatherForecastLoading: boolean;
    weatherForecastData?: WeatherForecastData;
    errorMessage: string;
}

export interface DispatchProps {
    getWeatherForecast: (countryCoordinates: CountryCoordinates, countryName: CountryNames) => void;
}

interface State {
    countrySelected: CountryNames;
}

const countryLocation: CountryLocation = {
    vancouver: {
        lat: "49.246292",
        lon: "-123.116226",
    },
    toronto: {
        lat: "43.651070",
        lon: "-79.347015",
    },
    ottawa: {
        lat: "45.424721",
        lon: "-75.695000",
    },
};

export class App extends React.Component<StateProps & DispatchProps, State> {
    constructor(props: StateProps & DispatchProps) {
        super(props);
        this.state = {
            countrySelected: CountryNames.VANCOUVER,
        };
    }

    public componentDidMount() {
        const {
            isWeatherForecastLoading,
            weatherForecastData,
            getWeatherForecast,
        } = this.props;

        const {
            countrySelected,
        } = this.state;

        if (!isWeatherForecastLoading && !weatherForecastData) {
            getWeatherForecast(countryLocation[countrySelected], countrySelected);
        }
    }

    private handleCountrySelected = (countrySelected: CountryNames) => {
        const {
            getWeatherForecast,
            weatherForecastData,
        } = this.props;
        if (!weatherForecastData || !weatherForecastData[countrySelected]) {
            getWeatherForecast(countryLocation[countrySelected], countrySelected);
        }
        this.setState({
            countrySelected,
        });
    };

    public render() {
        const {
            countrySelected,
        } = this.state;

        const {
            errorMessage,
            weatherForecastData,
        } = this.props;
        return (
            <div className="App">
                <div className="container">
                    <CountrySelector
                        handleCountrySelect={this.handleCountrySelected}
                        countrySelected={countrySelected}
                    />
                    {
                        !!weatherForecastData
                        && weatherForecastData[countrySelected]
                        && <WeatherDahsboard countryWeatherData={weatherForecastData[countrySelected]} />
                    }
                    {
                        !!errorMessage && <p className="errorMessage">{errorMessage}</p>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): StateProps => ({
    isWeatherForecastLoading: state.weatherForecast.isWeatherForecastLoading,
    weatherForecastData: state.weatherForecast.weatherForecastData,
    errorMessage: state.weatherForecast.errorMessage,
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    getWeatherForecast: (
        countryCoordinates: CountryCoordinates,
        countryName: CountryNames,
    ) => dispatch(weatherForecastActionCreator.getWeatherForecast(countryCoordinates, countryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
