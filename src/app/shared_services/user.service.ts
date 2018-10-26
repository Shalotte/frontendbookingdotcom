import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, filter, switchMap, catchError} from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/throw';
import{Observable} from 'rxjs';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private baseUrl: string ='http://localhost:8080/api';
private headers = new Headers ({'Content-Type': 'application/json'});
private httpheader={headers: new HttpHeaders({'Content-Type':'application/json'})}
private options = new RequestOptions ({headers:this.headers});
private user= new User();

constructor(private _http:Http, private _http1:HttpClient) { }



getUsers(){
  return this._http.get(this.baseUrl+'/users',this.options).pipe(map((response: any) => response.json()));
  }

getUser(id: string){
  return this._http.get(this.baseUrl+'/users'+ id,this.options).pipe(map((response: any) => response.json()));
}



deleteUser(id: string){
    return this._http.delete(this.baseUrl+'/users/delete/'+ id,this.options).pipe(map((response: any) => response.json()));
}

createUser(user:User){
return this._http.post(this.baseUrl+'/createUser',JSON.stringify(user), this.options ).pipe(map((response: Response) => response.json()));
}

createUser1(user){

  return this._http1.post(this.baseUrl + '/createUser', user, this.httpheader);
}

updateUser(user:User){
    return this._http.put(this.baseUrl+'/update',JSON.stringify(user), this.options ).pipe(map((response: any) => response.json()));
}

searchUser(email: String){
  return this._http.get(this.baseUrl+'/users/'+email, this.options).pipe(map((response: any) => response.json()));
}

/*login(email: string, password: string)  { 
  return this._http1.get(this.baseUrl+'/users/login/'+ email +'/'+ password, this.httpheader);
  
  }*/


login(email: string, password: string)  { 
return this._http.get(this.baseUrl+'/users/login/'+ email +'/'+ password, this.options).pipe(map((response: any) => response.json()));

}


setter(user:User){
  this.user = user;
}

getter(){
return this.user;
}
  }


 