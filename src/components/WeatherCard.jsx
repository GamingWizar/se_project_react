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
        <p className="weather-card__text">75°F</p>
        <img className="weather-card__image" src={cloudyImage} alt="Sunny" />
      </div>
    );
  }
}
