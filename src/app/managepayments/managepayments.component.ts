import { Component, OnInit } from '@angular/core';
import {Payment} from './../payment';
import {AdminService} from '../shared_services/Admin.service';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../shared_services/user.service';
import {User} from '../user';
import { PaymentService } from '../shared_services/payment.service';


@Component({
  selector: 'app-managepayments',
  templateUrl: './managepayments.component.html',
  styleUrls: ['./managepayments.component.scss']
})
export class ManagepaymentsComponent implements OnInit {
  public user: User;
  public payment: Payment[];
  constructor(private adminService: AdminService, private userService:UserService, 
    private router: Router,private paymentservice: PaymentService) { 
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    if(this.user==null){
      alert('You are not logged in, please log in!');
      this.router.navigate(['/header_layout'])
      location.reload();
      }

  
  this.getPayments();
  }

  deletePayment(payment){
    this.paymentservice.deletePayment(payment.id).subscribe((data)=>{  
      this.payment.splice(this.payment.indexOf(payment),1); 
      console.log(data);
      },(error)=>{
      
      console.log(error);
      location.reload();
      if(error){
      alert('Payment has been successfully deleted');
      this.router.navigate(['/managepayments']);
      
      }

      
      }
      )
      }

  getPayments() { 
    this.adminService.getPayments().subscribe((payment)=>
    {console.log(payment);
    this.payment=payment;
    },
    (error)=>{console.log(error);}
  )}

  logOut(){
    this.userService.logout();
    this.router.navigate(['/header_layout'])
    location.reload();
    }

}
