import { Component, OnInit } from '@angular/core';
import {Listproperty} from '../listproperty';
import {ListpropertyService} from '../shared_services/listproperty.service';
import {Router} from '@angular/router';
import {User} from '../user';
import {UserService} from '../shared_services/user.service';
import { NgAnalyzeModulesHost } from '../../../node_modules/@angular/compiler';


@Component({
  selector: 'app-listpropertydisplay',
  templateUrl: './listpropertydisplay.component.html',
  styleUrls: ['./listpropertydisplay.component.scss']
})
export class ListpropertydisplayComponent implements OnInit {

//private listproperty = new Listproperty();
private user: User;
id: string;
private property: Listproperty;
public properties: Listproperty[];

constructor(private _listpropertyService: ListpropertyService, private _router: Router) {
  this.user = JSON.parse(localStorage.getItem('user'));
}

ngOnInit() {
  //this.listproperty = this._listpropertyService.getter();
  this._listpropertyService.getProperty(this.user.id).subscribe(
    (properties: any )=>{console.log(properties);
      this.properties=properties;
    },(error)=>{
      console.log(error);
    }
  )
  }

  deleteProperty(properties){
    this._listpropertyService.deleteProperty(properties.id).subscribe((data)=>{
      //this.properties.splice(this.properties.indexOf(properties,1));
      console.log(data);
      
    },(error)=>{console.log(error);
   
       location.reload();
       if(error){
       alert('Property has been successfully deleted');
       this._router.navigate(['/listpropertydisplay']);
  }
  }
  )
  }

 

    updateProperty(property){
      this._listpropertyService.setter(property);
      this._router.navigate(['/listproperty']);
      }
      
    
  


}




