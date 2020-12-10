import {Injectable} from '@angular/core';
import {Product} from '../product';
import {AngularFirestore} from '@angular/fire/firestore';
import {Usuario} from '../user/usuario';


@Injectable({
  providedIn: 'root'
})
export class WishListService {
  producto: Product;
  usuarioid: string;


  constructor(private angularFirestore: AngularFirestore) {
  }

  async getWishList() {
    let usuario:Usuario = JSON.parse(localStorage.getItem("usuario"));
    console.log("******************************getWishList*************************");
    console.log(usuario);
    console.log(usuario.wishList);
    let productos = this.angularFirestore.collection<Product>('Producto', ref =>
      ref.where('id', 'in', usuario.wishList).limit(1)).valueChanges({idField: "id"});
  }

   addWishlistInforamtion(producto) {
     let usuario:Usuario = JSON.parse(localStorage.getItem("usuario"));
     usuario.wishList.push(producto);
     localStorage.setItem("usuario",JSON.stringify(usuario));
     console.log("*****************************usuario*********************")
     console.log(usuario)
     this.angularFirestore.doc('Usuario/' + usuario.id).set(usuario).then(result=>
     {console.log("resultado-----------------------");
     console.log(result);});
  }

  /*  if (wishlistData == null ) {

      wishlistData = new Wishlist(usuarioid, producto);
      console.log(wishlistData);
 //     return this.angularFirestore.collection('Wishlist').add({...wishlistData});
    } else {
      console.log('entro en el else');
      console.log(wishlistData);


      wishlistData.listaProductos.push(producto);
    //  return this.angularFirestore.doc('Wishlist/' + wishlistData.id).update(wishlistData);
    }*/


}
