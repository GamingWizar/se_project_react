import React from "react";
import closeButtonImage from "../assets/close_white.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { admin } from "../utils/constants";

export default function ItemModal(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const isOwn = props.details.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__text-button modal__delete-button ${
    isOwn || currentUser._id === admin
      ? "modal__delete-button_visible"
      : "modal__delete-button_hidden"
  }`;
  return (
    <div
      className={`modal modal_type_item ${
        props.openedModal == "item" && "modal_opened"
      }`}
    >
      <div className="modal__container modal__container_type_item">
        <button
          className="modal__close modal__close_modal_item"
          type="button"
          onClick={props.onClose}
        >
          <img
            className="modal__close-button-image"
            src={closeButtonImage}
            alt="close"
          />
        </button>
        <img
          className="modal__image"
          src={props.details.imageUrl}
          alt={props.details.name}
        />
        <div className="modal__item-bottom">
          <div className="modal__item-text-wrapper">
            <p className="modal__item-text modal__item-text_type_name">
              {props.details.name}
            </p>
            <p className="modal__item-text modal__item-text_last modal__item-text_type_weather">
              {`Weather: ${props.details.weather}`}
            </p>
          </div>
          <button
            className={itemDeleteButtonClassName}
            type="button"
            onClick={() => {
              props.onDelete(props.details);
            }}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}
