import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariables } from 'src/app/global-variables';

import { Product } from '../../../core/models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;
  public imageUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.product = this.productService.getAllProducts().find(product => {
      return product.productCode === this.route.snapshot.params.productCode;
    });
    this.imageUrl = this.product.bigImageUrl;
  }

  public goBackToHome(): void {
    this.router.navigate(['/' + GlobalVariables.ROUTING_PATH_HOME_PAGE]);
  }

  public addToCart(): void {
    this.productService.checkout.scan(this.product.barCode);
  }
}
