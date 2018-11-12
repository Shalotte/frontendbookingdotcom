import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Router } from '../../../node_modules/@angular/router';
import {User} from '../user';
import {Listproperty} from '../listproperty';
import { ListpropertyService } from '../shared_services/listproperty.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  myDateValue: Date;
  public user: User;
  private listproperty:Listproperty;
  constructor(private _listpropertyService:ListpropertyService,private router:Router) {
  this.datePickerConfig = Object.assign({},{containerClass: 'theme-dark-blue',
  showWeekNumbers:false,
  minDate: new Date(),
  maxDate: new Date(2018,11,31),
  });
  this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() {

    if(this.user!=null && this.user.type=='admin'){
      this.router.navigate(['/admin'])
      location.reload();
      }

      if(this.user!=null && this.user.type=='customer'){
        this.router.navigate(['/custlayout'])
        location.reload();
        }
    this.myDateValue = new Date();
  }


  searchDestination(destination:string, rooms:number,guests:number){

    console.log("Inputs==",destination, rooms,guests);
      this._listpropertyService.search_Destination(destination,rooms,guests).subscribe(results=>
        {
          console.log("search results++ JSON",results);
          this.listproperty = results;
          this.router.navigate(['homesearch']);
          this._listpropertyService.saveResults(this.listproperty);
          if(Object.keys(this.listproperty).length==0){
            alert('Oops property to book in this range not found!!');
            this.router.navigate(['/header_layout']) 
            } 
            if(Object.keys(this.listproperty).length>0){this.router.navigate(['/homesearch']);}



        });
     

    }
    
  onDateChange(newDate: Date) {
    console.log(newDate);
  }

}
