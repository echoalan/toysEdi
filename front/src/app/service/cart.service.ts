import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productos: any[] = [];

  constructor() {
    const carrito = localStorage.getItem('carrito');
    if (carrito) {
      this.productos = JSON.parse(carrito);
    }
  }

  agregarProducto(producto: any) {
    this.productos.push(producto);
    this.guardarCarrito();
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
    this.guardarCarrito();
  }

  obtenerProductos(): any[] {
    return this.productos;
  }

  calcularTotal(): number {
    let total = 0;
    this.productos.forEach(producto => {
      total += producto.PRICE;
    });
    return total;
  }

  guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }
}
