import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() public product: Product;
  public imageUrl: string;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.imageUrl = this.product.imageUrl;
  }
}
