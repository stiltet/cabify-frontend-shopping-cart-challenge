export class Discount {
  label: string;
  amount: number;

  constructor(label: string, discountAmount: number) {
    this.label = label;
    this.amount = discountAmount;
  }
}
