import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlobalVariables } from './global-variables';
import { ProductCheckoutComponent } from './product/components/checkout/checkout.component';
import { ProductHomeComponent } from './product/components/home/home.component';
import { ProductDetailsComponent } from './product/components/product-details/product-details.component';

const routes: Routes = [
  {
    path: GlobalVariables.ROUTING_PATH_HOME_PAGE,
    component: ProductHomeComponent,
    pathMatch: 'full'
  },
  {
    path: GlobalVariables.ROUTING_PATH_CHECKOUT,
    pathMatch: 'full',
    component: ProductCheckoutComponent
  },
  {
    path: GlobalVariables.ROUTING_PATH_PRODUCT_DETAILS + '/:productCode',
    pathMatch: 'full',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
