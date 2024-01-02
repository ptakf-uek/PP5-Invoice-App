import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  constructor() { }

  addCustomer(customer: Customer): void {
    this.customerList.push(customer);
  }

  getCustomerList(): Customer[] {
    return this.customerList;
  }

  deleteCustomer(deletedCustomer: Customer): void {
    this.customerList = this.customerList.filter((customer: Customer) => { return customer.nip !== deletedCustomer.nip });
  }
}
