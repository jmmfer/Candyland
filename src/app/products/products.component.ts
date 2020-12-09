import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { map } from 'rxjs/operators';
import {CartService} from './services/cart.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Product: Array<Product> = new Array<Product>();
  Product2: Observable<any[]>;
  productSelected: Product;
  public productsList: any[];
  public productsListBackup: any[];
  cantidad : number;
  filtro:string;
  allProduct:Array<Product> = new Array<Product>();

  constructor(db: AngularFirestore, private cartService: CartService){
    this.Product2 = db.collection('Product').valueChanges();
    this.Product2.forEach((item)=>{
      item.forEach((prod)=>{
        this.allProduct.push(prod as Product);
        this.Product.push(prod as Product);
      })
    });
  }

  filtrar():void{
    console.log("Entro en el filtro");
    let src = this;
    if(this.filtro ===""){

      this.Product= this.allProduct;
    }else{
      this.Product = this.allProduct.filter(function(prod){
        console.log(prod.ProductName);
        console.log(src.filtro);
        console.log(prod.ProductName.includes(src.filtro));
        console.log(prod.CategoryName);
        console.log(prod.CategoryName.includes((src.filtro)));
        return prod.ProductName.includes(src.filtro) || prod.CategoryName.includes((src.filtro));
      });

    }
  }
  ngOnInit(): void {
  }
  cargarModal(Product){
    this.productSelected = Product;


  }

  insertarProducto(){
    this.cartService.insertarProducto(this.productSelected,this.cantidad);
  }

  vaciarCarrito(){
    this.cartService.vaciarCarrito();
  }
}
