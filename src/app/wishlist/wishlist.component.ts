import { Component, OnInit } from '@angular/core';
import { WishListService } from './wishlist.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Wishlist} from './wishlist';
import { Usuario} from '../user/usuario';
import { Product } from '../product';



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

  constructor(private wishlistService: WishListService,  
    private angularFirestore: AngularFirestore  ) { }

  ngOnInit(): void {
  }
 

   
   
    removeProduct(){

    }
  
  
  

}
