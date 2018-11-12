import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../shared_services/user.service';
import {User} from '../../user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})

export class ListuserComponent implements OnInit {
  private user1: User;
  private user: User[];
  email: String; 
  id: String;

constructor(private _userService: UserService, private _router: Router) { 
  this.user1 = JSON.parse(localStorage.getItem('user'));
}

ngOnInit() {

  if(this.user1==null){
    alert('You are not logged in, please log in!');
    this._router.navigate(['/header_layout'])
    location.reload();
    }
  this.getUser();
  this.email;
  this.id;
}

getUser() { 
    this._userService.getUsers().subscribe((user)=>
    {console.log(user);
    this.user=user;
    },
    (error)=>{console.log(error);}
  )}
  
    
updateUser(user){
this._userService.setter(user);
this._router.navigate(['/userform']);
}

newUser(){
let user =new User();
this._userService.setter(user);
this._router.navigate(['/userform']);
}

deleteUser(user){
this._userService.deleteUser(user.id).subscribe((data)=>{
this.user.splice(this.user.indexOf(user),1);
location.reload();
},(error)=>{console.log(error);


  if(error){
  alert('User has been successfully deleted');
  this._router.navigate(['/listusers']);
  location.reload();
  
  }
});
}


logOut(){
  this._userService.logout();
  this._router.navigate(['/header_layout'])
  location.reload();
  }

SearchUser(){
this._userService.searchUser(this.email).subscribe(user => this.user=user);}

onSubmit() {
this.SearchUser();
}

}
  
  
