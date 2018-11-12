import { Injectable } from '@angular/core';
import {Payment} from '../payment';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl: string ='http://localhost:8080/api';
  private headers = new Headers ({'Content-Type': 'application/json'});
  private httpheader={headers: new HttpHeaders({'Content-Type':'application/json'})}
  private options = new RequestOptions ({headers:this.headers});

  constructor(private _http:Http, private _http1:HttpClient) { }

  createPayment(id:number,id1:string,payment: Payment){
   return this._http1.post(this.baseUrl+'/createPayment/'+id+'/'+id1,payment, this.httpheader)
  }

  getPayment(id:number){
    return this._http1.get(this.baseUrl+'/userPaymentbyId/'+id, this.httpheader)
  }

  deletePayment(id:number){
    return this._http1.delete(this.baseUrl+'/delete/paymentById/'+id, this.httpheader)
  }
}
