import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';  
import { ProductService } from '../../product.service';  
import { AngularFirestore } from '@angular/fire/firestore';  
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {  
  
  updateProduct: boolean = false;  
  products: Product[];  
  Product: Product= new Product();  
  
  productId = null;  
  isToggle: boolean = false;  
  formSubmitted: boolean;  
  isDelete: boolean;  
  
  constructor(private productService: ProductService,  
    private angularFirestore: AngularFirestore  
  ) {  
    this.getAllProduct();  
  }  
  
  getAllProduct() {  
    this.productService.getAllProduct().subscribe((data: any) => {  
      this.products = data.map(e => {  
        return {  
          id: e.payload.doc.id,  
          ...e.payload.doc.data()  
        } as Product;  
      });  
      console.log(this.products);  
  
    });  
  }  
  
  onSubmit(f) {  
    if (f.form.valid) {  
      const ProductData = JSON.parse(JSON.stringify(this.Product));  
      debugger;  
      if (this.productId == null) {  
        this.productService.addProductInforamtion(ProductData);  
      } else {  
        this.productService.updateProductInforamtion(this.productId, ProductData);  
      }  
      this.Product= new Product();  
      f.submitted = false;  
      this.formSubmitted = true;  
      this.updateProduct = false;  
      setInterval(() => {  
        this.formSubmitted = false;  
  
      }, 2000);  
    }  
  }  
  
  //Edit Product method  
  editProduct(productId) {  
    this.productId = productId;  
    let obj: any = this.products.filter((x: any) => {  
      return x.id == productId;  
    });  
    this.updateProduct = true;  
    this.Product = obj[0];  
  }  
  
  // Delete Product method  
  deleteProduct(productId) {  
    if (confirm('Please note! This action can NOT be undone. Are you sure you want to delete?')) {  
  
      this.productService.deleteProduct(productId);  
      this.isDelete = true;  
      setInterval(() => {  
        this.isDelete = false;  
      }, 2000);  
    }  
  }  
  
  
}  
