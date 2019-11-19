import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';

import { GlobalVariables } from '../../../global-variables';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductHomeComponent {
  public faGrinAlt = faGrinAlt;

  constructor(private router: Router, public productService: ProductService) {}

  public openProductDetails(productCode: string): void {
    this.router.navigate([
      '/' + GlobalVariables.ROUTING_PATH_PRODUCT_DETAILS,
      productCode
    ]);
  }

  public goToCheckout(): void {
    this.router.navigate(['/' + GlobalVariables.ROUTING_PATH_CHECKOUT]);
  }
}
