import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../shared_services/payment.service';
import { Payment } from '../payment';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  private payment = new Payment();
  public bodyText: string;
  public paymentError = new Payment();
  public isCreated: boolean= false;
  public paymentExist: boolean=false;
  constructor(private paymentService:PaymentService, private _router: Router) { }

  ngOnInit() {
  }
 createPayment(){
   this.paymentService.createPayment(this.payment).subscribe((data)=>{
  console.log(data);
  this.payment= new Payment();
  this.isCreated=true;
  this.paymentExist=false;
  this.paymentError= new Payment();

  if(this.isCreated=true){
    alert('You have successfully made your booking')
    this._router.navigate(['listbooking']);
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
