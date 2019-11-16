import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCheckoutComponent } from './product/components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: ProductCheckoutComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
