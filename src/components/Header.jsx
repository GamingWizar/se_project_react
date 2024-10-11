import React from "react";
import { Link } from "react-router-dom";
import headerlogo from "../assets/logo.svg";
import profilePicture from "../assets/profile-image.svg";
import missingProfilePicture from "../assets/profile-image-missing.svg";
import ToggleSwitch from "./ToggleSwitch";
const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header page__section ">
        <div className="header__content-wrapper">
          <Link to="/" className="header__link">
            <img className="header__logo" src={headerlogo} alt="wtwr" />
          </Link>
          <p className="header__text header__date">{`${currentDate}, ${this.props.weatherInfo.name}`}</p>
        </div>
        <div className="header__content-wrapper">
          <ToggleSwitch />
          <button
            className="header__add-clothes"
            type="button"
            onClick={this.props.addClothes}
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__link">
            <p className="header__text header__name">Carver Hannasch</p>
            <img
              className="header__profile-picture"
              src={profilePicture}
              alt="Terrence Tegegne"
            />
          </Link>
        </div>
      </header>
    );
  }
}
