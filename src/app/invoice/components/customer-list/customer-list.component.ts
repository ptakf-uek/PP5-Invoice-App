import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: false,
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
})
export class CustomerListComponent {
  customerList: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadCustomerList();
  }

  ngOnDestroy() {
    console.log('Zamykam komponent...');
  }

  onDeletedCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer).subscribe((response: any) => {
      this.customerList = response;

      this.loadCustomerList();
    });
  }

  loadCustomerList() {
    this.customerService.getCustomerList().subscribe((response: any) => {
      this.customerList = response;
    });
  }
}
