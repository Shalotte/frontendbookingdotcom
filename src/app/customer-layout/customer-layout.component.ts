import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { first } from 'rxjs/operators';
import {User} from '../user';
import {Listproperty} from '../listproperty';
import { Destination } from '../destination';
import { DestinationService } from '../shared_services/destination.service';
import { Router } from '../../../node_modules/@angular/router';
import { isNull } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss']
})
export class CustomerLayoutComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  myDateValue: Date;
  user: User;
 
 
  private destination:Destination;

  constructor(private _destination:DestinationService,private router:Router) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.datePickerConfig = Object.assign({},{containerClass: 'theme-dark-blue'});
  }

  
  ngOnInit() {}

  searchDestination(destination:string, rooms:number,guests:number){

    console.log("Inputs==",destination, rooms,guests);
      this._destination.search_Destination(destination,rooms,guests).subscribe(results=>
        { this.destination = results;
          console.log("search results++",this.destination);
          this._destination.saveResults(this.destination);
          
          if(Object.keys(this.destination).length==0){
            alert('Oops destination not found!!');
            this.router.navigate(['/custlayout'])
            
          } 
          if(Object.keys(this.destination).length>0){this.router.navigate(['/foundProperty']);}
       
        });
      
    }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }


  
  
    

}



