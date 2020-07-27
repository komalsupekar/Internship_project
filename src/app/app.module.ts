import { BrowserModule } from '@angular/platform-browser';
import{AppRoutingModule} from './app--routing/app--routing.module';
import { NgModule } from '@angular/core';
import {AboutUsComponent} from './about-us/about-us.component';
import { AppComponent } from './app.component';
import{CommanDashboardComponent} from './comman-dashboard/comman-dashboard.component';
import {FormsModule} from  '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { CustdashboardComponent} from './custdashboard/custdashboard.component';
import {CustregistrationComponent} from './custregistration/custregistration.component';
import {FarmerOrCustomerComponent} from './farmer-or-customer/farmer-or-customer.component';
import {FarmerregistrationComponent} from './farmerregistration/farmerregistration.component';
import {FarmersOptionComponent} from './farmers-option/farmers-option.component';
import {GalleryComponent} from './gallery/gallery.component';
import {LoginComponent} from './login/login.component';
import {RegisterProductComponent} from './register-product/register-product.component';
import {SellproductComponent} from './sellproduct/sellproduct.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BuyComponent } from './buy/buy.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';


@NgModule({
  declarations: [
    AppComponent,AboutUsComponent,CommanDashboardComponent, AdminComponent, CartComponent, CustdashboardComponent,
    CustregistrationComponent,FarmerOrCustomerComponent,FarmerregistrationComponent,FarmersOptionComponent,
    GalleryComponent,LoginComponent,RegisterProductComponent,SellproductComponent, PageNotFoundComponent, BuyComponent, DeliveryDetailsComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
     AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

