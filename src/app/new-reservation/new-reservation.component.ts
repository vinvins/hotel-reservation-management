import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Guid } from 'guid-typescript';
import { ReservationService } from '../reservation/reservation.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {
reservationForm :FormGroup=new FormGroup({});
guestIdValue :string = "";

constructor(private formBuilder :FormBuilder, private reservationSrc :ReservationService, private router :Router, private activatedRoute :ActivatedRoute){}
  
ngOnInit(): void {

  this.guestIdValue=this.activatedRoute.snapshot.params["id"];
if(this.guestIdValue != "")
  {
    //Initialize values
   let reservationValue = this.reservationSrc.getReservation(this.guestIdValue);
   this.reservationForm=this.formBuilder.group({
    guestName:[reservationValue?.guestName,[Validators.required,Validators.maxLength(30),Validators.minLength(2)]],
    guestEmail:[reservationValue?.guestEmail,[Validators.required,Validators.email]],
    checkInDate:[reservationValue?.checkInDate,Validators.required],
    checkOutDate:[reservationValue?.checkOutDate,Validators.required],
    roomNumber:[reservationValue?.roomNumber,Validators.required]
   });
  }
else{
  this.reservationForm=this.formBuilder.group({
    guestName:['',[Validators.required,Validators.maxLength(30),Validators.minLength(2)]],
    guestEmail:['',[Validators.required,Validators.email]],
    checkInDate:['',Validators.required],
    checkOutDate:['',Validators.required],
    roomNumber:['',Validators.required]
   });
}


  }

AddNewReservation() {

  if(this.reservationForm.valid){
 

    if(this.guestIdValue != undefined && this.guestIdValue?.length)
    {
   //Edit the form
     
   this.reservationSrc.updateReservation(this.reservationForm.value,this.guestIdValue);
    }
    else{
      //Add New
 
      let guid :string= Guid.create().toString();  
  
 let reservationNew :Reservation = this.reservationForm.value;
      reservationNew.guestId=guid;
      this.reservationSrc.addReservation(reservationNew);

    }
    
this.router.navigateByUrl("list");

      }
  
  
}


}
