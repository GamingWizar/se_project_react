export default class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._headers = { "Content-Type": "application/json" };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  _request(url, fetchOptions) {
    return fetch(`${this._baseUrl}${url}`, fetchOptions).then(
      this._checkResponse
    );
  }

  getClothes() {
    return this._request("/items");
  }

  addClothingItem({ name, imageUrl, weather }) {
    return this._request("/items", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        imageUrl: imageUrl,
        weather: weather,
      }),
    });
  }

  deleteClothingItem(id) {
    return this._request(`/items/${id}`, {
      method: "DELETE",
    });
  }
}
