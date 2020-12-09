import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable, combineLatest } from 'rxjs';
import { Product } from '../product';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Product: Array<Product> = new Array<Product>();
  productSelected: Product;
  public productsList: any[];
  public productsListBackup: any[];

  searchkey: string;

  startAt = new Subject();
  endAt = new Subject();
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
  
  
  
  Product2: Observable<any[]>;
  filtro:string;
  allProduct:Array<Product> = new Array<Product>();


  constructor(db: AngularFirestore){
    this.Product2 = db.collection('Product').valueChanges();
    this.Product2.forEach((item)=>{
      item.forEach((prod)=>{
        this.allProduct.push(prod as Product);
        this.Product.push(prod as Product);
      })
    });
  }

  ngOnInit(): void {
  
  /* combineLatest(this.startobs, this.endobs).subscribe((value) => {
     this.firequery(value[0], value[1]).subscribe((products)=> {
       this.products = products;
     })
    })*/
  }
  cargarModal(Product){
    this.productSelected = Product;
    

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
        return prod.ProductName.toLowerCase().includes(src.filtro.toLowerCase()) || prod.CategoryName.toLowerCase().includes((src.filtro.toLowerCase()));
      });

    }
  }



 
}
