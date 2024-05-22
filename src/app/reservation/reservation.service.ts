import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService  {
  reservations :Reservation[]=[];
  apiUrl :string="http://localhost:3002";

  constructor(private http :HttpClient){}

  //CRUD
getReservations() :Observable<Reservation[]>{
return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
}

 getReservation(ID :string) :Observable<Reservation>{
   return this.http.get<Reservation>(this.apiUrl + "/reservation/" + ID);
 }

addReservation(newReservation :Reservation) : Observable<void>{


return this.http.post<void>(this.apiUrl+"/reservation",newReservation);


}

 deleteReservation(ID :string) :Observable<void>{
  return this.http.delete<void>(this.apiUrl + "/reservation/" + ID);
   }



 updateReservation(updatedReservation :Reservation,guestId :string) :Observable<void>{
  return this.http.put<void>(this.apiUrl+"/reservation/" +guestId,updatedReservation);


 }

}
