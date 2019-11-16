import { ChangeDetectorRef, Component, DoCheck, KeyValueDiffers } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class ProductCheckoutComponent implements DoCheck {
  private differ: any;

  constructor(
    private keyValueDiffers: KeyValueDiffers,
    private ref: ChangeDetectorRef,
    public productService: ProductService
  ) {
    this.differ = this.keyValueDiffers.find({}).create();
  }

  public ngDoCheck(): void {
    const checkoutHasBeenChanged = this.differ.diff(
      this.productService.checkout
    );

    if (checkoutHasBeenChanged) {
      this.ref.detectChanges();
    }
  }
}
