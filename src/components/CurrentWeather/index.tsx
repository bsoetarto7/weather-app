import React from "react";
import "./style.css";

interface Props {
    date: string;
    temperature: number;
    condition: string;
    isForecastFormat?: boolean;
}

export class CurrentWeather extends React.Component<Props> {
    public render(){
        return(
            <div className="currentWeatherContainer">
                <p className="weatherDate">{this.getDay()}</p>
                <p className="weatherDate">{this.getTime()}</p>
                <div className="currentWeatherInformation">
                    <div className="weatherIcon">

                    </div>
                    <div className="weatherInfo">
                        <p>{Math.round(this.props.temperature)} &#8451;</p>
                        {!this.props.isForecastFormat && <p>{this.props.condition}</p>}
                    </div>
                </div>
            </div>
        );
    }

    private getTime = () => {
        const weatherDate = new Date(`${this.props.date} UTC`);
        return weatherDate.toLocaleTimeString().replace(/(.*)\D\d+/, '$1');
    }

    private getDay() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const weatherDate = new Date(`${this.props.date} UTC`);
        return days[weatherDate.getDay()];
    }
}

export default CurrentWeather;
