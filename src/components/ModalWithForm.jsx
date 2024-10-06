import React from "react";
import "../blocks/modal.css";
import closeButtonImage from "../assets/close.svg";

export default class ModalWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key == "Escape") {
        document
          .querySelector(`.modal_type_${this.props.name}`)
          .classList.remove("modal_opened");
      }
    });
    const modal = document.querySelector(`.modal_type_${this.props.name}`);

    modal.addEventListener("mousedown", (evt) => {
      if (evt.target == modal) {
        modal.classList.remove("modal_opened");
      }
    });
  }

  render() {
    return (
      <div className={`modal modal_type_${this.props.name} modal_opened`}>
        <div className="modal__container">
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