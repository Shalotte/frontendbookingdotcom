import { Component, OnInit } from '@angular/core';
import {DestinationService} from '../shared_services/destination.service'
import {Router} from '@angular/router';
import {Destination} from '../destination';
import {Listproperty} from '../listproperty';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

private destination: Destination[];
province: string;
city: string;
check_in_date: Date;
check_out_date: Date;
rooms: number;
adults: number;
children: number;
listproperty: Listproperty;

constructor(private destinationService:DestinationService, private router:Router) { 
this.listproperty = JSON.parse(localStorage.getItem('property'));
console.log(this.listproperty);

  
}

ngOnInit() {
this.province;
this.city;
this.check_in_date;
this.check_out_date;
this.rooms;
this.adults;
this.children;
}

/*SearchDestination(){
this.destinationService.searchDestination(this.province,this.city,this.check_in_date,this.check_out_date,
this.rooms,this.adults,this.children).subscribe(destination => this.destination=destination);
}
  
onSubmit() {
this.SearchDestination();
}*/



}
