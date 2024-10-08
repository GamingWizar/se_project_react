import { useState } from "react";
import React from "react";
import { weatherKey, latitude, longitude } from "../utils/constants.js";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import WeatherAPI from "../utils/WeatherAPI";
import daySunny from "../assets/sunny.svg";
import dayCloudy from "../assets/cloudy.svg";
import dayRainy from "../assets/rainy.svg";
import dayStormy from "../assets/stormy.svg";
import daySnowy from "../assets/snowy.svg";
import dayFoggy from "../assets/foggy.svg";
import nightSunny from "../assets/night_clear.svg";
import nightCloudy from "../assets/night_cloudy.svg";
import nightRainy from "../assets/night_rainy.svg";
import nightStormy from "../assets/night_stormy.svg";
import nightSnowy from "../assets/night_snowy.svg";
import nightFoggy from "../assets/night_foggy.svg";
const Weather = new WeatherAPI(weatherKey, latitude, longitude);

function App(props) {
  const [openedModal, setOpenedModal] = React.useState("");
  const [cardInfo, setCardInfo] = React.useState({});
  const [weatherInfo, setWeatherInfo] = React.useState({
    temp: "",
    name: "",
    tempSection: "",
    weatherType: "",
    isDay: true,
  });
  const [weatherImage, setWeatherImage] = React.useState(daySunny);
  const handleCardClick = (details) => {
    setOpenedModal("item");
    setCardInfo(details);
  };

  const closeModal = () => {
    setOpenedModal("");
  };

  React.useEffect(() => {
    if (openedModal == "") {
      return;
    }
    const handleEscClose = (evt) => {
      if (evt.key == "Escape") {
        closeModal();
      }
    };

    const handleClickClose = (evt) => {
      if (evt.target.classList.contains(`modal_type_${openedModal}`)) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleClickClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleClickClose);
    };
  }, [openedModal]);

  React.useEffect(() => {
    Weather.getWeatherData()
      .then((weather) => {
        console.log(weather);
        setWeatherInfo(weather);
        if (weather.isDay) {
          if (weather.weatherType === "Cloud") {
            setWeatherImage(dayCloudy);
          } else if (weather.weatherType == "Rain") {
            setWeatherImage(dayRainy);
          } else if (weather.weatherType == "Storm") {
            setWeatherImage(dayStormy);
          } else if (weather.weatherType == "Snow") {
            setWeatherImage(daySnowy);
          } else if (weather.weatherType == "Fog") {
            setWeatherImage(dayFoggy);
          } else {
            setWeatherImage(daySunny);
          }
        } else {
          if (weather.weatherType === "Cloud") {
            setWeatherImage(nightCloudy);
          } else if (weather.weatherType == "Rain") {
            setWeatherImage(nightRainy);
          } else if (weather.weatherType == "Storm") {
            setWeatherImage(nightStormy);
          } else if (weather.weatherType == "Snow") {
            setWeatherImage(nightSnowy);
          } else if (weather.weatherType == "Fog") {
            setWeatherImage(nightFoggy);
          } else {
            setWeatherImage(nightSunny);
          }
        }
      })
      .catch((err) => {
        console.error(`ERROR: ${err}`);
      });
  }, []);

  return (
    <>
      <Header
        addClothes={() => {
          setOpenedModal("add-clothes-form");
        }}
        weatherInfo={weatherInfo}
      />
      <Main
        temperature="75"
        handleCardClick={handleCardClick}
        weatherInfo={weatherInfo}
        weatherImage={weatherImage}
      />
      <Footer />
      <ModalWithForm
        name="add-clothes-form"
        buttonText="Add garment"
        title="New garment"
        openedModal={openedModal}
        onClose={closeModal}
      >
        <label className="modal__form-label" htmlFor="new-garment-name">
          Name
        </label>
        <input
          className="modal__form-input"
          id="new-garment-name"
          placeholder="Name"
        />
        <label className="modal__form-label" htmlFor="new-garment-image">
          Image
        </label>
        <input
          className="modal__form-input"
          id="new-garment-image"
          placeholder="Image URL"
        />
        <div className="modal__form-radio-inputs">
          <h4 className="modal__title modal__radio-inputs-title">
            Select the weather type:
          </h4>
          <label className="modal__form-label modal__form-radio-label">
            <input
              className="modal__form-input modal__form-input_type_radio"
              type="radio"
              name="weather-type"
              id="Hot"
              value="Hot"
            />
            <span className="modal__form-radio-button">
              <span className="modal__form-radio-button-center"></span>
            </span>
            <p className="modal__form-radio-text">Hot</p>
          </label>
          <label className="modal__form-label modal__form-radio-label">
            <input
              className="modal__form-input modal__form-input_type_radio"
              type="radio"
              name="weather-type"
              id="Warm"
              value="Warm"
            />
            <span className="modal__form-radio-button">
              <span className="modal__form-radio-button-center"></span>
            </span>
            <p className="modal__form-radio-text">Warm</p>
          </label>
          <label className="modal__form-label modal__form-radio-label modal__form-radio-label_last">
            <input
              className="modal__form-input modal__form-input_type_radio"
              type="radio"
              name="weather-type"
              id="Cold"
              value="Cold"
            />
            <span className="modal__form-radio-button">
              <span className="modal__form-radio-button-center"></span>
            </span>
            <p className="modal__form-radio-text">Cold</p>
          </label>
        </div>
      </ModalWithForm>
      <ItemModal
        details={cardInfo}
        openedModal={openedModal}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
