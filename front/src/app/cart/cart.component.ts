import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor(public cartService: CartService) {}

  eliminarProducto(index: number) {
    this.cartService.eliminarProducto(index);
  }

  verCarrito = false;

  showCart(){
    this.verCarrito =! this.verCarrito;
  }

  ngOnInit() {

  }
}
