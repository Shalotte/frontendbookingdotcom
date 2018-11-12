import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {BookingService} from '../shared_services/booking.service';
import {Customerdetails} from '../customerdetails';
import { Router } from '@angular/router';
import {UserService} from '../shared_services/user.service';

@Component({
  selector: 'app-listbookings',
  templateUrl: './listbookings.component.html',
  styleUrls: ['./listbookings.component.scss']
})
export class ListbookingsComponent implements OnInit {
  
user: User;
public customerdetails: Customerdetails[];
constructor(private bookingService:BookingService, 
private userService: UserService, private _router: Router) { 
this.user = JSON.parse(localStorage.getItem('user'));
}

ngOnInit() {

if(this.user==null){
alert('You are not logged in, please log in!');
this._router.navigate(['/header_layout'])
location.reload();
}
this.bookingService.getBooking(this.user.id).subscribe((data: any)=>{console.log(data);
this.customerdetails=data;
}
,(error)=>{console.log(error)})
}

updateUser(customerdetails){
this.bookingService.setter(customerdetails);
this._router.navigate(['/update_booking']);
}

deleteBooking(customerdetails){
this.bookingService.deleteBooking(customerdetails.id).subscribe((data)=>{console.log(data)},
(error)=>{console.log(error);
location.reload();
if(error){
alert('Your booking has been successfully deleted');
this._router.navigate(['/listbooking']);
}})
}

logOut(){
this.userService.logout();
this._router.navigate(['/header_layout'])
location.reload();
}
}
