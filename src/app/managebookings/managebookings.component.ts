import { Component, OnInit } from '@angular/core';
import {Customerdetails} from './../customerdetails';
import {AdminService} from '../shared_services/Admin.service';
import { UserService } from '../shared_services/user.service';
import { Router } from '../../../node_modules/@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-managebookings',
  templateUrl: './managebookings.component.html',
  styleUrls: ['./managebookings.component.scss']
})
export class ManagebookingsComponent implements OnInit {
  public customerdetails: Customerdetails[];
  private user: User;
  constructor(private adminService: AdminService, private userService:UserService,
   private router: Router) { 
    this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() {

    if(this.user==null){
      alert('You are not logged in, please log in!');
      this.router.navigate(['/header_layout'])
      location.reload();
      }

    this.getBookings();
  }


  getBookings() { 
    this.adminService.getBookings().subscribe((customerdetails)=>
    {console.log(customerdetails);
    this.customerdetails=customerdetails;
    },
    (error)=>{console.log(error);}
  )}

  deleteBooking(customerdetails){
    this.adminService.deleteBooking(customerdetails.id).subscribe((data)=>{
    this.customerdetails.splice(this.customerdetails.indexOf(customerdetails),1);
    location.reload();
    },(error)=>{console.log(error);
      location.reload();
      if(error){
      alert('Booking has been successfully deleted');
      this.router.navigate(['/managebookings']);
      
      }
    });
    }

    logOut(){
      this.userService.logout();
      this.router.navigate(['/header_layout'])
      location.reload();
      }
}
