export default class Auth {
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
      return res.json().then((json) => {
        return Promise.reject(`ERROR: ${res.status}: ${json.message}`);
      });
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
    }).then((res) => {
      return this.signIn({ email, password });
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

  updateUserInfo({ name, avatar }, jwt) {
    return this._request("/users/me", {
      method: "PATCH",
      headers: { ...this._headers, authorization: `Bearer ${jwt}` },
      body: JSON.stringify({ name, avatar }),
    });
  }
}
