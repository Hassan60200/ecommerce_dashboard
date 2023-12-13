import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {
  }

  urlAdmin: string = "http://localhost:8000/"

  login(email: string, password: string) {
    const loginData = {
      email: email,
      password: password
    };
    return this.http.post(`${this.urlAdmin}login`, loginData);
  }

  setRoles(roles: string[]): void {
    localStorage.setItem('userRoles', JSON.stringify(roles));
  }

  getRoles(): string[] {
    const storedRoles = localStorage.getItem('userRoles');
    return storedRoles ? JSON.parse(storedRoles) : [];
  }

  hasRole(role: string): boolean {
    const roles = this.getRoles();
    return roles.includes(role);
  }

  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string | null {
    const storedToken = localStorage.getItem('token');
    return storedToken ? JSON.parse(storedToken) : null;
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
