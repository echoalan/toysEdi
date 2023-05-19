import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductosComponentComponent } from './productos-component/productos-component.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ProductService } from './service/product.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  { path: '', component: ProductosComponentComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'pagar', component: PayComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponentComponent,
    CartComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
