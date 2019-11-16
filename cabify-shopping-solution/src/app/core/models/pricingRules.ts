export class PricingRules {
  twoForOneProductsBarCodes: string[];
  bulkProductsBarCodes: string[];

  constructor(
    twoForOneProductsBarCodes: string[],
    bulkProductsBarCodes: string[]
  ) {
    this.twoForOneProductsBarCodes = twoForOneProductsBarCodes;
    this.bulkProductsBarCodes = bulkProductsBarCodes;
  }
}
