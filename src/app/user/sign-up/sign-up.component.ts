import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserComponent} from '../user.component'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  

  form: FormGroup;

  
 

  constructor(private  authService:  AuthService,   
    private formBuilder: FormBuilder,
    private userComponent: UserComponent
  
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      fullName: ['', Validators.required],
      phone: ['', Validators.required]
  });
}
get f() { return this.form.controls; }

 
  signup() {


    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
  
  this.authService.register(this.f.email.value, this.f.password.value)
  
  };

  

}
