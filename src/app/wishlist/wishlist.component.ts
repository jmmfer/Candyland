import { Component, OnInit } from '@angular/core';
import { WishListService } from './wishlist.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Wishlist} from './wishlist';
import { Usuario} from '../user/usuario';
import { Product } from '../product';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {


  wishlistId = null;  
  isToggle: boolean = false;  
  formSubmitted: boolean;  
  isDelete: boolean;  

  user: Usuario;
  id: string;
  product: Product;

  Wishlist: Observable<any[]>;

  constructor(private wishlistService: WishListService,  
    private db: AngularFirestore   ) { 

     // this.Wishlist = db.collection('Wishlist').valueChanges();
    }

  ngOnInit(): void {
  }
 

   
   
    removeProduct(){

    }
  
  
  

}
