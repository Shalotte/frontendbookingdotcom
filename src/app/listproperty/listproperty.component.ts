import { Component, OnInit } from '@angular/core';
import {Listproperty} from '../listproperty';
import {ListpropertyService} from '../shared_services/listproperty.service';
import {Router} from '@angular/router';
import {User} from '../user';
import { UserService } from '../shared_services/user.service';


@Component({
  selector: 'app-listproperty',
  templateUrl: './listproperty.component.html',
  styleUrls: ['./listproperty.component.scss']
})


export class ListpropertyComponent implements OnInit {

  
public bodyText: string;
Imageurl: string="/assets/defaultimageholder/defaultimageholder.PNG"
public temp: string;
public listpError = new Listproperty();
public isCreated: boolean= false;
public isLoggedIn: boolean= false;
public listpExist: boolean=false;
submitted = false; 
loading = false;
username: String;
email: String;
password: String;
private listproperty = new Listproperty();
private user: User;
id: number;
private property: Listproperty;
private properties: Listproperty[];


constructor(private _listpropertyService: ListpropertyService, private _router: Router,
private userService: UserService) {
this.user = JSON.parse(localStorage.getItem('user'));
}
 
ngOnInit() {
if(this.user==null){
alert('You are not logged in, please log in.');
this._router.navigate(['/header_layout'])
}
}



processProperty(){
  this.listproperty.pic=this.temp.valueOf();

this._listpropertyService.createProperty(this.user.id,this.listproperty).
subscribe(data =>{console.log(data);
this.listproperty= new Listproperty();
this.isCreated=true;
this.listpExist=false;
this.listpError= new Listproperty();
  
if(this.isCreated=true){
alert('You have successfully listed your property.')
this._router.navigate(['/listpropertydisplay']);
}
}, 
error=>{
  
this.listpError=error.error;
this.isCreated= false;
    
if(error.status==409){
this.isCreated= false;
this.listpExist=true;
  
if(this.listpExist=true){
alert('Property with this email address already exists.')
}
}
    
console.log(error)
}
);
}

onSelectFile(event){
  let selectedImage=event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(selectedImage);
  reader.onload = (event:any)=>{
    this.Imageurl= event.target.result;
    this.temp= reader.result.split(";base64,")[1];
    console.log("Image",this.Imageurl);
  }
}

logOut(){
this.userService.logout();
this._router.navigate(['/header_layout'])
location.reload();
}

}
