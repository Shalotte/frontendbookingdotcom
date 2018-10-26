import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '../../../node_modules/@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../shared_services/user.service';
import { first } from 'rxjs/operators';
import {User} from '../user';
import { AlertService} from '../shared_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
submitted = false; 
loginForm: FormGroup;
private user: User;
//private users: User[];
loading = false;
email: String;
username: String;
invalidLogin: boolean;

constructor(private formBuilder: FormBuilder,
  private userService:UserService, 
  private router: Router,
  private alertService: AlertService){}

ngOnInit() {

this.loginForm = this.formBuilder.group({
email: ['', Validators.required],
password: ['', Validators.required]
}
)
;
}


/*get f() { return this.loginForm.controls; }

onSubmit() {

this.submitted = true;

// stop here if form is invalid
if (this.loginForm.invalid) {
return;
}

this.userService.login(this.f.email.value, this.f.password.value).subscribe(user=> this.user=user ,error => {
this.alertService.error(error);
this.loading = false;
}, 
() => this.loginauth()
);


}

loginauth(){


localStorage.setItem('user', JSON.stringify(this.user));

if (this.user.email && this.user.password && this.user.type=='admin'){
alert('Login Successful')
this.router.navigate(['']);
}


if (this.user.email && this.user.password && this.user.type=='customer'){
alert('Login Successful') 
this.router.navigate(['/custlayout']);
} 
else{
  alert("Invalid Login")
  this.loading = false;
  }
}*/



}







  

