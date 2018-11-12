import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {User} from '../user';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../shared_services/user.service';
import {Listproperty} from '../listproperty';
import { ListpropertyService } from '../shared_services/listproperty.service';

@Component({
  selector: 'app-admincomponent',
  templateUrl: './admincomponent.component.html',
  styleUrls: ['./admincomponent.component.scss']
})
export class AdmincomponentComponent implements OnInit {

datePickerConfig: Partial<BsDatepickerConfig>;
myDateValue: Date;
user: User;
private listproperty:Listproperty;

constructor(private _listpropertyService:ListpropertyService,
  private router: Router, private userServive: UserService) { 
this.user = JSON.parse(localStorage.getItem('user'));
this.datePickerConfig = Object.assign({},{containerClass: 'theme-dark-blue'});
}

ngOnInit() {
if(this.user==null){
alert('You are not logged in, please log in!');
this.router.navigate(['/header_layout'])
location.reload();
}
}


searchDestination(destination:string, rooms:number,guests:number){

  console.log("Inputs==",destination, rooms,guests);
    this._listpropertyService.search_Destination(destination,rooms,guests).subscribe(results=>
      {
        console.log("search results++ JSON",results);
        this.listproperty = results;
        this.router.navigate(['foundProperty']);
        this._listpropertyService.saveResults(this.listproperty);
          
if(Object.keys(this.listproperty).length==0){
alert('Oops property to book in this range not found!!');
this.router.navigate(['/custlayout']) 
} 
if(Object.keys(this.listproperty).length>0){this.router.navigate(['/foundProperty']);}
});
      
   

  }

logOut(){
this.userServive.logout();
this.router.navigate(['/header_layout'])
location.reload();
}

}
