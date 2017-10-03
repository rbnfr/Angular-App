import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private logged = false; /* State of the user */
  private user = '';
  private code = '';

  // LOGIN
  public isLogged(): boolean {
    return this.logged;
  }

  public setLogged (login: boolean): void {
    this.logged = login;
  }

  // USER
  public getUser(): string {
    return this.user;

  }
  public setUser(username: string): void {
    this.user = username;
  }

  // CODE
  public getCode(): string {
    return this.code;
  }

  public setcode(code: string): void {
    this.code = code;
  }

  


  constructor() { }

}
