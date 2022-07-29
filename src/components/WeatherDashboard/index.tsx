import React from "react";
import { CurrentWeather } from "../";
import { Forecast } from "../../models";
import "./style.css";

interface Props {
    countryWeatherData: Forecast;
}


export class WeatherDashboard extends React.Component<Props> {
    
    public render() {
        const currentWeather = this.props.countryWeatherData.list[0];

        return(
            <div className="dashboardContainer">
                {currentWeather && <CurrentWeather temperature={currentWeather.main.temp} date={currentWeather.dt_txt} condition={currentWeather.weather[0].main} icon={currentWeather.weather[0].icon} />}
                <div className="forecastContainer">
                    {this.renderForecastWeather()}
                </div>
            </div>
        );
    }

    private renderForecastWeather = () => {
        return this.props.countryWeatherData.list
            .slice(1)
            .filter((data, index) => !(index%4) && data.sys.pod === "d")
            .slice(0,5)
            .map((data, index) => 
                (<CurrentWeather key={index} temperature={data.main.temp} date={data.dt_txt} condition={data.weather[0].main} icon={data.weather[0].icon} isForecastFormat={true}/>
            ));
    }
}

export default WeatherDashboard;
