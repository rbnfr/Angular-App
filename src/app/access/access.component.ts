import { AccessService } from './shared/access.service';
import { CodeViewerComponent } from '../code-viewer/code-viewer.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  router: any;

  constructor(private accessService: AccessService) {
  }

  submitAccess(formValue): void {
    this.accessService.register(formValue.value.name, formValue.value.email, formValue.value.phone);
    formValue.reset();
  }

  ngOnInit() {
  }

}
