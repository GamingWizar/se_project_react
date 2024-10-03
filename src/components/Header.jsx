import React from "react";
import "../blocks/Header.css";
import headerlogo from "../assets/logo.svg";
import profilePicture from "../assets/profile-image.svg";
import missingProfilePicture from "../assets/profile-image-missing.svg";
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
          <img className="header__logo" src={headerlogo} alt="wtwr" />
          <p className="header__text header__date">{`${currentDate}, Sharpsburg`}</p>
        </div>
        <div className="header__content-wrapper">
          <button className="header__add-clothes" type="button">
            + Add clothes
          </button>
          <p className="header__text header__name">Terrence Tegegne</p>
          <img
            className="header__profile-picture"
            src={profilePicture}
            alt="Terrence Tegegne"
          />
        </div>
      </header>
    );
  }
}
