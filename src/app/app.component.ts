import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CandylandApp';
  constructor(
    protected authService:AuthService
  ) {
  }
  
  isLoggedIn():boolean{
    return JSON.parse(localStorage.getItem('user'))!==null;
   }

   logout(){
    this.authService.logout()
  }

}
