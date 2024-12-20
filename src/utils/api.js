export default class Api {
  constructor() {
    this._baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://api.wtwr.spoggi.com"
        : "http://localhost:3001";
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
    return this._request("/items", { method: "GET", headers: this._headers });
  }

  addClothingItem({ name, imageUrl, weather }, jwt) {
    return this._request("/items", {
      method: "POST",
      headers: { ...this._headers, authorization: `Bearer ${jwt}` },
      body: JSON.stringify({
        name: name,
        imageUrl: imageUrl,
        weather: weather,
      }),
    });
  }

  deleteClothingItem(id, jwt) {
    return this._request(`/items/${id}`, {
      method: "DELETE",
      headers: { ...this._headers, authorization: `Bearer ${jwt}` },
    });
  }

  addCardLike(id, jwt) {
    return this._request(`/items/${id}/likes`, {
      method: "PUT",
      headers: { ...this._headers, authorization: `Bearer ${jwt}` },
    });
  }

  removeCardLike(id, jwt) {
    return this._request(`/items/${id}/likes`, {
      method: "DELETE",
      headers: { ...this._headers, authorization: `Bearer ${jwt}` },
    });
  }
}
