import React from "react";

export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`weather-card ${
          this.props.weatherInfo.isDay
            ? "weather-card_color_day"
            : "weather-card_color_night"
        } ${
          this.props.weatherInfo.weatherType != "Clear" &&
          this.props.weatherInfo.weatherType != "Cloud" &&
          "weather-card_color_stormy-day"
        }`}
      >
        <p className="weather-card__text">{`${this.props.weatherInfo.temp}°F`}</p>
        <img
          className="weather-card__image"
          src={this.props.weatherImage}
          alt="Weather"
        />
      </div>
    );
  }
}
