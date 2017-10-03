import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class QueueViewerService {

  constructor() { }

  getCode(): Observable<string> {
    return Observable.of('Q05');
  }

}
