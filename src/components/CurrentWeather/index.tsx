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
    public render(){
        return(
            <div className={`currentWeatherContainer${!!this.props.isForecastFormat ? ` currentWeatherForecastContainer`: ""}`}>
                <p className="weatherDate">{this.getDay()}</p>
                <p className="weatherTime">{this.getTime()}</p>
                <div className={`currentWeatherInformation${!!this.props.isForecastFormat ? ` currentWeatherForecastFormat`: ""}`}>
                    <div className="weatherIcon">
                        <img 
                            className={!!this.props.isForecastFormat ? "forecastIcon" : ""} 
                            src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} 
                            alt={this.props.condition}
                        />
                    </div>
                    <div className="weatherInfo">
                        <p className="weatherTemperature">{Math.round(this.props.temperature)} &#8451;</p>
                        {!this.props.isForecastFormat && <p className="weatherCondition">{this.props.condition}</p>}
                    </div>
                </div>
            </div>
        );
    }

    private getTime = () => {
        const weatherDate = new Date(`${this.props.date} UTC`);
        return weatherDate.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    }

    private getDay = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const weatherDate = new Date(`${this.props.date} UTC`);
        return days[weatherDate.getDay()];
    }

}

export default CurrentWeather;
