import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class CodeViewerService {

  constructor() { }
  getCode(): Observable<string> { // Later, this will make a cell to the server
    return Observable.of('Q05');  // but for now, thisw observable will do the work

  }

}
