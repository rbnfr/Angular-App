import { Router } from '@angular/router';
import { AuthService } from '../../shared/authentication/auth.service';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class AccessService {

  constructor(private auth: AuthService,
              public snackBar: MdSnackBar, // Snackbar opens a little auto-hidding bar with info and close button
              private router: Router,
            private http: Http) { }
  register(name, email, phone): void {
    this.http.post('${config.basePath}visitormanagement/v1/register', {name: name, email: email, phone: phone})
             .map(res => res.json())
             .subscribe((res) => {
               this.auth.setLogged(true);
               this.auth.setUser(name);
               this.auth.setcode(res.code.code);
               this.router.navigate(['code']);
             }, (err) => {
               this.snackBar.open(err.json().message, 'OK', {
                 duration: 2000,
                });
             });
  }

  /* login(name, email, phone): void {
    if (name === 'Anakin' && email === 'annie@empire.com' && phone !== null) {
      alert('You were the Chosen One!');
    } else if (name !== null && email !== null && phone !== null) {
      this.auth.setLogged(true);
      this.auth.setUser(name);
      this.router.navigate(['code']);
    } else {
      this.snackBar.open('access error', 'OK', {
        duration: 2000,
      });
    }
  } */

  logOff(): void {
    this.auth.setLogged(false);
    this.auth.setUser('');
    this.router.navigate(['access']);
  }

}
