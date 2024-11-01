import React from "react";
import ModalWithForm from "./ModalWithForm";

export default function RegisterModal(props) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onSignUp(inputData);
  };
  const [inputData, setInputData] = React.useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <ModalWithForm
      name="sign-up-form"
      buttonText="Sign Up"
      buttonType="sign-up"
      title="Sign Up"
      openedModal={props.openedModal}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      additionalButton={
        <button
          className=" modal__text-button modal__form-alt-submit"
          type="button"
          onClick={props.onOr}
        >
          or Log In
        </button>
      }
    >
      <label className="modal__form-label" htmlFor="register-email">
        Email
      </label>
      <input
        className="modal__form-input"
        id="register-email"
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        value={inputData.email}
      />
      <label className="modal__form-label" htmlFor="register-password">
        Password
      </label>
      <input
        className="modal__form-input"
        id="register-password"
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        value={inputData.password}
      />
      <label className="modal__form-label" htmlFor="register-name">
        Name
      </label>
      <input
        className="modal__form-input"
        id="register-name"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={inputData.name}
      />
      <label className="modal__form-label" htmlFor="register-avatar">
        Avatar URL
      </label>
      <input
        className="modal__form-input"
        id="register-avatar"
        name="avatar"
        placeholder="Avatar URL"
        onChange={handleChange}
        value={inputData.avatar}
      />
    </ModalWithForm>
  );
}
