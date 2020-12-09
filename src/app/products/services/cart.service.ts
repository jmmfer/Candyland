import { Injectable } from '@angular/core';
import { Product } from 'src/app/product';

export class Carrito {
  listaBolsas: Array<Bolsa>;
  precioTotal: number;
}

export class Item {
  producto: Product;
  cantidad: number;
}

export class Bolsa {
  precioRef: number;
  listaItem: Array<Item>;
  pesoTotal: number;
  isClosed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carrito = 'shoppingCart';
  maximo = 2000;

  constructor( ) {
  }

  public vaciarCarrito(){
    localStorage.setItem(this.carrito,null);
    let carro: Carrito = JSON.parse(localStorage.getItem(this.carrito));
    console.log("carrito vacio")
    console.log(carro);
  }
  public insertarProducto(producto: Product, cantidad: number){
    var self = this;
    let carroLocal = JSON.parse(localStorage.getItem(self.carrito));
    console.log("*************************Antes de insertar****************************");
    console.log(localStorage.getItem(self.carrito));
    console.log(carroLocal);
    console.log("*************************Antes de insertar****************************");
    if(carroLocal == null){
      carroLocal= new Carrito();
    }
    if (carroLocal.listaBolsas == null) {
      carroLocal.listaBolsas = new Array<Bolsa>();
      carroLocal.listaBolsas.push(new Bolsa());
    }
    if(carroLocal.listaBolsas[0].listaItem==null){
      carroLocal.listaBolsas[0].listaItem = new Array<Item>();
    }
    let nuevoItem:Item = new Item();
    nuevoItem.producto = producto;
    nuevoItem.cantidad = cantidad;
    carroLocal.listaBolsas[0].listaItem.push(nuevoItem);
    localStorage.setItem(self.carrito, JSON.stringify(carroLocal));
    console.log("carrito final 2")
    console.log( JSON.stringify(carroLocal));
    console.log(carroLocal)
    /*
    let insertado: boolean = false;
    if (carroLocal.listaBolsas != null && carroLocal.listaBolsas.length > 0) {
      carroLocal.listaBolsas.forEach(function (bolsa: Bolsa, i) {
        if (!bolsa.isClosed && bolsa.precioRef == producto.ProductPrice) {
          if (bolsa.pesoTotal + cantidad <= self.maximo) {
            bolsa = self.insertarActualizar(bolsa,producto, cantidad);
          } else {
            let peso = self.maximo - bolsa.pesoTotal;
            carroLocal.precioTotal = carroLocal.precioTotal - bolsa.pesoTotal * bolsa.precioRef;
            bolsa = self.insertarActualizar(bolsa, producto, peso);
            carroLocal.listaBolsas[i] = bolsa;
            carroLocal.precioTotal = carroLocal.precioTotal + bolsa.pesoTotal * bolsa.precioRef;
            cantidad = cantidad - peso;
            while (cantidad > 0) {
              let bolsaNueva: Bolsa = self.crearBolsa(producto, cantidad);
              cantidad = cantidad - bolsaNueva.pesoTotal;
              carroLocal.listaBolsas.push(bolsaNueva);
              carroLocal.precioTotal = carroLocal.precioTotal + bolsaNueva.pesoTotal * bolsaNueva.precioRef;
            }
          }
          localStorage.setItem(self.carrito, JSON.stringify(carroLocal));
          return;
        }
      });
    } else {
      carroLocal.listaBolsas = new Array<Bolsa>();
      while (cantidad > 0) {
        let bolsaNueva: Bolsa = self.crearBolsa(producto, cantidad);
        cantidad = cantidad - bolsaNueva.pesoTotal;
        carroLocal.listaBolsas.push(bolsaNueva);
        carroLocal.precioTotal = carroLocal.precioTotal + bolsaNueva.pesoTotal * bolsaNueva.precioRef;
      }
      localStorage.setItem(self.carrito, JSON.stringify(carroLocal));
      console.log("carrito final 2")
      console.log( JSON.stringify(carroLocal));
      console.log(carroLocal)
    }
*/
  }

  crearBolsa(producto: Product, cantidad: number): Bolsa {
    var self = this;
    let bolsa: Bolsa = new Bolsa();
    bolsa.precioRef = producto.ProductPrice;
    if (cantidad >= self.maximo) {
      bolsa.isClosed = true;
      bolsa.pesoTotal = self.maximo;
    } else {
      bolsa.isClosed = false;
      bolsa.pesoTotal = cantidad;
    }
    let item: Item = new Item();
    item.producto = producto;
    item.cantidad = bolsa.pesoTotal;
    bolsa.listaItem = new Array<Item>();
    bolsa.listaItem.push(item);
    return bolsa;

  }

  insertarActualizar(bolsa: Bolsa, producto: Product, peso: number): Bolsa {
    var self =this;
    bolsa.listaItem.forEach(function (item: Item, i) {
      if (item.producto.toString() === producto.toString()) {
        if (bolsa.pesoTotal + peso < self.maximo) {
          item.cantidad = item.cantidad + peso;
          bolsa.pesoTotal = bolsa.pesoTotal + peso;
        } else {
          bolsa.isClosed = true;
          item.cantidad = item.cantidad + (self.maximo - bolsa.pesoTotal);
          bolsa.pesoTotal = self.maximo;
        }
        bolsa.listaItem[i] = item;
        return bolsa;
      }
    });

    let item: Item = new Item();
    item.producto = producto;
    if (bolsa.pesoTotal + peso < self.maximo) {
      item.cantidad = item.cantidad + peso;
      bolsa.pesoTotal = bolsa.pesoTotal + peso;
    } else {
      bolsa.isClosed = true;
      item.cantidad = (self.maximo - bolsa.pesoTotal);
      bolsa.pesoTotal = self.maximo;
    }
    bolsa.listaItem.push(item);
    return bolsa;
  }
}

