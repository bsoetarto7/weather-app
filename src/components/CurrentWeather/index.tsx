import React from "react";
import "./style.css";

interface Props {
    date: string;
    temperature: number;
    condition: string;
    isForecastFormat?: boolean;
    icon: string;
}

export class CurrentWeather extends React.Component<Props> {
    private getTime = () => {
        const { date } = this.props;
        const weatherDate = new Date(`${date} UTC`);
        return weatherDate.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
    };

    private getDay = () => {
        const { date } = this.props;
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const weatherDate = new Date(`${date} UTC`);
        return days[weatherDate.getDay()];
    };

    public render() {
        const {
            condition,
            icon,
            isForecastFormat,
            temperature,
        } = this.props;
        return (
            <div className={`currentWeatherContainer${isForecastFormat ? ` currentWeatherForecastContainer` : ""}`}>
                <p className="weatherDate">{this.getDay()}</p>
                <p className="weatherTime">{this.getTime()}</p>
                <div className={`currentWeatherInformation${isForecastFormat ? ` currentWeatherForecastFormat` : ""}`}>
                    <div className="weatherIcon">
                        <img
                            className={isForecastFormat ? "forecastIcon" : ""}
                            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                            alt={condition}
                        />
                    </div>
                    <div className="weatherInfo">
                        <p className="weatherTemperature">
                            {Math.round(temperature)}
                            &#8451;
                        </p>
                        {!isForecastFormat && <p className="weatherCondition">{condition}</p>}
                    </div>
                </div>
            </div>
        );
    }
}

export default CurrentWeather;
