import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';

export const routes: Routes = [
  { path: 'customer/list', component: CustomerListComponent },
  { path: 'customer/form', component: CustomerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}
