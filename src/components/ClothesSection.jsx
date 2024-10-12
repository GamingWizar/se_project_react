import React from "react";
import ItemCard from "./ItemCard";

export default function ClothesSection(props) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__title-wrapper">
        <h3 className="clothes-section__title">Your Items</h3>
        <button
          className="clothes-section__add-button"
          onClick={props.addClothes}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__card-list">
        {props.clothingItems.map((clothingItem) => (
          <ItemCard
            details={clothingItem}
            key={clothingItem._id}
            handleCardClick={props.handleCardClick}
          />
        ))}
      </ul>
    </div>
  );
}
