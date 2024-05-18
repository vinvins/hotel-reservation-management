import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationListComponent,
    NewReservationComponent,
    ReservationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
