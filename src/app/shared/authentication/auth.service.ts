import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private logged = false; /* State of the user */
  private user = '';

  public isLogged(): boolean {
    return this.logged;
  }

  public setLogged (login: boolean): void {
    this.logged = login;
  }

  public getUser(username: string): void {
    this.user = username;
  }
  public setUser(username: string): void {
    this.user = username;
}

  constructor() { }

}
