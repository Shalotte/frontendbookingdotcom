import { Component,ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import {UserService} from '../shared_services/user.service';
import {User} from '../user';
import {Router} from '@angular/router';
import { ModalService} from '../modal.service';
import { FormBuilder, FormControl,FormGroup, Validators } from '../../../node_modules/@angular/forms';



  @Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
  })
  export class HeaderComponent implements OnInit {

  private user = new User(); 
  id: String;
  public bodyText: string;
  public userError = new User();
  public isCreated: boolean= false;
  public isLoggedIn: boolean= false;
  public userExist: boolean=false;
  submitted = false; 
  loading = false;
  username: String;
  email: String;
  password: String;
  loginForm: FormGroup;
  formdata;

  constructor(private modalService: ModalService ,
  private _userService: UserService, private _router: Router,
  private formBuilder: FormBuilder) { }

  ngOnInit() { 
  this.email;
  this.password;
  this.loginForm = this.formBuilder.group({
  email: ['', Validators.required],
  password: ['', Validators.required]
  }
  )
  ;
  }

  

  createUser1(){

  this._userService.createUser1(this.user).subscribe((data)=>{
  console.log(data);
    
  this.user= new User();
  this.isCreated=true;
  this.userExist=false;
  this.userError= new User();

  if(this.isCreated=true){
  alert('Your registration was successful, you can now login.');
  this._router.navigate(['header_layout']);
  location.reload();
  }
   
  }
    
  ,(error)=>{
  this.userError=error.error;
  this.isCreated= false;
  
  if(error.status==409){
  this.isCreated= false;
  this.userExist=true;

  if(this.userExist=true){
    alert('User with this email address already exists.')
    }
  }
  
  console.log(error); });
    
 }
 
 get f() { return this.loginForm.controls;}

 onSubmit() {

 this.submitted = true;

 if (this.loginForm.invalid) {
 return;
 }

 this._userService.login(this.f.email.value, this.f.password.value).
 subscribe(user=> {this.user=user
  console.log(user);
 
 }
 ,error =>{
 this.loading = false;
 console.log(error);
 if(error){
  alert('Invalid login, please register to create account!')
  this._router.navigate(['/header_layout']);
  location.reload();
}
}, 
 () => this.loginauth());
 }


 loginauth(){

 localStorage.setItem('user', JSON.stringify(this.user));
 if (this.user.email && this.user.password && this.user.type=='admin'){
 alert('Login Successful.')
 this._router.navigate(['/admin']);
 }
 if (this.user.email && this.user.password && this.user.type=='customer'){
 alert('Login Successful.') 
 this._router.navigate(['/custlayout']);
 } 

 if(!this.user.email && !this.user.password){
 alert('Invalid Login') 
 }

 }

 openModal(id: string) {
 this.modalService.open(id);
 }

 closeModal(id: string) {
 this.modalService.close(id);
 }

 }
