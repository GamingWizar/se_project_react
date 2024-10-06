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
          Today is 75° F / You may want to wear:
        </h2>
        <ul className="main__card-list">
          <ItemCard details={defaultClothingItems[0]} />
          <ItemCard details={defaultClothingItems[1]} />
          <ItemCard details={defaultClothingItems[2]} />
          <ItemCard details={defaultClothingItems[3]} />
          <ItemCard details={defaultClothingItems[4]} />
          <ItemCard details={defaultClothingItems[5]} />
        </ul>
      </main>
    );
  }
}
