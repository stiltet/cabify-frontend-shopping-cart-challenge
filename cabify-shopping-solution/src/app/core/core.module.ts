import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { Checkout } from './objects/checkout';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [Checkout]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only!'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
