import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-listbookings',
  templateUrl: './listbookings.component.html',
  styleUrls: ['./listbookings.component.scss']
})
export class ListbookingsComponent implements OnInit {
  user: User;
  constructor() { 
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

}
