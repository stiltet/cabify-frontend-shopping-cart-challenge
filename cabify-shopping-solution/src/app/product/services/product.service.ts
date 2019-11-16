import { Injectable } from '@angular/core';

import AllProductsMock from '../../../mock/all-products.mock';
import { PricingRules } from '../../core/models/pricingRules';
import { Product } from '../../core/models/product';
import { Checkout } from '../../core/objects/checkout';

@Injectable()
export class ProductService {
  public checkout: Checkout = new Checkout(
    new PricingRules(['CAP'], ['TSHIRT'])
  );

  constructor() {}

  public getAllProducts(): Product[] {
    return Product.fromJsonArray(AllProductsMock);
  }
}
