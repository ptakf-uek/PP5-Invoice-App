import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [
  { path: 'product/form', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
