import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"new",component:NewReservationComponent},
  {path:"list",component:ReservationListComponent},
  {path:"edit/:id",component:NewReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
