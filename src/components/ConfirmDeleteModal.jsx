import React from "react";
import closeButtonImage from "../assets/close.svg";

export default function ConfirmDeleteModal(props) {
  return (
    <div
      className={`modal modal_type_delete ${
        props.openedModal == "delete" && "modal_opened"
      }`}
    >
      <div className="modal__container modal__container_type_confirm-delete">
        <button
          className="modal__close modal__close_modal_delete"
          type="button"
          onClick={props.onClose}
        >
          <img
            className="modal__close-button-image"
            src={closeButtonImage}
            alt="close"
          />
        </button>
        <div className="modal__delete-text-wrapper">
          <p className="modal__text modal__confirm-delete-text">
            Are you sure you want to delete this item? This action is
            irreversible.
          </p>
          <button
            className="modal__text-button modal__delete-button modal__confirm-delete-button"
            type="button"
            onClick={props.confirmDelete}
          >
            Yes, delete item
          </button>
          <button
            className="modal__text-button"
            type="button"
            onClick={props.cancelDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
