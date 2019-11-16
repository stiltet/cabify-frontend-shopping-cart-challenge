import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/checkout/product/product.component';
import { ProductHomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductDetailsComponent,
    ProductCheckoutComponent,
    ProductComponent
  ],
  exports: [
    ProductHomeComponent,
    ProductDetailsComponent,
    ProductCheckoutComponent
  ],
  providers: [ProductService],
  imports: [CommonModule]
})
export class ProductModule {}
