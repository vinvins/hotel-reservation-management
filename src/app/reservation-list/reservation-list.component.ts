import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
 reservations :Reservation[]=[];

 constructor(private Reservationsrv :ReservationService){}


  ngOnInit(): void {
    this.reservations=this.Reservationsrv.getReservations();
   
  }

  DeleteReservation(guestId :string){
  this.Reservationsrv.deleteReservation(guestId);
  }

}
