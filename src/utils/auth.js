export default class Auth {
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

  signUp({ name, avatar, email, password }) {
    return this._request("/signup", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, avatar, email, password }),
    });
  }

  signIn({ email, password }) {
    return this._request("/signin", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
  }

  getUserInfo(jwt) {
    return this._request("/users/me", {
      method: "GET",
      headers: { ...this._headers, authorization: `Bearer ${jwt}` },
    });
  }
}
