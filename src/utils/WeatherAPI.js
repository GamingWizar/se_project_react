export default class WeatherAPI {
  constructor(key, latitude, longitude) {
    this._key = key;
    this._latitude = latitude;
    this._longitude = longitude;
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
    ).then(this._checkResponse);
  }
  getWeatherData() {
    return this._request();
  }

  getTempSection(temp) {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66) {
      return "warm";
    } else {
      return "cold";
    }
  }
}
