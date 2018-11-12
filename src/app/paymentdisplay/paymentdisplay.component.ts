import { Component, OnInit } from '@angular/core';
import {Payment} from '../payment';
import {User} from '../user';
import { PaymentService } from '../shared_services/payment.service';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../shared_services/user.service';

@Component({
  selector: 'app-paymentdisplay',
  templateUrl: './paymentdisplay.component.html',
  styleUrls: ['./paymentdisplay.component.scss']
})
export class PaymentdisplayComponent implements OnInit {
  
public payment: Payment[];
private user: User;
constructor(private paymentservice: PaymentService, private router:Router,
private userService:UserService) {
this.user = JSON.parse(localStorage.getItem('user'));
}

ngOnInit() {

if(this.user==null){
alert('You are not logged in, please log in!');
this.router.navigate(['/header_layout'])
location.reload();
}

this.getPayment();
}

getPayment(){
this.paymentservice.getPayment(this.user.id).subscribe((data: any)=>{console.log(data);
this.payment=data;
console.log(this.payment);
},
(error)=>{console.log(error)})
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
  this.router.navigate(['/payment_display']);
  
  }
  }
  )
  }


logOut(){
this.userService.logout();
this.router.navigate(['/header_layout'])
location.reload();
}

}
