import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Usuario} from "../usuario";
import {UsuarioService} from "../usuario.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  usuario: Usuario = new Usuario();
  form: FormGroup;

  
 

  constructor(private  authService:  AuthService,   
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService, public  router:  Router

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
  
  let idUser = this.authService.register(this.f.email.value, this.f.password.value);
    console.log(idUser);
    //this.usuario.userId= idUser;
    this.create(this.usuario);
  
  };

  create(usuario) {
    const UsuarioData = JSON.parse(JSON.stringify(usuario));
    this.usuarioService.addUsuarioInforamtion(UsuarioData);
    this.router.navigate(['signin']);
  }

}
