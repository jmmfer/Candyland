import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Wishlist } from '../wishlist/wishlist'
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario} from '../user/usuario';
import { flatMap } from 'rxjs/internal/operators';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';





@Injectable({
  providedIn: 'root'
})
export class WishListService {
  producto: Product;
  usuarioid: string;



  constructor(private angularFirestore: AngularFirestore) {
  }

 
   addWishlistInforamtion(usuarioid, producto) {  
    
    let wishlist = this.angularFirestore.collection<Wishlist>('Wishlist', ref =>
    ref.where('usuarioId', '==', usuarioid).limit(1)).valueChanges({idField:'id'}).pipe(
      flatMap(wish=>wish)
   
    );
   
    let wishlistData: Wishlist
    
    
    wishlist.subscribe(queriedItems => {
    
    wishlistData = queriedItems as Wishlist;
    console.log(wishlistData)
 
   
 
    });
    if(wishlistData == null){
    
      wishlistData = new Wishlist(usuarioid, producto);
      console.log(wishlistData)
      
   
     }else{
       
       wishlistData.listaProductos.push(producto);
       return this.angularFirestore.doc('Wishlist/' + wishlistData.id).update(wishlistData);  
  
     }
  
    
    
  }
  
  


  
}
