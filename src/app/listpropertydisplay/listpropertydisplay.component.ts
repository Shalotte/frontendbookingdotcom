import { Component, OnInit } from '@angular/core';
import {Listproperty} from '../listproperty';
import {ListpropertyService} from '../shared_services/listproperty.service';
import {Router} from '@angular/router';
import {User} from '../user';
import {UserService} from '../shared_services/user.service';


@Component({
  selector: 'app-listpropertydisplay',
  templateUrl: './listpropertydisplay.component.html',
  styleUrls: ['./listpropertydisplay.component.scss']
})
export class ListpropertydisplayComponent implements OnInit {

private user: User;
id: string;
public property: Listproperty;
public properties: Listproperty[];

constructor(private _listpropertyService: ListpropertyService, 
private userService:UserService,private _router: Router) {
this.user = JSON.parse(localStorage.getItem('user'));
}

ngOnInit() {

if(this.user==null){
alert('You are not logged in, please log in!');
this._router.navigate(['/header_layout'])
location.reload();
}

this._listpropertyService.getProperty(this.user.id).subscribe(
(properties: any )=>{
this.properties=properties;
},(error)=>{
console.log(error);
}
)
}

updateProperties(properties){
this._listpropertyService.setter(properties);
console.log(properties);
this._router.navigate(['/update_property']);
}

deleteProperty(properties){
this._listpropertyService.deleteProperty(properties.id).subscribe((data)=>{ 
console.log(data);
},(error)=>{

console.log(error);
location.reload();
if(error){
alert('Property has been successfully deleted');
this._router.navigate(['/listpropertydisplay']);

}
}
)
}

logOut(){
this.userService.logout();
this._router.navigate(['/header_layout'])
location.reload();
}

}




