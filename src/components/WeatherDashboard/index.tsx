import React from "react";
import { CurrentWeather } from "..";
import { Forecast } from "../../models";
import "./style.css";

interface Props {
    countryWeatherData: Forecast;
}

export class WeatherDashboard extends React.Component<Props> {
    private renderForecastWeather = () => {
        const {
            countryWeatherData,
        } = this.props;
        const weatherData = countryWeatherData.list
            .slice(1)
            .filter((data, index) => !(index % 4) && data.sys.pod === "d")
            .slice(0, 5)
            .map((data) => {
                const {
                    dt_txt: dtTxt,
                    main,
                    weather,
                } = data;
                return (
                    <CurrentWeather
                        key={dtTxt}
                        temperature={main.temp}
                        date={dtTxt}
                        condition={weather[0].main}
                        icon={weather[0].icon}
                        isForecastFormat
                    />
                );
            });

        return weatherData;
    };

    public render() {
        const {
            countryWeatherData,
        } = this.props;
        const currentWeather = countryWeatherData.list[0];
        const {
            dt_txt: dtTxt,
            main,
            weather,
        } = currentWeather;
        return (
            <div className="dashboardContainer">
                {
                    currentWeather
                    && <CurrentWeather temperature={main.temp} date={dtTxt} condition={weather[0].main} icon={weather[0].icon} />
                }
                <div className="forecastContainer">
                    {this.renderForecastWeather()}
                </div>
            </div>
        );
    }
}

export default WeatherDashboard;
