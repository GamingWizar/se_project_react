import React from "react";
import ModalWithForm from "./ModalWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfileModal(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleEditProfileSubmit();
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    props.setProfileEditInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ModalWithForm
      name="edit-profile-form"
      buttonText="Save Changes"
      buttonType="edit-profile"
      title="Change profile data"
      openedModal={props.openedModal}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__form-label">
        Name
        <input
          className="modal__form-input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={props.profileEditInputData.name}
        />
      </label>

      <label className="modal__form-label">
        Avatar
        <input
          className="modal__form-input"
          name="avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={props.profileEditInputData.avatar}
        />
      </label>
    </ModalWithForm>
  );
}
