import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 reservations :Reservation[]=[];

 //CRUD
getReservations() :Reservation[]{
return this.reservations;
}

getReservation(ID :string) :Reservation | undefined{
  return this.reservations.find(res=>res.ID===ID);
}

addReservation(newReservation :Reservation) :void{
this.reservations.push(newReservation);
}

deleteReservation(ID :string) :void{
  let reservationIndex=this.reservations.findIndex(res=> res.ID===ID);
  this.reservations.splice(reservationIndex,1);
}

updateReservation(updatedReservation :Reservation) :void{
  let reservationIndex=this.reservations.findIndex(res=> res.ID===updatedReservation.ID);
  this.reservations[reservationIndex]=updatedReservation;
}

}
