import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { NewReservationComponent } from '../new-reservation/new-reservation.component';
import { ReservationDetailComponent } from '../reservation-detail/reservation-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservationListComponent,
    NewReservationComponent,
    ReservationDetailComponent
      ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
