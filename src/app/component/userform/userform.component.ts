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
if(this.user.id==undefined){
this._userService.createUser(this.user).subscribe((user)=>{
console.log(user);
this._router.navigate(['/listusers']);
},(error)=>{
console.log(error);
});
}

else
{
this._userService.updateUser(this.user).subscribe((user)=>{
console.log(user);
this._router.navigate(['/listusers']);
},(error)=>{
console.log(error);
});
}


this._userService.getUsers();
this._router.navigate(['/listusers'])
}

}
