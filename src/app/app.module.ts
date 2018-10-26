import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import { ListuserComponent } from './component/listuser/listuser.component';
import { UserformComponent } from './component/userform/userform.component';
import {UserService } from './shared_services/user.service';
import {MservicesService  } from './shared_services/mservices.service';
import {FormsModule} from '@angular/forms';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { LoginComponent } from './login/login.component';
import { ListpropertyComponent } from './listproperty/listproperty.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import {DatepickerModule, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AlertComponent } from './alert/alert.component';
import { CustlayoutimagesComponent } from './custlayoutimages/custlayoutimages.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FilelayoutComponent } from './upload/filelayout/filelayout.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { DetailsComponent } from './details/details.component';
import { AddressComponent } from './address/address.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserComponent } from './user/user.component';
import {User1Service} from './user1.service';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from './modal.service';
import { UserPropertyComponent } from './user-property/user-property.component';
import { ListpropertydisplayComponent } from './listpropertydisplay/listpropertydisplay.component';
import { ProfileComponent } from './profile/profile.component';
import { ListbookingsComponent } from './listbookings/listbookings.component';
import { FoundDestinationsComponent } from './found-destinations/found-destinations.component';
import { ListdestinationsComponent } from './listdestinations/listdestinations.component';
import { DestinationService } from './shared_services/destination.service';
import { BookingService } from './shared_services/booking.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AccomodationCardComponent } from './accomodation-card/accomodation-card.component';
import { PaymentService } from './shared_services/payment.service';
 

const appRoutes:Routes=[

  { path: '',
  component: HeaderLayoutComponent,
  children:
  [{path:'', component:HomeComponent,pathMatch:'full'},
  ]
  },



  
  {path:'userform',component:UserformComponent },
  {path:'registration',component:RegistrationFormComponent},
  {path:'listusers',component:ListuserComponent},
  {path:'login',component:LoginComponent},
  {path:'listproperty',component:ListpropertyComponent },
  {path:'custlayout',component:CustomerLayoutComponent },
  {path:'filelayout',component:FilelayoutComponent },
  {path:'booking',component:BookingComponent  },
  {path:'destinations',component:DestinationsComponent },
  {path:'booking',component:BookingComponent  },
  {path:'destinations',component:DestinationsComponent },
  {path:'imageupload',component:UploadImageComponent },
  {path:'user1',component:UserComponent },
  {path:'header_layout',component:HeaderLayoutComponent },
  {path: 'listpropertydisplay',component:ListpropertydisplayComponent},
  {path: 'userprofile',component:ProfileComponent},
  {path: 'listbooking',component:ListbookingsComponent},
  {path: 'foundProperty',component:FoundDestinationsComponent},
  {path: 'searchbox',component:SearchBoxComponent},
  {path: 'payment',component:PaymentComponent},
 

  


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegistrationFormComponent,
    ListuserComponent,
    UserformComponent,
    HeaderLayoutComponent,
    LoginComponent,
    ListpropertyComponent,
    CustomerLayoutComponent,
    CustomerHeaderComponent,
    HomeFooterComponent,
    AlertComponent,
    CustlayoutimagesComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    FilelayoutComponent,
    DestinationsComponent,
    BookingComponent,
    PaymentComponent,
    DetailsComponent,
    AddressComponent,
    CustomerProfileComponent,
    UploadImageComponent,
    AdminProfileComponent,
    UserComponent,
    ModalComponent,
    UserPropertyComponent,
    ListpropertydisplayComponent,
    ProfileComponent,
    ListbookingsComponent,
    FoundDestinationsComponent,
    ListdestinationsComponent,
    SearchBoxComponent,
    AccomodationCardComponent,
    
  ],

  imports: [

    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),BsDatepickerModule.forRoot(), DatepickerModule.forRoot() ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [UserService, MservicesService, User1Service, ModalService,DestinationService,BookingService, PaymentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
