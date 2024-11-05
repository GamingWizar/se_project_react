import React from "react";
import ItemCard from "./ItemCard";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function ClothesSection(props) {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <div className="clothes-section">
      <div className="clothes-section__title-wrapper">
        <h3 className="clothes-section__title">Your Items</h3>
        <button
          className="clothes-section__add-button"
          onClick={() => {
            props.setOpenedModal("add-clothes-form");
          }}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {props.clothingItems
          .filter((item) => {
            return item.owner === currentUser._id;
          })
          .map((clothingItem) => (
            <ItemCard
              details={clothingItem}
              key={clothingItem._id}
              handleCardClick={props.handleCardClick}
              isLoggedIn={props.isLoggedIn}
              onCardLike={props.onCardLike}
            />
          ))}
      </ul>
    </div>
  );
}
