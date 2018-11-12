import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../shared_services/user.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})

export class UserformComponent implements OnInit {
private user: User;

constructor(private _userService: UserService, private _router:Router) { }

ngOnInit() {
this.user = this._userService.getter();
}
  
processForm(){
this._userService.updateUser(this.user).subscribe((user)=>{
console.log(user);
alert('Your password has been successfully reset, you can now log in.');
this._router.navigate(['/header_layout']);
location.reload();
},(error)=>{
console.log(error);
});
}




}
