import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Product: Observable<any[]>;
  productSelected: Product;

  constructor(db: AngularFirestore){ 
    this.Product = db.collection('Product').valueChanges();
  }

  ngOnInit(): void {
  }
  cargarModal(Product){
    console.log(Product);
    this.productSelected = Product;
    

  }

}
