import React from "react";
import profilePicture from "../assets/profile-image.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function SideBar({ openEditProfile, signOut }) {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <div className="side-bar">
      <div className="side-bar__profile-info">
        <img
          className="side-bar__profile-img"
          src={currentUser.avatar}
          alt={currentUser.name}
        />
        <p className="side-bar__profile-name">{currentUser.name}</p>
      </div>
      <button
        className="side-bar__text-button side-bar__change-profile"
        type="button"
        onClick={openEditProfile}
      >
        Change profile data
      </button>
      <button
        className="side-bar__text-button side-bar__log-out"
        type="button"
        onClick={signOut}
      >
        Log out
      </button>
    </div>
  );
}
