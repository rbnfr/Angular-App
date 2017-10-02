import { CodeViewerComponent } from '../code-viewer/code-viewer.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  constructor(private router: Router) { }

  submitAccess(): void {
    this.router.navigate([CodeViewerComponent]);
  }

  ngOnInit() {
  }

}
