import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  customerList: Customer[] = [];

  constructor(
    private customerService: CustomerService
  ) {
    this.customerList = this.customerService.getCustomerList();
    console.log(this.customerList);
  }
}
