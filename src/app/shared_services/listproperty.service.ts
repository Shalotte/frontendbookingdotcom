import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import {Listproperty } from '../listproperty';
import {User} from '../user';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import { map, filter, switchMap, catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


export class ListpropertyService {

private baseUrl: string ='http://localhost:8080/api';
private httpheader = {headers : new HttpHeaders ({'Content-Type': 'application/json'})};
private headers = new Headers ({'Content-Type': 'application/json'});
private options = new RequestOptions ({headers:this.headers});
private listproperties:Listproperty[];
public listproperty = new Listproperty();
public user = new User();


constructor(private _http:HttpClient, private http:Http) { 

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


search_Destination(listproperties: string, rooms: number, guests: number){
  return this.http.get(this.baseUrl+'/search/property/'+listproperties+'/'+guests+'/'+ rooms, this.options).pipe(map((response: Response) => response.json()))
}

  

setter(listproperty){
  this.listproperty  = listproperty ;
}

getter(){
return this.listproperty;
}

showResults(){
  return this.listproperties;
  }

  saveResults(listproperties)
{
  this.listproperties = listproperties;
}

}



