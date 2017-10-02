import { Router } from '@angular/router';
import { ITdDataTableColumn } from '@covalent/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-viewer',
  templateUrl: './queue-viewer.component.html',
  styleUrls: ['./queue-viewer.component.css']
})
export class QueueViewerComponent implements OnInit {
  columns: ITdDataTableColumn[] = [
    { name: 'code',  label: 'Code'},
    { name: 'hour', label: 'Hour' },
    { name: 'name', label: 'Name'}];

  queuers: any[] = [
      {code: 'Q05', hour: '14:30', name: 'Geralt'},
      {code: 'Q06', hour: '14:40', name: 'Ciri'},
      {code: 'Q07', hour: '14:50', name: 'Yenn'},
    ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateCode(): void {
    this.router.navigate(['code']);
  }

}
