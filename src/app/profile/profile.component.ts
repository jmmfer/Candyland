import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../user/usuario';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Usuario: Observable<any[]>;
  usuarioSelected: Usuario;
  constructor(db: AngularFirestore) {
    this.Usuario = db.collection('Usuario').valueChanges(); }

  ngOnInit(): void {
  }
  cargarUsuario(Usuario){
    this.usuarioSelected = Usuario;
    

  }
  
}
