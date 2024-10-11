import React from "react";
import ModalWithForm from "./ModalWithForm";

export default function AddItemModal(props) {
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [weather, setWeather] = React.useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleImgChange = (evt) => {
    setImageUrl(evt.target.value);
  };

  const handleWeatherChange = (evt) => {
    setWeather(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onAddItem(name, imageUrl, weather);
  };

  return (
    <>
      <ModalWithForm
        name="add-clothes-form"
        buttonText="Add garment"
        title="New garment"
        openedModal={props.openedModal}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
        <label className="modal__form-label" htmlFor="new-garment-name">
          Name
        </label>
        <input
          className="modal__form-input"
          id="new-garment-name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
        />
        <label className="modal__form-label" htmlFor="new-garment-image">
          Image
        </label>
        <input
          className="modal__form-input"
          id="new-garment-image"
          placeholder="Image URL"
          onChange={handleImgChange}
          value={imageUrl}
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
              value="hot"
              onChange={handleWeatherChange}
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
              value="warm"
              onChange={handleWeatherChange}
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
              value="cold"
              onChange={handleWeatherChange}
            />
            <span className="modal__form-radio-button">
              <span className="modal__form-radio-button-center"></span>
            </span>
            <p className="modal__form-radio-text">Cold</p>
          </label>
        </div>
      </ModalWithForm>
    </>
  );
}
