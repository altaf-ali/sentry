import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { SentryService } from './sentry.service';
import { SentryEvent } from './sentry.event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html'
})

export class EventComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataSource: SentryService
  ) {
  }
  event: SentryEvent;

  createEvent (response: any): SentryEvent {
    const event: SentryEvent = this.dataSource.createEvent(response.json());
    if (event) {
      console.log(event.timestamp);
    }
    return event;
  }

  ngOnInit(): void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataSource.getEventResponse(params.get('id')))
      .subscribe(
        response => this.event = this.createEvent(response));

  }

}
