import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import { ListuserComponent } from './component/listuser/listuser.component';
import { UserformComponent } from './component/userform/userform.component';
import {UserService } from './shared_services/user.service';
import {FormsModule} from '@angular/forms';

const appRoutes:Routes=[
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'userform',component:UserformComponent },
  {path:'registration',component:RegistrationFormComponent},
  {path:'listusers',component:ListuserComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationFormComponent,
    ListuserComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
