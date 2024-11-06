import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile.jsx";
import Footer from "./Footer";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import ItemModal from "./ItemModal";
import AddItemModal from "./AddItemModal.jsx";
import RegisterModal from "./RegisterModal.jsx";
import LoginModal from "./LoginModal.jsx";
import EditProfileModal from "./EditProfileModal.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import WeatherAPI from "../utils/WeatherAPI";
import Api from "../utils/api.js";
import Auth from "../utils/auth.js";
import { setToken, getToken, removeToken } from "../utils/token.js";
import { weatherKey, latitude, longitude } from "../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

import daySunny from "../assets/sunny.svg";
import dayCloudy from "../assets/cloudy.svg";
import dayRainy from "../assets/rainy.svg";
import dayStormy from "../assets/stormy.svg";
import daySnowy from "../assets/snowy.svg";
import dayFoggy from "../assets/foggy.svg";
import nightSunny from "../assets/night_clear.svg";
import nightCloudy from "../assets/night_cloudy.svg";
import nightRainy from "../assets/night_rainy.svg";
import nightStormy from "../assets/night_stormy.svg";
import nightSnowy from "../assets/night_snowy.svg";
import nightFoggy from "../assets/night_foggy.svg";

const Weather = new WeatherAPI(weatherKey, latitude, longitude);
const ClothesApi = new Api();
const AuthApi = new Auth();

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    avatar: "",
    email: "",
    _id: "",
  });

  const [clothingItems, setClothingItems] = React.useState([
    { _id: 0, name: "", weather: "", link: "", likes: [] },
    { _id: 1, name: "", weather: "", link: "", likes: [] },
  ]);

  const handleCardLike = (id, isLiked) => {
    const token = getToken();
    !isLiked
      ? ClothesApi.addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.error(err))
      : ClothesApi.removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch((err) => console.error(err));
  };

  const updateClothingItems = () => {
    ClothesApi.getClothes()
      .then((res) => {
        setClothingItems(res.data.toReversed());
      })
      .catch((err) => {
        console.error(`ERROR: ${err}`);
      });
  };

  const handleAddItemSubmit = (clothesName, clothesImg, clothesWeather) => {
    ClothesApi.addClothingItem(
      {
        name: clothesName,
        imageUrl: clothesImg,
        weather: clothesWeather,
      },
      getToken()
    )
      .then((res) => {
        closeModal();
        setClothingItems([res.data, ...clothingItems]);
      })
      .catch((err) => {
        console.error(`ERROR: ${err}`);
      });
  };

  const [cardToDelete, setCardToDelete] = React.useState({});
  const deleteCard = (cardDetails) => {
    setOpenedModal("delete");
    setCardToDelete(cardDetails);
  };

  const handleConfirmDelete = () => {
    ClothesApi.deleteClothingItem(cardToDelete._id, getToken())
      .then((res) => {
        closeModal();
        setClothingItems(
          clothingItems.filter((item) => {
            return item._id != cardToDelete._id;
          })
        );
        setCardToDelete({});
      })
      .catch((err) => {
        console.error(`ERROR: ${err}`);
      });
  };

  const handleCancelDelete = () => {
    closeModal();
    setCardToDelete({});
  };

  const [openedModal, setOpenedModal] = React.useState("");
  const [cardInfo, setCardInfo] = React.useState({});
  const [weatherInfo, setWeatherInfo] = React.useState({
    temp: "",
    name: "",
    tempSection: "",
    weatherType: "",
    isDay: true,
  });
  const [weatherImage, setWeatherImage] = React.useState(daySunny);
  const handleCardClick = (details) => {
    setOpenedModal("item");
    setCardInfo(details);
  };

  const closeModal = () => {
    setOpenedModal("");
  };

  const swapAuthenticationModal = () => {
    if (openedModal === "log-in-form") {
      setOpenedModal("sign-up-form");
    } else {
      setOpenedModal("log-in-form");
    }
  };

  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    React.useState("F");

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const saveUserInfo = (token) => {
    AuthApi.getUserInfo(token)
      .then((res) => {
        const { name, avatar, email, _id } = res.data;
        setCurrentUser({ name, avatar, email, _id });
        setToken(token);
        setIsLoggedIn(true);
        closeModal();
      })
      .catch((err) => {
        console.error(err);
        removeToken();
      });
  };

  const handleRegisterSubmit = (data) => {
    AuthApi.signUp(data)
      .then((res) => {
        saveUserInfo(res.token);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogInSubmit = (data) => {
    AuthApi.signIn(data)
      .then((res) => {
        saveUserInfo(res.token);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSignOut = () => {
    removeToken();
    setIsLoggedIn(false);
    setCurrentUser({
      name: "",
      avatar: "",
      email: "",
      _id: "",
    });
  };

  const [profileEditInputData, setProfileEditInputData] = React.useState({
    name: "",
    avatar: "",
  });

  const handleEditProfileSubmit = () => {
    AuthApi.updateUserInfo(profileEditInputData, getToken())
      .then((res) => {
        const { name, avatar, email, _id } = res.data;
        setCurrentUser({ name, avatar, email, _id });
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const openEditProfile = () => {
    setOpenedModal("edit-profile-form");
    setProfileEditInputData({
      name: currentUser.name,
      avatar: currentUser.avatar,
    });
  };

  React.useEffect(() => {
    if (openedModal == "") {
      return;
    }
    const handleEscClose = (evt) => {
      if (evt.key == "Escape") {
        closeModal();
      }
    };

    const handleClickClose = (evt) => {
      if (evt.target.classList.contains("modal")) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleClickClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleClickClose);
    };
  }, [openedModal]);

  React.useEffect(() => {
    Weather.getWeatherData()
      .then((weather) => {
        setWeatherInfo(weather);
        if (weather.isDay) {
          if (weather.weatherType === "Cloud") {
            setWeatherImage(dayCloudy);
          } else if (weather.weatherType == "Rain") {
            setWeatherImage(dayRainy);
          } else if (weather.weatherType == "Storm") {
            setWeatherImage(dayStormy);
          } else if (weather.weatherType == "Snow") {
            setWeatherImage(daySnowy);
          } else if (weather.weatherType == "Fog") {
            setWeatherImage(dayFoggy);
          } else {
            setWeatherImage(daySunny);
          }
        } else {
          if (weather.weatherType === "Cloud") {
            setWeatherImage(nightCloudy);
          } else if (weather.weatherType == "Rain") {
            setWeatherImage(nightRainy);
          } else if (weather.weatherType == "Storm") {
            setWeatherImage(nightStormy);
          } else if (weather.weatherType == "Snow") {
            setWeatherImage(nightSnowy);
          } else if (weather.weatherType == "Fog") {
            setWeatherImage(nightFoggy);
          } else {
            setWeatherImage(nightSunny);
          }
        }
      })
      .catch((err) => {
        console.error(`ERROR: ${err}`);
      });
    updateClothingItems();
  }, []);

  React.useEffect(() => {
    let jwt = getToken();
    if (!jwt) {
      return;
    }
    saveUserInfo(jwt);
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          isLoggedIn={isLoggedIn}
          clothingItems={clothingItems}
          setOpenedModal={setOpenedModal}
          weatherInfo={weatherInfo}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                clothingItems={clothingItems}
                handleCardClick={handleCardClick}
                weatherInfo={weatherInfo}
                weatherImage={weatherImage}
                onCardLike={handleCardLike}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  handleCardClick={handleCardClick}
                  weatherInfo={weatherInfo}
                  clothingItems={clothingItems}
                  setOpenedModal={setOpenedModal}
                  openEditProfile={openEditProfile}
                  signOut={handleSignOut}
                  onCardLike={handleCardLike}
                  isLoggedIn={isLoggedIn}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <AddItemModal
          openedModal={openedModal}
          onClose={closeModal}
          onAddItem={handleAddItemSubmit}
        />
        <ItemModal
          details={cardInfo}
          openedModal={openedModal}
          onClose={closeModal}
          onDelete={deleteCard}
        />
        <ConfirmDeleteModal
          openedModal={openedModal}
          onClose={closeModal}
          confirmDelete={handleConfirmDelete}
          cancelDelete={handleCancelDelete}
        />
        <RegisterModal
          openedModal={openedModal}
          onClose={closeModal}
          onSignUp={handleRegisterSubmit}
          onOr={swapAuthenticationModal}
        />
        <LoginModal
          openedModal={openedModal}
          onClose={closeModal}
          onLogIn={handleLogInSubmit}
          onOr={swapAuthenticationModal}
        />
        <EditProfileModal
          openedModal={openedModal}
          onClose={closeModal}
          profileEditInputData={profileEditInputData}
          setProfileEditInputData={setProfileEditInputData}
          handleEditProfileSubmit={handleEditProfileSubmit}
        />
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
