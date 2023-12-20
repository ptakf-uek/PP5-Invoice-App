import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';

@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent,
    CustomerListElementComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule
  ]
})

export class InvoiceModule { }
