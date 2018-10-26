import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { BookingService } from '../shared_services/booking.service';
import { Customerdetails } from '../customerdetails';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
private customerdetails = new Customerdetails();
user: User;

constructor(private bookingService:BookingService) {
this.user = JSON.parse(localStorage.getItem('user'));
}

ngOnInit() {
}

createBooking(){
this.bookingService.createBooking(this.customerdetails).subscribe((data)=>
{console.log(data)}
)
}

}
