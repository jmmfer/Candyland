import { Component, OnInit } from '@angular/core';
import { Usuario } from '../user/usuario';  
import { UsuarioService } from '../user/usuario.service';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { User } from 'firebase';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  updateUsuario: boolean = false;  
  usuarios: Usuario[];  
  Usuario: Usuario = new Usuario();  
  
  UsuarioId = null;  
  isToggle: boolean = false;  
  formSubmitted: boolean;  
  isDelete: boolean;  
  
  constructor(private UsuarioService: UsuarioService,  
    private angularFirestore: AngularFirestore  
  ) {
    this.getAllUsuario();  
  }  
  
  getAllUsuario() {  
    this.UsuarioService.getAllUsuario().subscribe((data: any) => {  
      this.usuarios = data.map(e => {  
        return {  
          id: e.payload.doc.id,  
          ...e.payload.doc.data()  
        } as Usuario;  
      });  
      console.log(this.usuarios);  
  
    });  
  }  
  
  create(usuario) {
      const UsuarioData = JSON.parse(JSON.stringify(usuario));
      this.UsuarioService.addUsuarioInforamtion(UsuarioData);


  }  
  
 //Edit Usuario method  
 editUsuario(UsuarioId) {  
  this.UsuarioId = UsuarioId;  
  let obj: any = this.usuarios.filter((x: any) => {  
    return x.id == UsuarioId;  
  });  
  this.updateUsuario= true;  
  this.Usuario = obj[0];  
}  

// Delete Usuario method  
deleteUsuario(UsuarioId) {  
  if (confirm('Please note! This action can NOT be undone. Are you sure you want to delete?')) {  

    this.UsuarioService.deleteUsuario(UsuarioId);  
    this.isDelete = true;  
    setInterval(() => {  
      this.isDelete = false;  
    }, 2000);  
  }  
}  


}
