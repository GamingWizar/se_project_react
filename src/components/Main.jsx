import React from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/Main.css";
import { defaultClothingItems } from "../utils/constants.js";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main page__section">
        <WeatherCard />
        <h2 className="main__card-list-title">
          {`Today is ${this.props.temperature}° F / You may want to wear:`}
        </h2>
        <ul className="main__card-list">
          {defaultClothingItems.map((clothingItem) => (
            <ItemCard
              details={clothingItem}
              key={clothingItem._id}
              handleCardClick={this.props.handleCardClick}
            />
          ))}
        </ul>
      </main>
    );
  }
}
