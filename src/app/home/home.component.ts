import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Destination } from '../destination';
import { DestinationService } from '../shared_services/destination.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  myDateValue: Date;

  private destination:Destination;
  constructor(private _destination:DestinationService,private router:Router) {

    this.datePickerConfig = Object.assign({},{containerClass: 'theme-dark-blue'});
   }

  ngOnInit() {
    this.myDateValue = new Date();
  }


  searchDestination(destination:string, rooms:number,guests:number){

    console.log("Inputs==",destination, rooms,guests);
      this._destination.search_Destination(destination,rooms,guests).subscribe(results=>
        {
          console.log("search results++ JSON",results);
          this.destination = results;
          this.router.navigate(['foundProperty']);
        });
       this._destination.saveResults(this.destination);

    }
    
  onDateChange(newDate: Date) {
    console.log(newDate);
  }

}
