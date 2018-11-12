import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../shared_services/payment.service';
import { Payment } from '../payment';
import { Router } from '../../../node_modules/@angular/router';
import {User} from '../user';
import { Customerdetails } from '../customerdetails';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  private user: User;
  private customerdetails: Customerdetails;
  private payment = new Payment();
  public bodyText: string;
  public paymentError = new Payment();
  public isCreated: boolean= false;
  public paymentExist: boolean=false;

  constructor(private paymentService:PaymentService, private _router: Router) {
  this.user = JSON.parse(localStorage.getItem('user'));
  this.customerdetails = JSON.parse(localStorage.getItem('customerDetails'));
  console.log(this.customerdetails);
  }

  ngOnInit() {
  }
 createPayment(){
   this.paymentService.createPayment(this.user.id, this.customerdetails.id,this.payment).subscribe((data)=>{
  console.log(data);
  this.payment= new Payment();
  this.isCreated=true;
  this.paymentExist=false;
  this.paymentError= new Payment();

  if(this.isCreated=true){
    alert('You have successfully made your payment')
    this._router.navigate(['payment_display']);
  }
   },
   (error)=>{
     
     this.paymentError=error.error;
     this.isCreated= false;
     
     if(error.status==409){
     this.isCreated= false;
     this.paymentExist=true;
   }}
)
 }
}
