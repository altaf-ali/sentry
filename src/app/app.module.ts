import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SentryService} from './sentry.service';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';
import { EventComponent } from './event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [SentryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
