import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import { map, filter, switchMap, catchError} from 'rxjs/operators';
import{Observable} from 'rxjs';

import {User} from '../user'


@Injectable({
  providedIn: 'root'
})
export class UserService {

private baseUrl: string ='http://localhost:8080/api';
private headers = new Headers ({'Content-Type': 'application/json'});
private options = new RequestOptions ({headers:this.headers});
private user= new User();

constructor(private _http:Http) { }



getUsers(){
  return this._http.get(this.baseUrl+'/users',this.options).pipe(map((response: any) => response.json()));
  }

getUser(id: string){
  return this._http.get(this.baseUrl+'/users'+ id,this.options).pipe(map((response: any) => response.json()));
  }

deleteUser(id: string){
    return this._http.delete(this.baseUrl+'/users'+ id,this.options).pipe(map((response: any) => response.json()));
    }

createUser(user:User){
  return this._http.post(this.baseUrl+'/users',JSON.stringify(user) ).pipe(map((response: any) => response.json()));
  }

updateUser(user:User){
    return this._http.put(this.baseUrl+'/users',JSON.stringify(user) ).pipe(map((response: any) => response.json()));
    }



errorHandler(error:Response){
  return Observable.throw(error||"SERVER ERROR");
  }

setter(user:User){
  this.user = user;
}

getter(){
return this.user;
}
  }


 