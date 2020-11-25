import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  
 

  constructor(private  authService:  AuthService,   
    private formBuilder: FormBuilder
    
  
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
}
get f() { return this.form.controls; }

 
  signin() {


    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
  
  this.authService.login(this.f.email.value, this.f.password.value)
  
  };
}
