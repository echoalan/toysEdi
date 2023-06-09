import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { BrandService } from '../service/brand.service';

@Component({
  selector: 'app-productos-component',
  templateUrl: './productos-component.component.html',
  styleUrls: ['./productos-component.component.css']
})
export class ProductosComponentComponent {

  products: any;

  brands: any;

  filteredProducts: any;

  constructor(private CartService: CartService, private productService: ProductService, private BrandService: BrandService) { }

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
    if (mensajeElemento) {
      mensajeElemento.classList.add('oculto');
    }
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });

    this.BrandService.getBrand().subscribe((data) =>{
      this.brands = data;
    });
  }

  filtrarProd(brand: any) {
    if (brand) {
      this.filteredProducts = this.products.filter((product: any) => product.BRAND === brand);
    } else {
      this.filteredProducts = this.products;
    }
  }

}
