import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ListpropertyService} from '../shared_services/listproperty.service';
import {Listproperty} from '../listproperty';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.scss']
})


export class UpdatePropertyComponent implements OnInit {
  private user: User;
  private listproperty = new Listproperty();


  constructor(private listpropertyService:ListpropertyService, private _router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user)
   }

  ngOnInit() {
    this.listproperty = this.listpropertyService.getter();
  }

  processProperty(){
  this.listpropertyService.updateProperty(this.user.id,this.listproperty).subscribe((listproperty)=>{
    console.log(listproperty);
    this._router.navigate(['/listpropertydisplay']);
    },(error)=>{
    console.log(error);
    });
  }

}
