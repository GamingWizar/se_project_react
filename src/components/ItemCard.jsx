import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function ItemCard(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  const isLiked = props.details.likes.some((id) => id === currentUser._id);

  const handleLike = () => {
    props.onCardLike(props.details._id, isLiked);
  };

  return (
    <div className="card-item">
      <div className="card-item__info-wrapper">
        <div className="card-item__text-wrapper">
          <p className="card-item__text">{props.details.name}</p>
        </div>
        <button
          className={`card-item__like-button ${
            isLiked && "card-item__like-button_liked"
          } ${!props.isLoggedIn && "card-item__like-button_disabled"}`}
          type="button"
          onClick={handleLike}
        ></button>
      </div>
      <img
        className="card-item__card-image"
        src={props.details.imageUrl}
        alt={props.details.name}
        onClick={() => {
          props.handleCardClick(props.details);
        }}
      />
    </div>
  );
}
