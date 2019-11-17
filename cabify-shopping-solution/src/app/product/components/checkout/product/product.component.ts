import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';

import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() public product: Product;
  public imageUrl: string;
  public quantity = 0;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.imageUrl = this.product.imageUrl;
  }

  ngOnChanges(): void {
    this.quantity = this.productService.checkout.getProductQuantity(
      this.product.barCode
    );
  }

  public increaseQuantity(): void {
    this.productService.checkout.scan(this.product.barCode);
  }

  public decreaseQuantity(): void {
    this.productService.checkout.remove(this.product.barCode);
  }
}
