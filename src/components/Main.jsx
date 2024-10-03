import React from "react";
import WeatherCard from "./WeatherCard";
import "../blocks/Main.css";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main page__section">
        <WeatherCard />
      </main>
    );
  }
}
