import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from '../about-us/about-us.component';
import{CommanDashboardComponent} from '../comman-dashboard/comman-dashboard.component';
import { AdminComponent } from '../admin/admin.component';
import { CartComponent } from '../cart/cart.component';
import { CustdashboardComponent} from '../custdashboard/custdashboard.component';
import {CustregistrationComponent} from '../custregistration/custregistration.component';
import {FarmerOrCustomerComponent} from '../farmer-or-customer/farmer-or-customer.component';
import {FarmerregistrationComponent} from '../farmerregistration/farmerregistration.component';
import {FarmersOptionComponent} from '../farmers-option/farmers-option.component';
import {GalleryComponent} from '../gallery/gallery.component';
import {LoginComponent} from '../login/login.component';
import {RegisterProductComponent} from '../register-product/register-product.component';
import {SellproductComponent} from '../sellproduct/sellproduct.component';
import { BuyComponent } from '../buy/buy.component';
import { DeliveryDetailsComponent } from '../delivery-details/delivery-details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [ { path: '', component:CommanDashboardComponent, pathMatch: 'full', 
children:[{path:'login', component:LoginComponent}]},
  {path:'about-us', component:  AboutUsComponent},
  {path:'admin', component:AdminComponent},
  {path:'login',component: LoginComponent},
  {path:'Customer-dashboard',component:CustdashboardComponent},
  {path:'cust-registration',component:CustregistrationComponent},
  {path:'Im-farmer-or-customer',component:FarmerOrCustomerComponent},
  {path:'farmer-registration',component:FarmerregistrationComponent},
  {path:'farmer-options',component:FarmersOptionComponent},
  {path:'image-gallery',component:GalleryComponent},
  {path:'user-login',component:LoginComponent},
  {path:'register-cultivated-product',component:RegisterProductComponent},
  {path:'sell-product',component:SellproductComponent},
  {path:'buy-product',component:BuyComponent},
   {path:'delivery-details',component:DeliveryDetailsComponent},
  // {path:'',component:},
  // {path:'',component:},
  // {path:'',component:},
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
