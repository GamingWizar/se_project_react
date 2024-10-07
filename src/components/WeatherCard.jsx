import React from "react";
import "../blocks/weather.css";
import sunnyImage from "../assets/sunny.svg";
import cloudyImage from "../assets/cloudy.svg";
export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="weather-card">
        <p className="weather-card__text">{`${this.props.weatherInfo.main.temp}°F`}</p>
        <img className="weather-card__image" src={cloudyImage} alt="Weather" />
      </div>
    );
  }
}
