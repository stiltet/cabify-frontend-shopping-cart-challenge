export class Product {
  name: string;
  barCode: string;
  productCode: string;
  description: string;
  priceInEuro: number;
  imageUrl: string;
  quantity = 0;

  constructor(jsonObject: any) {
    this.name = jsonObject.Name;
    this.barCode = jsonObject.BarCode;
    this.productCode = jsonObject.ProductCode;
    this.description = jsonObject.Description;
    this.priceInEuro = jsonObject.PriceInEuro;
    this.imageUrl = jsonObject.ImageUrl;
  }

  static fromJsonArray(array: Array<any>): Product[] {
    return array.map(obj => new Product(obj));
  }
}
