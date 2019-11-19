import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductCheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/checkout/product/product.component';
import { ProductHomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/home/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    ProductHomeComponent,
    ProductDetailsComponent,
    ProductCheckoutComponent,
    ProductComponent,
    ProductCardComponent
  ],
  exports: [
    ProductHomeComponent,
    ProductDetailsComponent,
    ProductCheckoutComponent
  ],
  providers: [ProductService]
})
export class ProductModule {}
