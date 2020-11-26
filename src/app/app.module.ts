import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PickupComponent } from './pickup/pickup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PagoComponent } from './pago/pago.component';
var firebaseConfig = {
      apiKey: "AIzaSyBEo-AJ8Kfw9iyi4PkRWB6bMwcpeikA_cw",
      authDomain: "candylandapp-f4eac.firebaseapp.com",
      databaseURL: "https://candylandapp-f4eac.firebaseio.com",
      projectId: "candylandapp-f4eac",
      storageBucket: "candylandapp-f4eac.appspot.com",
      messagingSenderId: "576862896650",
      appId: "1:576862896650:web:dc76616aea8adfd9edd5f3",
      measurementId: "G-E4BBMCH6HH"
    };
  

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    ProductsComponent,
    ServicesComponent,
    CartComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    DeliveryComponent,
    PickupComponent,
    ThankyouComponent,
    PagoComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
