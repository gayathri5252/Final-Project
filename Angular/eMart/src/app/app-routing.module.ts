import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDisplayComponent } from './emart/item/item-display/item-display.component';
import { ItemListComponent } from './emart/item/item-list/item-list.component';
import { CartListComponent } from './emart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './emart/bill/bill-view/bill-view.component';
import { BillListComponent } from './emart/bill/bill-list/bill-list.component';
import { LoginComponent } from './emart/login/login.component';
import { LogoutComponent } from './emart/logout/logout.component';
import { BuyerSignupComponent } from './emart/buyer-signup/buyer-signup.component';
import { SellerSignupComponent } from './emart/seller-signup/seller-signup.component';
import { SellerItemlistComponent } from './seller-item/seller-itemlist/seller-itemlist.component';
import { SellerItemdisplayComponent } from './seller-item/seller-itemdisplay/seller-itemdisplay.component';
import { AuthGuardService } from './emart/auth-guard.service';
import { ContactComponent } from './emart/contact/contact.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'buyer-signup',
  component: BuyerSignupComponent,
 
},
{
  path: 'seller-signup',
  component: SellerSignupComponent,
  
},
{
  path: 'log-out',
  component: LogoutComponent,
  canActivate:[AuthGuardService]
},
{
  path: 'item-display/:iId',
  component: ItemDisplayComponent,
  canActivate:[AuthGuardService]
},
{
  path: 'item-list',
  component: ItemListComponent
},
{
  path: 'cart-list',
  component: CartListComponent,
  canActivate:[AuthGuardService]
},
{
  path: 'bill-view',
  component: BillViewComponent,
  canActivate:[AuthGuardService]
},
{
  path: 'bill-list',
  component: BillListComponent,
  canActivate:[AuthGuardService]
},
{
  path: 'seller-itemlist',
  component: SellerItemlistComponent,
  
},
{
  path: 'seller-itemdisplay',
  component: SellerItemdisplayComponent,
  canActivate:[AuthGuardService]
},{
  path: 'contact',
  component: ContactComponent,
  canActivate:[AuthGuardService]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
