import {Component} from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { SentryService} from './sentry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedEvent: number = -1;

  title = 'Sentry Events';

  displayedColumns = ['date', 'time', 'name', 'email'];

  constructor(
    private router: Router,
    public dataSource: SentryService
  ) { }

  gotoEvent(id): void {
    this.router.navigate(['/events', id]);
  }

  onEventSelect(row): void {
    this.selectedEvent = row.id;
    this.gotoEvent(row.id);
  }

}


