import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.css']
})
export class NewReservationComponent implements OnInit {
reservationForm :FormGroup=new FormGroup({});

constructor(private formBuilder :FormBuilder){}
  
ngOnInit(): void {
 this.reservationForm=this.formBuilder.group({
  guestName:['',[Validators.required,Validators.maxLength(30),Validators.minLength(2)]],
  guestEmail:['',[Validators.required,Validators.email]],
  checkInDate:['',Validators.required],
  checkOutDate:['',Validators.required],
  roomNumber:['',Validators.required]
 });

  }

AddNewReservation() {
  console.log(this.reservationForm.getRawValue()); 
}
}
