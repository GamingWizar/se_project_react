import React from "react";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

export default function Profile(props) {
  return (
    <section className="page__section profile">
      <SideBar
        setOpenedModal={props.setOpenedModal}
        openEditProfile={props.openEditProfile}
        signOut={props.signOut}
      />
      <ClothesSection
        handleCardClick={props.handleCardClick}
        weatherInfo={props.weatherInfo}
        clothingItems={props.clothingItems}
        setOpenedModal={props.setOpenedModal}
        isLoggedIn={props.isLoggedIn}
        onCardLike={props.onCardLike}
      />
    </section>
  );
}
