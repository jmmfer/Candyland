import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './products/services/services.component';
import { CartComponent } from './products/cart/cart.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PickupComponent } from './pickup/pickup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PagoComponent } from './pago/pago.component';



const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin-products', component: AdminProductsComponent},
  { path: 'users', component: AdminUsersComponent},
  { path: 'delivery', component: DeliveryComponent},
  { path: 'pickup', component: PickupComponent},
  { path: 'thankyou', component: ThankyouComponent},
  { path: 'pago', component: PagoComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
