import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  finishPay(){
    alert(`COMO FUE QUE ME DEJASTE DE AMAAAAAAAR <3<3<3`)
  }

  constructor(public cartService: CartService) {}

  ngOnInit() {

  }


  productsPay = this.cartService.productos;

}
