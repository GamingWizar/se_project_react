import { useState } from "react";
import React from "react";
import "../vendor/fonts.css";
import "../blocks/App.css";
import "../blocks/body.css";
import "../blocks/page.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";

function App(props) {
  const [openedModal, setOpenedModal] = React.useState("");
  const [cardInfo, setCardInfo] = React.useState({});

  const handleCardClick = (details) => {
    setOpenedModal("item");
    setCardInfo(details);
  };

  return (
    <>
      <Header
        addClothes={() => {
          setOpenedModal("add-clothes-form");
        }}
      />
      <Main temperature="75" handleCardClick={handleCardClick} />
      <Footer />
      <ModalWithForm
        name="add-clothes-form"
        buttonText="Add garment"
        title="New garment"
        openedModal={openedModal}
        onClose={() => {
          setOpenedModal("");
        }}
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
        onClose={() => {
          setOpenedModal("");
        }}
      />
    </>
  );
}

export default App;
