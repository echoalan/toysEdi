import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productos-component',
  templateUrl: './productos-component.component.html',
  styleUrls: ['./productos-component.component.css']
})
export class ProductosComponentComponent {
  
  products: any;

  constructor(private CartService: CartService, private productService: ProductService) {}

  agregarProducto(producto: any) {
    this.mostrarMensaje('Producto agregado');
    setTimeout(() => {
      this.ocultarMensaje();
    }, 1000);
    this.CartService.agregarProducto(producto);
  }

  mostrarMensaje(mensaje: string) {
    const mensajeElemento = document.getElementById('mensaje');
    if (mensajeElemento) {
      mensajeElemento.innerText = mensaje;
      mensajeElemento.classList.remove('oculto');
    }

  }
  
  ocultarMensaje() {
    const mensajeElemento = document.getElementById('mensaje');
    if(mensajeElemento){
      mensajeElemento.classList.add('oculto');
    }
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
