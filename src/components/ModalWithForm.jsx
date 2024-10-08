import React from "react";
import closeButtonImage from "../assets/close.svg";

export default class ModalWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`modal modal_type_${this.props.name} ${
          this.props.openedModal == `${this.props.name}` && "modal_opened"
        }`}
      >
        <div className="modal__container modal__container_type_form">
          <form className="modal__form" name={this.props.name}>
            <h3 className="modal__title">{this.props.title}</h3>
            <button
              className="modal__close"
              type="button"
              onClick={this.props.onClose}
            >
              <img
                className="modal__close-button-image"
                src={closeButtonImage}
                alt="close"
              />
            </button>
            {this.props.children}
            <button className="modal__form-submit">
              {this.props.buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
