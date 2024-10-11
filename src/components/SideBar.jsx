import React from "react";
import profilePicture from "../assets/profile-image.svg";

export default function SideBar(props) {
  return (
    <div className="side-bar">
      <div className="side-bar__profile-info">
        <img
          className="side-bar__profile-img"
          src={profilePicture}
          alt="Carver Hannasch"
        />
        <p className="side-bar__profile-name">Carver Hannasch</p>
      </div>
    </div>
  );
}
