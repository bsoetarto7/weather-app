import React from "react";
import { CurrentWeather } from "..";
import { Forecast } from "../../models";
import "./style.css";

interface Props {
    countryWeatherData: Forecast;
}

interface State {
    isMobileView: boolean;
}

export class WeatherDashboard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isMobileView: window.innerWidth < 768,
        };
    }

    public componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    private handleResize = () => {
        if (window.innerWidth < 768) {
            this.setState({ isMobileView: true });
        } else {
            this.setState({ isMobileView: false });
        }
    };

    private renderForecastWeather = () => {
        const {
            countryWeatherData,
        } = this.props;
        const { isMobileView } = this.state;
        const weatherData = countryWeatherData.list
            .slice(1)
            .filter((data, index) => !(index % 4) && data.sys.pod === "d")
            .slice(0, isMobileView ? 2 : 5)
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
