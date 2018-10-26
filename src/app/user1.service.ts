import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class User1Service {

  private uri: string="http://localhost:8080/api/createUser";
  private httpheader={headers: new HttpHeaders({'Content-Type':'application/json'})}

  constructor(private _http:HttpClient){}

  createUser1(user){

    return this._http.post(this.uri, user, this.httpheader);
  }
}
