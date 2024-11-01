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
          <form
            className="modal__form"
            name={this.props.name}
            onSubmit={this.props.onSubmit}
            noValidate
          >
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
            <div className="modal__form-submit-buttons-wrapper">
              <button
                className={`modal__form-submit modal__form-submit_type_${this.props.buttonType}`}
              >
                {this.props.buttonText}
              </button>
              {this.props.additionalButton ? this.props.additionalButton : ""}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
