import { Component, OnInit } from '@angular/core';
import {Listproperty} from '../listproperty';
import {ListpropertyService} from '../shared_services/listproperty.service';
import {Router} from '@angular/router';
import {User} from '../user';


@Component({
  selector: 'app-listproperty',
  templateUrl: './listproperty.component.html',
  styleUrls: ['./listproperty.component.scss']
})


export class ListpropertyComponent implements OnInit {

  
  public bodyText: string;
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


constructor(private _listpropertyService: ListpropertyService, private _router: Router) {
  this.user = JSON.parse(localStorage.getItem('user'));
}
 
ngOnInit() {
}



  processProperty(){

    if(this.user.id==undefined){
  this._listpropertyService.createProperty(this.user.id,this.listproperty).
  subscribe(data =>{console.log(data);
  this.listproperty= new Listproperty();
  this.isCreated=true;
  this.listpExist=false;
  this.listpError= new Listproperty();
  
  if(this.isCreated=true){
  alert('You have successfully listed your proprty.')
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
      alert('User with this email address already exists.')
      }
    }
    
  console.log(error)
  }
  );
  }
else{
  this._listpropertyService.updateProperty(this.user.id,this.property).subscribe((property)=>{
    console.log(property);
    this._router.navigate(['/listpropertydisplay']);
    },(error)=>{
    console.log(error);
    });

}

this._listpropertyService.getProperty(this.user.id);
this._router.navigate(['/listpropertydisplay'])
}
}
