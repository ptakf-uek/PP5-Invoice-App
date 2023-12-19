import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

@NgModule({
  declarations: [CustomerFormComponent, CustomerListComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})

export class InvoiceModule { }
