import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { SentryEvent } from './sentry.event';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';

@Injectable()
export class SentryService extends DataSource<any> {
  private apiUrl = 'https://sentry.io/api/0/projects/uclspp/publg100/events';

  constructor(private http: Http) {
    super();
  }

  private _getEvents(id: string = null): Observable<Response> {
    let url = this.apiUrl;
    if (id) {
      url = url + '/' + id + '/';
    }
    const proxy = 'https://crow-proxy.herokuapp.com';

    const headers = new Headers();
    headers.append('Target-URL', url);
    headers.append('Authorization', 'Bearer c4b91029f8da4cf9a30e53d36f911c1fb651042ab60a4491a2f28d0c4cab9a15');

    return this.http.get(proxy, { headers: headers} );
  }

  public createEvent(data: any): SentryEvent {
    const event: SentryEvent = {
      id: data.eventID,
      timestamp: data.context.timestamp,
      type: data.metadata.type,
      user: JSON.stringify(data.user, null, 2),
      user_name: data.user.name,
      user_email: data.user.email,
      sysinfo: JSON.stringify(data.user.data.sysinfo, null, 2),
      platform: JSON.stringify(data.context.platform, null, 2),
      packages: JSON.stringify(data.context.packages, Object.keys(data.context.packages).sort(), 2),
      errorlog: data.context.errorlog
    };

    return(event);
  }

  getEventResponse(id: string): Observable<Response> {
    return this._getEvents(id);
  }

  getEvents(): Observable<SentryEvent[]> {
    return this._getEvents()
      .map(response => response.json().map(data => this.createEvent(data)));
  }

  connect(): Observable<SentryEvent[]> { return this.getEvents(); }

  disconnect() {}

}
