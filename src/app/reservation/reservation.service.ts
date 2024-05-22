import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService  {
  reservations :Reservation[]=[];
  
  constructor(){
  

        let reslist=localStorage.getItem("myReservationList");    
        this.reservations=reslist? JSON.parse(reslist):[];
     

  }

 

  //CRUD
getReservations() :Reservation[]{
return this.reservations;
}

 getReservation(ID :string) :Reservation | undefined{
   return this.reservations.find(res=>res.guestId===ID);
 }

addReservation(newReservation :Reservation) :void{


  this.reservations.push(newReservation);
   localStorage.setItem("myReservationList",JSON.stringify(this.reservations)); 

}

 deleteReservation(ID :string) :void{
   let reservationIndex=this.reservations.findIndex(res=> res.guestId===ID);
   this.reservations.splice(reservationIndex,1);
   localStorage.setItem("myReservationList",JSON.stringify(this.reservations)); 
}

 updateReservation(updatedReservation :Reservation) :void{
   let reservationIndex=this.reservations.findIndex(res=> res.guestId===updatedReservation.guestId);  
    this.reservations[reservationIndex]=updatedReservation;
   localStorage.setItem("myReservationList",JSON.stringify(this.reservations)); 
 }

}
