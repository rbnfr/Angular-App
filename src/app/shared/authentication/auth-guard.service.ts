import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements  CanActivate {
  constructor(private authService: AuthService,
              private router: Router) { }
  canActivate(): boolean {
    if (this.authService.isLogged()) { // If logged, return true and exit. Allow navigation
    }

    if (this.router.url === '/') {
      this.router.navigate(['access']); /* If not logged, recheck the navigation to
                                           resend to login in case the user tried to
                                           navigate modifying directly the url in the browser... */
    }
    return false; // ...and block the navigation.
  }

}
