import React from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = CurrentTemperatureUnitContext;

  render() {
    return (
      <main className="main page__section">
        <WeatherCard
          weatherInfo={this.props.weatherInfo}
          weatherImage={this.props.weatherImage}
        />
        <h2 className="main__card-list-title">
          {`Today is ${
            this.props.weatherInfo.temp[this.context.currentTemperatureUnit]
          }° ${this.context.currentTemperatureUnit} / You may want to wear:`}
        </h2>
        <ul className="main__card-list">
          {this.props.clothingItems
            .filter((item) => {
              return item.weather
                .toLowerCase()
                .includes(this.props.weatherInfo.tempSection);
            })
            .map((clothingItem) => (
              <ItemCard
                details={clothingItem}
                key={clothingItem._id}
                handleCardClick={this.props.handleCardClick}
                onCardLike={this.props.onCardLike}
                isLoggedIn={this.props.isLoggedIn}
              />
            ))}
        </ul>
      </main>
    );
  }
}
