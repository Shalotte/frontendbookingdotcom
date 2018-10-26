import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent implements OnInit {
   user: User;

  
  constructor() { 
    this.user = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit() {
  }

}
