import AllProductsMock from '../../../mock/all-products.mock';
import { Discount } from '../models/discount';
import { PricingRules } from '../models/pricingRules';
import { Product } from '../models/product';

export class Checkout {
  private allProducts: Product[];
  private pricingRules: PricingRules;
  private scannedProducts: Product[] = [];
  private discountsApplied: Discount[] = [];

  constructor(pricingRules: PricingRules) {
    this.allProducts = Product.fromJsonArray(AllProductsMock);
    this.pricingRules = pricingRules;
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
    const totalSum = this.totalWithoutDiscounts();
    const totalDiscountsValue = this.totalDiscountsValue();
    return totalSum - totalDiscountsValue;
  }

  public totalWithoutDiscounts(): number {
    let totalSum = 0;
    this.scannedProducts.forEach((product: Product) => {
      totalSum += product.priceInEuro;
    });
    return totalSum;
  }

  public totalDiscountsValue(): number {
    this.discountsApplied = [];
    return this.twoForOneTotalDiscountValue() + this.bulkTotalDiscountValue();
  }

  private twoForOneTotalDiscountValue(): number {
    let totalDiscount = 0;

    if (this.pricingRules.twoForOneProductsBarCodes.length < 1) {
      return 0;
    }

    this.pricingRules.twoForOneProductsBarCodes.forEach((barCode: string) => {
      const productDiscount = this.twoForOneDiscountValue(barCode);
      totalDiscount += productDiscount;
      if (productDiscount > 0) {
        this.discountsApplied.push(
          new Discount(
            `2x1 ${barCode.charAt(0).toUpperCase() +
              barCode.toLowerCase().slice(1)} offer`,
            productDiscount
          )
        );
      }
    });

    return totalDiscount;
  }

  private twoForOneDiscountValue(barCode: string): number {
    const allProductsOfType = this.getAllScannedProductsOfType(barCode);

    if (allProductsOfType.length < 2) {
      return 0;
    }

    return allProductsOfType.length % 2 === 0
      ? allProductsOfType[0].priceInEuro * (allProductsOfType.length / 2)
      : allProductsOfType[0].priceInEuro *
          Math.floor(allProductsOfType.length / 2);
  }

  private bulkTotalDiscountValue(): number {
    let totalDiscount = 0;

    if (this.pricingRules.bulkProductsBarCodes.length < 1) {
      return 0;
    }

    this.pricingRules.bulkProductsBarCodes.forEach((barCode: string) => {
      const productDiscount = this.bulkDiscountValue(barCode);
      totalDiscount += productDiscount;
      if (productDiscount > 0) {
        this.discountsApplied.push(
          new Discount(
            `3x ${barCode.charAt(0).toUpperCase() +
              barCode.toLowerCase().slice(1)} offer`,
            productDiscount
          )
        );
      }
    });

    return totalDiscount;
  }

  private bulkDiscountValue(barCode: string): number {
    const allProductsOfType = this.getAllScannedProductsOfType(barCode);

    if (allProductsOfType.length < 3) {
      return 0;
    }

    return (
      (allProductsOfType[0].priceInEuro / 100) * 5 * allProductsOfType.length
    );
  }

  public getDiscountsApplied(): Discount[] {
    return this.discountsApplied;
  }
}
