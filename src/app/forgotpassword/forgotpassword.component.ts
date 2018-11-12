import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared_services/user.service';
import {User} from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  private user: User;
  constructor(private userService: UserService, private _router:Router,
  
  ) { 
  }

  ngOnInit() {
  }

  forgotPassword(email: string){
    this.userService.forgotPassword(email).subscribe((data)=>{console.log(data);
    this.user=data;
    alert('Click ok to reset password.');
    this.userService.setter(this.user);
    this._router.navigate(['/userform']);
    },
    (error)=>{console.log(error);
    if(error){
    alert('This email does not exists, please register first.');
    this._router.navigate(['/header_layout']);
    }
    })
  }
}
