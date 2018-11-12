import { Injectable } from '@angular/core';
import {Payment} from '../payment';
import {Customerdetails} from '../customerdetails';
import {Listproperty} from '../listproperty';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { map, filter, switchMap, catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl: string ='http://localhost:8080/api';
  private headers = new Headers ({'Content-Type': 'application/json'});
  private httpheader={headers: new HttpHeaders({'Content-Type':'application/json'})}
  private options = new RequestOptions ({headers:this.headers});
  public customerdetails= new Customerdetails();
  private customerdetailss:Customerdetails[];
  public listproperty= new Listproperty();
  public user = new User();
  
constructor(private _http:Http, private _http1:HttpClient) { 
}

createBooking(id: number, id1: string,customerdetails){
return this._http1.post(this.baseUrl+'/createBooking/'+id+'/'+id1,customerdetails, this.httpheader);
}

getBooking(id:number){
  return this._http1.get(this.baseUrl+'/booking/'+id, this.httpheader)
}

deleteBooking(id:number){
  return this._http1.delete(this.baseUrl+'/delete/booking/'+id, this.httpheader)
}

updateBooking(id: number, id1:string, customerdetails){
  return this._http1.put(this.baseUrl+'/update/booking/'+id+'/'+id1,customerdetails, this.httpheader);
}

setter(customerdetails){
  this.customerdetails  = customerdetails ;
}

getter(){
return this.customerdetails;
}
}
