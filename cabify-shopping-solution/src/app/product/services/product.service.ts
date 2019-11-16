import { Injectable } from '@angular/core';
import { Checkout } from 'src/app/core/objects/checkout';

import AllProductsMock from '../../../mock/all-products.mock';
import { Product } from '../../core/models/product';

@Injectable()
export class ProductService {
  public checkout: Checkout = new Checkout();

  constructor() {}

  public getAllProducts(): Product[] {
    return Product.fromJsonArray(AllProductsMock);
  }
}
