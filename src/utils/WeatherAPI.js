export default class WeatherAPI {
  constructor(key, latitude, longitude) {
    this._key = key;
    this._latitude = latitude;
    this._longitude = longitude;
  }

  _getTempSection(temp) {
    if (temp >= 80) {
      return "hot";
    } else if (temp >= 66) {
      return "warm";
    } else {
      return "cold";
    }
  }

  _getWeatherType(weather) {
    let weatherType = "";
    switch (weather.main) {
      case "Thunderstorm":
        weatherType = "Storm";
        break;
      case "Drizzle":
        weatherType = "Rain";
        break;
      case "Rain":
        weatherType = "Rain";
        break;
      case "Snow":
        weatherType = "Snow";
        break;
      case "Mist" ||
        "Smoke" ||
        "Haze" ||
        "Dust" ||
        "Fog" ||
        "Sand" ||
        "Dust" ||
        "Ash":
        weatherType = "Fog";
        break;
      case "Clouds":
        weatherType = "Cloud";
        break;
      default:
        weatherType = "Clear";
    }
    return weatherType;
  }

  _getIsDay(sys) {
    if (Date.now() / 1000 > sys.sunrise && Date.now() / 1000 < sys.sunset) {
      return true;
    } else {
      return false;
    }
  }

  _getWeatherInfo(weather) {
    const weatherInfo = {};
    weatherInfo.temp = {};
    weatherInfo.temp.F = weather.main.temp;
    weatherInfo.temp.C = Math.round(((weather.main.temp - 32) * 5) / 9);
    weatherInfo.name = weather.name;
    weatherInfo.tempSection = this._getTempSection(weather.main.temp);
    weatherInfo.weatherType = this._getWeatherType(weather.weather[0]);
    weatherInfo.isDay = this._getIsDay(weather.sys);
    return weatherInfo;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  _request() {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this._latitude}&lon=${this._longitude}&units=imperial&appid=${this._key}`
    )
      .then(this._checkResponse)
      .then((weather) => {
        return this._getWeatherInfo(weather);
      });
  }
  getWeatherData() {
    return this._request();
  }
}
