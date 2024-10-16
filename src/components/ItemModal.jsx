import React from "react";
import closeButtonImage from "../assets/close_white.svg";

export default class ItemModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`modal modal_type_item ${
          this.props.openedModal == "item" && "modal_opened"
        }`}
      >
        <div className="modal__container modal__container_type_item">
          <button
            className="modal__close modal__close_modal_item"
            type="button"
            onClick={this.props.onClose}
          >
            <img
              className="modal__close-button-image"
              src={closeButtonImage}
              alt="close"
            />
          </button>
          <img
            className="modal__image"
            src={this.props.details.imageUrl}
            alt={this.props.details.name}
          />
          <div className="modal__item-bottom">
            <div className="modal__item-text-wrapper">
              <p className="modal__item-text modal__item-text_type_name">
                {this.props.details.name}
              </p>
              <p className="modal__item-text modal__item-text_last modal__item-text_type_weather">
                {`Weather: ${this.props.details.weather}`}
              </p>
            </div>
            <button
              className="modal__text-button modal__delete-button"
              type="button"
              onClick={() => {
                this.props.onDelete(this.props.details);
              }}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    );
  }
}
