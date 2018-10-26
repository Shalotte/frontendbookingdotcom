import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, filter, switchMap, catchError} from 'rxjs/operators';
import {Destination} from '../destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {


private baseUrl: string ='http://localhost:8080/api';
private headers = new Headers ({'Content-Type': 'application/json'});
private httpheader={headers: new HttpHeaders({'Content-Type':'application/json'})}
private options = new RequestOptions ({headers:this.headers});
private destination:Destination[];


constructor(private _http:Http) { }

saveResults(destination)
{
  this.destination = destination;
}

showResults()
{
  return this.destination;
}

search_Destination(destination: string, rooms: number, guests: number){
  return this._http.get(this.baseUrl+'/search/destination/'+destination+'/'+guests+'/'+
'/'+ rooms, this.options).pipe(map((response: Response) => response.json()))
}

  
}
