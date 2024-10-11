import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

export default function Profile(props) {
  return (
    <section className="page__section profile">
      <SideBar />
      <ClothesSection
        handleCardClick={props.handleCardClick}
        weatherInfo={props.weatherInfo}
        clothingItems={props.clothingItems}
      />
    </section>
  );
}
