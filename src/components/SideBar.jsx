import React from "react";
import profilePicture from "../assets/profile-image.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function SideBar(props) {
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
    </div>
  );
}
