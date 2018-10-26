import { Injectable } from '@angular/core';
import {Payment} from '../payment';
import {Customerdetails} from '../customerdetails';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { map, filter, switchMap, catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl: string ='http://localhost:8080/api';
  private headers = new Headers ({'Content-Type': 'application/json'});
  private httpheader={headers: new HttpHeaders({'Content-Type':'application/json'})}
  private options = new RequestOptions ({headers:this.headers});
  private payment= new Payment();

  constructor(private _http:Http, private _http1:HttpClient) { }

  createPayment(payment: Payment){
   return this._http1.post(this.baseUrl+'/createPayment',payment, this.httpheader)
  }
}
