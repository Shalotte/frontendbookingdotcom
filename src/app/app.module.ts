import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListuserComponent } from './component/listuser/listuser.component';
import { UserformComponent } from './component/userform/userform.component';
import {UserService } from './shared_services/user.service';
import {MservicesService  } from './shared_services/mservices.service';
import {FormsModule} from '@angular/forms';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { ListpropertyComponent } from './listproperty/listproperty.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import {DatepickerModule, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from './modal.service';
import { ListpropertydisplayComponent } from './listpropertydisplay/listpropertydisplay.component';
import { ListbookingsComponent } from './listbookings/listbookings.component';
import { FoundDestinationsComponent } from './found-destinations/found-destinations.component';
import { BookingService } from './shared_services/booking.service';
import { PaymentService } from './shared_services/payment.service';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { PaymentdisplayComponent } from './paymentdisplay/paymentdisplay.component';
import { ManagebookingsComponent } from './Managebookings/Managebookings.component';
import { ManagepaymentsComponent } from './Managepayments/Managepayments.component';
import { ManagepropertiesComponent } from './Manageproperties/Manageproperties.component';
import { AdminService } from './shared_services/Admin.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmincomponentComponent } from './admincomponent/admincomponent.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';

 

const appRoutes:Routes=[

  { path: '',
  component: HeaderLayoutComponent,
  children:
  [{path:'', component:HomeComponent,pathMatch:'full'},
  ]
  },



  
  {path:'userform',component:UserformComponent },
  {path:'listusers',component:ListuserComponent},
  {path:'listproperty',component:ListpropertyComponent },
  {path:'custlayout',component:CustomerLayoutComponent },
  {path:'booking',component:BookingComponent  },
  {path:'header_layout',component:HeaderLayoutComponent },
  {path: 'listpropertydisplay',component:ListpropertydisplayComponent},
  {path: 'listbooking',component:ListbookingsComponent},
  {path: 'foundProperty',component:FoundDestinationsComponent},
  {path: 'payment',component:PaymentComponent},
  {path: 'update_property',component:UpdatePropertyComponent},
  {path: 'payment_display',component:PaymentdisplayComponent},
  {path: 'managebookings',component:ManagebookingsComponent},
  {path: 'managepayments',component:ManagepaymentsComponent},
  {path: 'manageproperties',component:ManagepropertiesComponent},
  {path: 'forgotpassword',component:ForgotpasswordComponent},
  {path: 'admin',component:AdmincomponentComponent},
  {path: 'homesearch',component:HomesearchComponent},
  {path: 'adminhome',component:AdminregistrationComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListuserComponent,
    UserformComponent,
    HeaderLayoutComponent,
    ListpropertyComponent,
    CustomerLayoutComponent,
    CustomerHeaderComponent,
    HomeFooterComponent,
    BookingComponent,
    PaymentComponent,
    ModalComponent,
    ListpropertydisplayComponent,
    ListbookingsComponent,
    FoundDestinationsComponent,
    UpdatePropertyComponent,
    PaymentdisplayComponent,
    ManagebookingsComponent,
    ManagepaymentsComponent,
    ManagepropertiesComponent,
    ForgotpasswordComponent,
    AdmincomponentComponent,
    HomesearchComponent,
    AdminregistrationComponent,
    
  ],

  imports: [

    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),BsDatepickerModule.forRoot(), DatepickerModule.forRoot() ,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  
  providers: [UserService, MservicesService, ModalService
    ,BookingService, PaymentService, AdminService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
