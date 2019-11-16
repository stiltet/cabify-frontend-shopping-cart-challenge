import AllProductsMock from '../../../mock/all-products.mock';
import { Product } from '../models/product';

export class Checkout {
  private allProducts: Product[];
  private scannedProducts: Product[] = [];

  constructor() {
    this.allProducts = Product.fromJsonArray(AllProductsMock);
  }

  public scan(barCode: string): void {
    this.scannedProducts.push(
      Object.assign(
        {},
        this.allProducts.find(product => product.barCode === barCode)
      )
    );
  }

  public remove(barCode: string): void {
    this.scannedProducts.splice(
      this.scannedProducts.indexOf(
        this.scannedProducts.find(product => product.barCode === barCode)
      ),
      1
    );
  }

  public getProductQuantity(barCode: string): number {
    if (!this.scannedProducts) {
      return 0;
    }

    const allProductsOfType = this.getAllScannedProductsOfType(barCode);

    return allProductsOfType ? allProductsOfType.length : 0;
  }

  public getProductTotalPrice(barCode: string): number {
    const allProductsOfType = this.getAllScannedProductsOfType(barCode);
    if (!allProductsOfType || allProductsOfType.length < 1) {
      return 0;
    }
    return allProductsOfType.length * allProductsOfType[0].priceInEuro;
  }

  private getAllScannedProductsOfType(barCode: string): Product[] {
    return this.scannedProducts.filter((product: Product) => {
      return product.barCode === barCode;
    });
  }

  public totalItems(): number {
    return this.scannedProducts.length;
  }

  public total(): number {
    let totalSum = 0;
    this.scannedProducts.forEach((product: Product) => {
      totalSum += product.priceInEuro;
    });
    return totalSum;
  }

  private getTwoforOneDiscountValue(barCode: string): number {
    const allProductsOfType = this.getAllScannedProductsOfType(barCode);
    const t = allProductsOfType.length % 2;
    return 0;
  }

  private getBulkDiscountValue(): number {
    return 0;
  }
}
