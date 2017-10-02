import { AccessService } from './access/shared/access.service';
import { AuthService } from './shared/authentication/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public auth: AuthService,
              private accessService: AccessService) {
  }

  logoff(): void {
    this.accessService.logOff();
  }
}
