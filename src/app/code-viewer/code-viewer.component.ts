import { AuthService } from '../shared/authentication/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.css']
})
export class CodeViewerComponent implements OnInit {

  code: string; // Declaration of var used in the template
  name: string;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.code = this.auth.getCode();
    this.name = this.auth.getUser();
  }

  navigationQueue(): void {
    this.router.navigate(['queue']);
  }

}
