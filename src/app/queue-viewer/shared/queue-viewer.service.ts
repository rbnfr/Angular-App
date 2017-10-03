import { config } from '../../config';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

@Injectable()
export class QueueViewerService {

  constructor(private http: Http) { }

  getCode(): Observable<string> {
    return Observable.of('Q05');
  }

  getQueuers(): Observable<any> {
    return this.http.post(`${config.basePath}visitormanagement/v1/visitor/search`, {}) /* the post usually
                                                                                          demands some parameters to
                                                                                          paginate or make */
    .map(res => res.json());
  }

}
