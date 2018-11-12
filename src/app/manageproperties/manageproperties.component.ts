import { Component, OnInit } from '@angular/core';
import {Listproperty} from './../listproperty';
import {AdminService} from '../shared_services/Admin.service';
import {ListpropertyService} from '../shared_services/listproperty.service';
import { UserService } from '../shared_services/user.service';
import { Router } from '../../../node_modules/@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-manageproperties',
  templateUrl: './manageproperties.component.html',
  styleUrls: ['./manageproperties.component.scss']
})
export class ManagepropertiesComponent implements OnInit {

  public listproperty: Listproperty[];
  private user: User;
  constructor( private adminService:AdminService,private userService:UserService,
    private router: Router,private _listpropertyService: ListpropertyService) { 
      this.user = JSON.parse(localStorage.getItem('user'));
    }

  ngOnInit() {

    if(this.user==null){
      alert('You are not logged in, please log in!');
      this.router.navigate(['/header_layout'])
      location.reload();
      }

    this.getProperties()
  }

  getProperties() { 
    this.adminService.getProperties().subscribe((listproperty)=>
    {console.log(listproperty);
    this.listproperty=listproperty;
    },
    (error)=>{console.log(error);}
  )}

  deleteProperty(listproperty){
    this._listpropertyService.deleteProperty(listproperty.id).subscribe((data)=>{ 
    console.log(data);
    },(error)=>{
    
    console.log(error);
    location.reload();
    if(error){
    alert('Property has been successfully deleted');
    this.router.navigate(['/manageproperties']);
    
    }
    }
    )
    }

  logOut(){
    this.userService.logout();
    this.router.navigate(['/header_layout'])
    location.reload();
    }

}
