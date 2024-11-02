import React from "react";
import { Link } from "react-router-dom";
import headerlogo from "../assets/logo.svg";
import ToggleSwitch from "./ToggleSwitch";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});
export default function Header(props) {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <header className="header page__section ">
      <div className="header__content-wrapper">
        <Link to="/" className="header__link">
          <img className="header__logo" src={headerlogo} alt="wtwr" />
        </Link>
        <p className="header__text header__date">{`${currentDate}, ${props.weatherInfo.name}`}</p>
      </div>
      <div className="header__content-wrapper">
        <ToggleSwitch />
        {props.isLoggedIn ? (
          <>
            <button
              className="header__text-button header__add-clothes"
              type="button"
              onClick={() => {
                props.setOpenedModal("add-clothes-form");
              }}
            >
              + Add clothes
            </button>
            <Link to="/profile" className="header__link">
              <p className="header__text header__name">{currentUser.name}</p>
              {}
              <img
                className="header__profile-picture"
                src={currentUser.avatar}
                alt={currentUser.name}
              />
            </Link>
          </>
        ) : (
          <>
            <button
              className="header__text-button header__sign-up"
              type="button"
              onClick={() => {
                props.setOpenedModal("sign-up-form");
              }}
            >
              Sign Up
            </button>
            <button
              className="header__text-button header__log-in"
              type="button"
              onClick={() => {
                props.setOpenedModal("log-in-form");
              }}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}
