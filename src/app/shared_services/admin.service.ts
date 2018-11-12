import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, filter, switchMap, catchError} from 'rxjs/operators';
import{Observable} from 'rxjs';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string ='http://localhost:8080/api';
  private headers = new Headers ({'Content-Type': 'application/json'});
  private httpheader={headers: new HttpHeaders({'Content-Type':'application/json'})}
  private options = new RequestOptions ({headers:this.headers});
  
  constructor(private _http:Http, private _http1:HttpClient) { }

  
getProperties(){
return this._http.get(this.baseUrl+'/all/properties',this.options).pipe(map((response: any) => response.json()));
}
  
getBookings(){
return this._http.get(this.baseUrl+'/all/bookings',this.options).pipe(map((response: any) => response.json()));
}

getPayments(){
  return this._http.get(this.baseUrl+'/payments',this.options).pipe(map((response: any) => response.json()));
  }

deleteBooking(id: string){
return this._http.delete(this.baseUrl+'/delete/booking/'+ id,this.options).pipe(map((response: any) => response.json()));
}

}

