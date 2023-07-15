/* eslint-disable import/no-anonymous-default-export */
import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }

    return false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }


  login(idToken, email) {
    localStorage.setItem("id_token", idToken);
    localStorage.setItem("user_email", email);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.reload();
  }
}

export default new AuthService();
