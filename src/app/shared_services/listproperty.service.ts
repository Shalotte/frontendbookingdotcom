import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, filter, switchMap, catchError} from 'rxjs/operators';
import{Observable} from 'rxjs';
import {Listproperty } from '../listproperty';
import {User} from '../user';



@Injectable({
  providedIn: 'root'
})


export class ListpropertyService {

private baseUrl: string ='http://localhost:8080/appi';
private httpheader = {headers : new HttpHeaders ({'Content-Type': 'application/json'})};
public listproperty = new Listproperty();
public user = new User();


constructor(private _http:HttpClient) { 

}

createProperty(id:number,listproperty ){
return this._http.post(this.baseUrl+'/createProperty/'+id,listproperty, this.httpheader);
}

deleteProperty(id: string){
  return this._http.delete(this.baseUrl+'/delete/property/'+ id,this.httpheader);
}

getProperty(id:number){
  return this._http.get(this.baseUrl+'/userProperty/'+id, this.httpheader);
 
}

updateProperty(id:number,listproperty:Listproperty){
  return this._http.put(this.baseUrl+'/update/property'+'/'+id,JSON.stringify(listproperty), this.httpheader);
}


setter(listproperty :Listproperty){
  this.listproperty  = listproperty ;
}

getter(){
return this.listproperty;
}

}



