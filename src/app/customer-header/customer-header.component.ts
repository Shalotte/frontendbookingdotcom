import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../shared_services/user.service';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.scss']
})
export class CustomerHeaderComponent implements OnInit {
user: User;

constructor(private userService:UserService, private router: Router) { 
this.user = JSON.parse(localStorage.getItem('user'));
}

ngOnInit() {
this.logOut;
}

logOut(){
this.userService.logout();
this.router.navigate(['/header_layout'])
location.reload();
}
  

}
