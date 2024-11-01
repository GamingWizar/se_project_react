import React from "react";
import ModalWithForm from "./ModalWithForm";

export default function LoginModal(props) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onLogIn(inputData);
  };
  const [inputData, setInputData] = React.useState({
    email: "",
    password: "",
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
      name="log-in-form"
      buttonText="Log In"
      buttonType="log-in"
      title="Log In"
      openedModal={props.openedModal}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      additionalButton={
        <button
          className=" modal__text-button modal__form-alt-submit"
          type="button"
          onClick={props.onOr}
        >
          or Sign Up
        </button>
      }
    >
      <label className="modal__form-label" htmlFor="log-in-email">
        Email
      </label>
      <input
        className="modal__form-input"
        id="log-in-email"
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        value={inputData.email}
      />
      <label className="modal__form-label" htmlFor="log-in-password">
        Password
      </label>
      <input
        className="modal__form-input"
        id="log-in-password"
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        value={inputData.password}
      />
    </ModalWithForm>
  );
}
