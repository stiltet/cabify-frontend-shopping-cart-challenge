import { Component } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class ProductCheckoutComponent {
  constructor(public productService: ProductService) {}
}
