import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { BookingService } from '../shared_services/booking.service';
import { Customerdetails } from '../customerdetails';
import {Router} from '@angular/router';

@Component({
  selector: 'bookingdetails',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  user: User;
  private customerDetails= new Customerdetails();
  public bodyText: string;
  public bookingError = new User();
  public isCreated: boolean= false;
  public bookingExist: boolean=false;
 
  constructor(private bookingService:BookingService, private _router: Router) { 
  this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }
  
  createBooking(){
    this.bookingService.createBooking(this.customerDetails).subscribe((data)=>{
    console.log(data)
    this.customerDetails= new Customerdetails();
    this.isCreated=true;
    this.bookingExist=false;
    this.bookingError= new User();

    if(this.isCreated=true){
    this._router.navigate(['payment']);
    }
    },
    (error)=>{
      this.bookingError=error.error;
      this.isCreated= false;
      
      if(error.status==409){
      this.isCreated= false;
      this.bookingExist=true;   
    }}
  )
  

}
}