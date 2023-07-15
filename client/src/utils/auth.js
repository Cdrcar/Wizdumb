/* eslint-disable import/no-anonymous-default-export */
import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    if (token) {
      try {
        const decoded = decode(token);
        return { id: decoded.sub }; // Access the sub property from the decoded token
      } catch (error) {
        console.error('Invalid token:', error);
        this.logout();
        return null;
      }
    }
    return null;
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (error) {
      console.error('Error decoding token:', error);
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
