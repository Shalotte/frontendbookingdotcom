import { Component, OnInit } from '@angular/core';
import { ListpropertyService } from '../shared_services/listproperty.service';
import { Listproperty } from '../listproperty';


@Component({
  selector: 'app-found-destinations',
  templateUrl: './found-destinations.component.html',
  styleUrls: ['./found-destinations.component.scss']
})
export class FoundDestinationsComponent implements OnInit {

  private listproperty:Listproperty[];
  private images:String[]=[];
  constructor(private _listproperty:ListpropertyService) { }

  ngOnInit() {

    this.listproperty = this._listproperty.showResults();
    console.log("search works++",this.listproperty);
    localStorage.setItem('listproperty', JSON.stringify(this.listproperty));
    console.log(this.listproperty);
  }

}
