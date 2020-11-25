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
import { AddCategoryComponent } from './admin/add-category/add-category.component'
import { AddMetodoPagoComponent } from './admin/add-metodo-pago/add-metodo-pago.component';
import { AddMetodoRetiroComponent } from './admin/add-metodo-retiro/add-metodo-retiro.component';


const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'products', component: ProductsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'users', component: AdminUsersComponent },
  { path: 'admin-category', component: AddCategoryComponent },
  { path: 'admin-metodo-pago', component: AddMetodoPagoComponent },
  { path: 'admin-metodo-retiro', component: AddMetodoRetiroComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
